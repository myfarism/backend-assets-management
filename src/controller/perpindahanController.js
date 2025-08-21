const { validationResult } = require("express-validator");
const prisma = require('../config/database');
const { generatePindahId } = require('../config/token');

class PerpindahanController {
    static async pindahAsset(req, res) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const { asetId, lokasiBaruId, tanggalPindah } = req.body;

            // Cek aset dan ambil lokasi lama
            const aset = await prisma.aset.findUnique({
                where: { asetId },
                include: { lokasi: true }
            });

            if (!aset) {
                return res.status(404).json({
                    success: false,
                    message: "Aset tidak ditemukan"
                });
            }

            // Cek lokasi baru
            const lokasiBaru = await prisma.lokasi.findUnique({
                where: { idLokasi: lokasiBaruId }
            });

            if (!lokasiBaru) {
                return res.status(404).json({
                    success: false,
                    message: "Lokasi baru tidak ditemukan"
                });
            }

            // Update lokasi aset
            await prisma.aset.update({
                where: { asetId },
                data: { lokasiId: lokasiBaruId }
            });

            const perpindahanId = generatePindahId();

            // Simpan riwayat perpindahan otomatis
            const perpindahan = await prisma.perpindahan.create({
                data: {
                    idPindahan: perpindahanId,
                    lokasiId: lokasiBaruId,
                    idAset: asetId,
                    tempatLama: aset.lokasi.lokasi, // ambil otomatis dari DB
                    tempatBaru: lokasiBaru.lokasi,   // ambil otomatis dari DB
                    tanggalPindah: tanggalPindah ? new Date(tanggalPindah) : new Date()
                }
            });

            return res.status(200).json({
                success: true,
                message: "Aset berhasil dipindahkan",
                data: perpindahan
            });

        } catch (error) {
            console.error("Error pindah aset:", error);
            return res.status(500).json({
                success: false,
                message: "Terjadi kesalahan server"
            });
        }
    }


    static async getDataPindah(req, res) {
        try {
            let { 
                page = 1, 
                limit = 10, 
                recent = "desc", 
                thisWeek, 
                search 
            } = req.query;

            console.log(req.query);

            // Convert ke integer & validasi
            page = parseInt(page);
            limit = parseInt(limit);
            if (isNaN(page) || page < 1) page = 1;
            if (isNaN(limit) || limit < 1) limit = 10;

            const skip = (page - 1) * limit;

            // Filter awal
            const filter = {};

            // Filter minggu ini
            if (thisWeek === "true") {
                const startOfWeek = new Date();
                startOfWeek.setHours(0, 0, 0, 0);
                startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay()); // Minggu awal

                const endOfWeek = new Date(startOfWeek);
                endOfWeek.setDate(endOfWeek.getDate() + 6); // Sabtu akhir

                filter.tanggalPindah = {
                    gte: startOfWeek,
                    lte: endOfWeek
                };
            }

            // Filter pencarian aset
            if (search) {
                filter.OR = [
                    { aset: { merkDanTipe: { contains: search, mode: "insensitive" } } },
                    { aset: { asetId: { contains: search, mode: "insensitive" } } }
                ];
            }

            // Hitung total data sesuai filter
            const totalCount = await prisma.perpindahan.count({
                where: filter
            });

            // Ambil data perpindahan dengan filter & pagination
            const perpindahanList = await prisma.perpindahan.findMany({
                where: filter,
                skip,
                take: limit,
                include: {
                    aset: true,
                    lokasi: true
                },
                orderBy: { createdAt: recent.toLowerCase() === "asc" ? "asc" : "desc" }
            });

            res.status(200).json({
                success: true,
                message: "Data perpindahan berhasil diambil",
                totalData: totalCount,
                pagination: {
                    totalItems: totalCount,
                    totalPages: Math.ceil(totalCount / limit),
                    currentPage: page,
                    pageSize: limit
                },
                data: perpindahanList
            });

        } catch (error) {
            console.error("Error get data perpindahan:", error);
            res.status(500).json({
                success: false,
                message: "Gagal ambil data perpindahan: " + error.message
            });
        }
    }

}

module.exports = PerpindahanController;