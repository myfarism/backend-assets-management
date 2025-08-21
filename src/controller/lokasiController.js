const { validationResult } = require('express-validator');
const prisma = require('../config/database');
const { generateLokasiId } = require('../config/token');

class LokasiController {
    // Tambah lokasi
    static async addLokasi(req, res) {
        const { lokasi } = req.body;

        try {
            // Cek lokasi sudah ada
            const lokasiExists = await prisma.lokasi.findUnique({
                where: { lokasi }
            });

            if (lokasiExists) {
                return res.status(409).json({
                    success: false,
                    message: 'Lokasi sudah ada!'
                });
            }

            const idLokasi = generateLokasiId();
            const kategoriAset = "asetFisik";

            // Buat lokasi baru
            const newLokasi = await prisma.lokasi.create({
                data: {
                    idLokasi: idLokasi,
                    lokasi,
                    kategoriAset: kategoriAset,
                }
            });

            res.status(201).json({
                success: true,
                message: 'Lokasi berhasil ditambahkan!',
                data: newLokasi
            });
        } catch (error) {
            console.error('Error menambahkan lokasi:', error);
            res.status(500).json({
                success: false,
                message: 'Gagal menambahkan lokasi: ' + error.message
            });
        }
    }

    // Update lokasi
    static async updateLokasi(req, res) {
        const { idLokasi } = req.params;
        const { lokasi } = req.body;

        try {
            const updatedLokasi = await prisma.lokasi.update({
                where: { idLokasi: String(idLokasi) },
                data: {
                    lokasi,
                }
            });

            res.status(200).json({
                success: true,
                message: 'Lokasi berhasil diperbarui!',
                data: updatedLokasi
            });
        } catch (error) {
            console.error('Error update lokasi:', error);
            res.status(500).json({
                success: false,
                message: 'Gagal update lokasi: ' + error.message
            });
        }
    }

    // Hapus lokasi
    static async deleteLokasi(req, res) {
        const { idLokasi } = req.params;

        try {
            const lokasi = await prisma.lokasi.findUnique({
                where: { idLokasi: String(idLokasi) },
                include: {
                    _count: { select: { aset: true } }
                }
            });

            if (!lokasi) {
                return res.status(404).json({
                    success: false,
                    message: 'Lokasi tidak ditemukan'
                });
            }

            if (lokasi._count.aset > 0) {
                return res.status(400).json({
                    success: false,
                    message: `Lokasi tidak bisa dihapus karena masih ada ${lokasi._count.aset} aset terkait`
                });
            }

            // Hapus lokasi
            await prisma.lokasi.delete({
                where: { idLokasi: String(idLokasi) }
            });

            res.status(200).json({
                success: true,
                message: 'Lokasi berhasil dihapus!'
            });
        } catch (error) {
            console.error('Error hapus lokasi:', error);
            res.status(500).json({
                success: false,
                message: 'Gagal hapus lokasi: ' + error.message
            });
        }
    }


    // Ambil semua lokasi + total aset
    static async getAllLokasi(req, res) {
        try {

            //Hitung total lokasi
            const totalLokasiCount = await prisma.lokasi.count();

            const lokasiList = await prisma.lokasi.findMany({
                include: {
                    aset: {
                        select: {
                            subKategoriAset: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            });

            // Mapping data
            const dataWithTotal = lokasiList.map(lokasi => {
                const subKategoriMap = new Map();

                lokasi.aset.forEach(aset => {
                    const sub = aset.subKategoriAset;
                    if (sub && !subKategoriMap.has(sub.subAsetId)) {
                        subKategoriMap.set(sub.subAsetId, sub);
                    }
                });

                return {
                    idLokasi: lokasi.idLokasi,
                    lokasi: lokasi.lokasi,
                    kategoriAset: lokasi.kategoriAset,
                    totalAset: lokasi.aset.length,
                    subKategoriAset: Array.from(subKategoriMap.values())
                };
            });

            res.status(200).json({
                success: true,
                message: 'Daftar lokasi berhasil diambil',
                totalLokasi: totalLokasiCount,
                data: dataWithTotal
            });

        } catch (error) {
            console.error('Error ambil lokasi:', error);
            res.status(500).json({
                success: false,
                message: 'Gagal ambil data lokasi: ' + error.message
            });
        }
    }

    static async getDetailLokasi(req, res) {
        try {
            const { idLokasi } = req.params;

            const lokasi = await prisma.lokasi.findUnique({
                where: { idLokasi },
                select: {
                    idLokasi: true,
                    lokasi: true,
                    kategoriAset: true,
                    aset: {
                        select: {
                            subKategoriAset: true
                        }
                    }
                }
            });

            if (!lokasi) {
                return res.status(404).json({
                    success: false,
                    message: 'Lokasi tidak ditemukan'
                });
            }

            // Ambil subKategoriAset unik dari aset
            const subKategoriMap = new Map();
            lokasi.aset.forEach(aset => {
                const sub = aset.subKategoriAset;
                if (sub && !subKategoriMap.has(sub.subAsetId)) {
                    subKategoriMap.set(sub.subAsetId, sub);
                }
            });

            // Buat objek hasil yang ingin dikirim ke frontend
            const detailLokasi = {
                idLokasi: lokasi.idLokasi,
                lokasi: lokasi.lokasi,
                kategoriAset: lokasi.kategoriAset,
                subKategoriAset: Array.from(subKategoriMap.values()),
                totalAset: lokasi.aset.length
            };

            return res.status(200).json({
                success: true,
                message: 'Data detail lokasi berhasil diambil',
                data: detailLokasi
            });

        } catch (error) {
            console.log('Gagal mengambil detail lokasi: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil detail lokasi: ' + error.message
            });
        }
    }


}

module.exports = LokasiController;
