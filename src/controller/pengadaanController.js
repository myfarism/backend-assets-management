const { validationResult } = require("express-validator");
const prisma = require('../config/database');
const { generatePengadaanId } = require('../config/token');
const { getEnumValues, getLokasiList } = require('../utils/asetUtils');


function convertBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (_, value) =>
        typeof value === 'bigint'
            ? Number(value) // atau value.toString()
            : value
    ));
}

class PengadaanController {
    static async addPengadaan(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { 
                tanggalBeli, 
                lokasiId, 
                kategoriAset, 
                namaAset, 
                jumlahAset, 
                hargaSatuan, 
                vendor 
            } = req.body;

            const kategoriValid = await getEnumValues("SubAsetKategori");
            const lokasiValid = await getLokasiList();

            if (!kategoriValid.includes(kategoriAset)) {
                return res.status(400).json({ success: false, message: "Kategori aset tidak valid" });
            }
            if (!lokasiValid.some(l => l.idLokasi === String(lokasiId))) {
                return res.status(400).json({ success: false, message: "Lokasi tidak ditemukan" });
            }

            const pengadaanId = generatePengadaanId();
            const tanggalBeliFormatted = new Date(req.body.tanggalBeli);
            const totalHarga = parseInt(jumlahAset) * parseInt(hargaSatuan);

            const pengadaan = await prisma.pengadaan.create({
                data: {
                    pengadaanId,
                    tanggalBeli: tanggalBeliFormatted,
                    lokasiId,
                    kategoriAset,
                    namaAset,
                    jumlahAset: parseInt(jumlahAset),
                    hargaSatuan,
                    totalHarga,
                    vendor
                }
            });

            const sanitizedPengadaan = {
                ...pengadaan,
                jumlahAset: Number(pengadaan.jumlahAset),
                hargaSatuan: Number(pengadaan.hargaSatuan),
                totalHarga: Number(pengadaan.totalHarga)
            };

            return res.status(200).json({
                success: true,
                message: 'Data pengadaan berhasil ditambah',
                data: sanitizedPengadaan
            });
            
        } catch (error) {
            console.log('Gagal menambahkan pengadaan: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menambahkan pengadaan: ' + error.message
            });
        }
    }

    static async updatePengadaan(req, res) {
        try {
            const { pengadaanId } = req.params;

            const {
                tanggalBeli,
                lokasiId,
                kategoriAset,
                namaAset,
                jumlahAset,
                hargaSatuan,
                vendor
            } = req.body;

            const existingPengadaan = await prisma.pengadaan.findUnique({ where: { pengadaanId }});

            if (!existingPengadaan) {
                return res.status(404).json({
                    success: false,
                    message: 'Pengadaan tidak ditemukan!'
                });
            }

            const kategoriValid = await getEnumValues("SubAsetKategori");
            const lokasiValid = await getLokasiList();

            if (!kategoriValid.includes(kategoriAset || existingPengadaan.kategoriAset)) {
                return res.status(400).json({ success: false, message: "Kategori aset tidak valid" });
            }

            if (!lokasiValid.some(l => l.idLokasi === String(lokasiId || existingPengadaan.lokasiId))) {
                return res.status(400).json({ success: false, message: "Lokasi tidak ditemukan" });
            }

            const dataUpdate = {
                tanggalBeli: tanggalBeli || existingPengadaan.tanggalBeli,
                kategoriAset: kategoriAset || existingPengadaan.kategoriAset,
                namaAset: namaAset || existingPengadaan.namaAset,
                jumlahAset: jumlahAset || existingPengadaan.jumlahAset,
                hargaSatuan: hargaSatuan || existingPengadaan.hargaSatuan,
                vendor: vendor || existingPengadaan.vendor
            };

            if (lokasiId) {
                dataUpdate.lokasiId = String(lokasiId);
            } else {
                dataUpdate.lokasiId = existingPengadaan.lokasiId;
            }

            const updatePengadaan = await prisma.pengadaan.update({
                where: { pengadaanId },
                data: dataUpdate
            });

            return res.status(200).json(convertBigInt({
                success: true,
                message: 'Pengadaan berhasil diupdate',
                data: updatePengadaan
            }));
        }catch(error) {
            console.log('Gagal update pengadaan: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal update pengadaan: ' + error.message
            });
        }
    }

    static async deletePengadaan(req, res) {
        try {
            const { pengadaanId } = req.params;

            const pengadaan = await prisma.pengadaan.findUnique({ where : { pengadaanId }});

            if (!pengadaan) {
                return res.status(404).json({
                    success: false,
                    message: 'Pengadaan tidak ditemukan'
                });
            }

            await prisma.pengadaan.delete({ where: { pengadaanId }});

            return res.status(200).json({
                success: true,
                message: 'Pengadaan berhasil dihapus'
            });
        } catch(error) {
            console.log('Gagal menghapus pengadaan: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menghapus pengadaan: ' + error.message
            });
        }
    }

    static async getDataPengadaan(req, res) {
        try {
            let {
                recent = 'desc',
                cost,
                lokasi,
                thisWeek,
                search,
                page = 1,
                limit = 10
            } = req.query;

            page = parseInt(page);
            limit = parseInt(limit);
            if (isNaN(page) || page < 1) page = 1;
            if (isNaN(limit) || limit < 1) limit = 10;

            const skip = (page - 1) * limit;

            const where = {};

            if (lokasi) {
                where.lokasiId = String(lokasi);
            }

            if (search) {
                where.OR = [
                    { namaAset: { contains: search, mode: 'insensitive' } },
                    { vendor: { contains: search, mode: 'insensitive'}}
                ];
            }

            const orderBy = [];
            if (recent) {
                orderBy.push({ tanggalBeli: recent.toLowerCase() === 'asc' ? 'asc': 'desc' });
            }
            if (cost) {
                orderBy.push({ totalHarga: cost.toLowerCase() === 'asc' ? 'asc' : 'desc' });
            }

            const [pengadaanList, totalCount, totalSpend, highestCost, lowestCost] = await Promise.all([
                prisma.pengadaan.findMany({
                    where,
                    orderBy,
                    skip,
                    take: limit,
                    select: {
                        pengadaanId: true,
                        tanggalBeli: true,
                        kategoriAset: true,
                        namaAset: true,
                        jumlahAset: true,
                        hargaSatuan: true,
                        totalHarga: true,
                        vendor: true,
                        createdAt: true,
                        lokasi: {
                            select: {
                                idLokasi: true,
                                lokasi: true
                            }
                        }
                    },
                    orderBy: { createdAt: 'desc' }
                }),
                prisma.pengadaan.count({ where }),
                prisma.pengadaan.aggregate({
                    where,
                    _sum: { totalHarga: true }
                }),
                prisma.pengadaan.findFirst({
                    where,
                    orderBy: { totalHarga: 'desc' }
                }),
                prisma.pengadaan.findFirst({
                    where,
                    orderBy: { totalHarga: 'asc' }
                })
            ]);

            return res.status(200).json(convertBigInt({
                success: true,
                message: 'Data Pengadaan berhasil diambil',
                meta: {
                    totalPengadaan: totalCount,
                    totalSpend: totalSpend._sum.totalHarga || 0,
                    highestCost,
                    lowestCost
                },
                pagination: {
                    totalPages: Math.ceil(totalCount / limit),
                    currentPage: page,
                    pageSize: limit
                },
                data: pengadaanList
            }));
        } catch(error) {
            console.log('Gagal mengambil data pengadaan: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data pengadaan: ' + error.message
            });
        }
    }

    static async getDetailPengadaan(req, res) {
        try {
            const { pengadaanId } = req.params;

            const pengadaan = await prisma.pengadaan.findUnique({
                where: { pengadaanId },
                select: {
                    pengadaanId: true,
                    tanggalBeli: true,
                    kategoriAset: true,
                    namaAset: true,
                    jumlahAset: true,
                    hargaSatuan: true,
                    vendor: true,
                    lokasi: {
                        select: {
                            idLokasi: true,
                            lokasi: true
                        }
                    }
                }
            });

            if (!pengadaan) {
                return res.status(404).json({
                    success: false,
                    message: 'Pengadaan tidak ditemukan!'
                });
            }

            return res.status(200).json(convertBigInt({
                success: true,
                message: 'Data detail pengadaan berhasil diambil',
                data: pengadaan
            }));
        } catch(error) {
            console.log('Gagal mengambil detail pengadaan: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil detail pengadaan: ' + error.message
            });
        }
    }
}

module.exports = PengadaanController;