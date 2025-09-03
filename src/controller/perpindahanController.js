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
                recent = 'desc',
                thisWeek,
                thisMonth,
                search,
                page = 1,
                limit = 10
            } = req.query;

            page = parseInt(page);
            limit = parseInt(limit);

            const where = {};

            // 🔎 Filter search by merkDanTipe (aset) & lokasi (lokasi)
            if (search) {
                where.OR = [
                    {
                        aset: {
                            is: { merkDanTipe: { contains: search, mode: 'insensitive' } }
                        }
                    },
                    {
                        lokasi: {
                            is: { lokasi: { contains: search, mode: 'insensitive' } }
                        }
                    }
                ];
            }

            // 📅 Filter minggu ini
            if (thisWeek === "true") {
                const now = new Date();
                const firstDayOfWeek = new Date(now);
                firstDayOfWeek.setDate(now.getDate() - now.getDay()); // Minggu
                firstDayOfWeek.setHours(0, 0, 0, 0);

                const lastDayOfWeek = new Date(firstDayOfWeek);
                lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
                lastDayOfWeek.setHours(23, 59, 59, 999);

                where.createdAt = {
                    gte: firstDayOfWeek,
                    lte: lastDayOfWeek
                };
            }

            // 📅 Filter bulan ini
            if (thisMonth === "true") {
                const now = new Date();
                const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
                const lastDayOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0);
                lastDayOfMonth.setHours(23, 59, 59, 999);

                where.createdAt = {
                    gte: firstDayOfMonth,
                    lte: lastDayOfMonth
                };
            }

            // 🔢 Hitung total sesuai filter
            const totalCount = await prisma.perpindahan.count({ where });

            // 📥 Ambil data sesuai filter + pagination
            const perpindahanList = await prisma.perpindahan.findMany({
                where,
                include: {
                    aset: {
                    select: {
                        asetId: true,
                        merkDanTipe: true,
                        subKategoriAset: {
                        select: {
                            nameSubAset: true,
                        },
                        },
                    },
                    },
                    lokasi: {
                    select: {
                        idLokasi: true,
                        lokasi: true,
                    },
                    },
                },
                orderBy: { createdAt: recent.toLowerCase() === 'asc' ? 'asc' : 'desc' },
                skip: (page - 1) * limit,
                take: limit,
            });

            res.status(200).json({
                success: true,
                message: "Data perpindahan berhasil diambil",
                totalData: totalCount,
                currentPage: page,
                totalPages: Math.ceil(totalCount / limit),
                perPage: limit,
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