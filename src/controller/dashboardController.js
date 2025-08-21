const { validationResult } = require('express-validator');
const prisma = require('../config/database');
const { getEnumValues, getLokasiList } = require('../utils/asetUtils');

class DashboardController {
    static async dashboard(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty) {
            return res.status(400).json({
                success: false,
                error: errors.array()
            });
        }
        try {
            // Query Data
            const [asets, totalAsetsCount, statusCounts, kategoriValid, kategoriCounts] = await Promise.all([
                prisma.aset.findMany({
                    select: {
                        asetId: true,
                        lokasiId: true,
                        kategoriAset: true,
                        merkDanTipe: true,
                        tahun: true,
                        kondisiAset: true,
                        statusAset: true,
                        createdAt: true
                    }
                }),
                prisma.aset.count(),
                prisma.aset.groupBy({
                    by: ['statusAset'],
                    _count: { statusAset: true }
                }),
                getEnumValues("SubAsetKategori"),
                prisma.aset.groupBy({
                    by: ['kategoriAset'],
                    _count: { kategoriAset: true }
                })
            ]);

            const totalPengadaan = await prisma.pengadaan.count();

            const summary = {
                totalAset: totalAsetsCount,
                totalKategori: kategoriValid.length,
                totalStatusAktif: statusCounts.find(r => r.statusAset === 'aktif')?._count.statusAset || 0,
                totalStatusNonaktif: statusCounts.find(r => r.statusAset === 'nonaktif')?._count.statusAset || 0,
                totalStatusMaintenance: statusCounts.find(r => r.statusAset === 'maintenance')?._count.statusAset || 0,
                totalPengadaan
            };

            const kategoriSummary = {};
            kategoriValid.forEach(k => {
                kategoriSummary[k] = kategoriCounts.find(r => r.kategoriAset === k)?._count.kategoriAset || 0;
            });

            return res.status(200).json({
                success: true,
                message: 'Data dashboard berhasil diambil',
                //data: asets,
                summary,
                kategoriSummary
            });

        } catch (error) {
            console.error('Error saat mengambil daftar aset: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil daftar aset: ' + error.message
            });
        }
    }
}

module.exports = DashboardController;