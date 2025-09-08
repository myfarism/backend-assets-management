const { validationResult } = require('express-validator');
const prisma = require('../config/database');
const { getEnumValues, getLokasiList } = require('../utils/asetUtils');

class DashboardController {
    static async dashboard(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array()
            });
        }

        try {
            // Query utama secara paralel
            const [
                totalAsetsCount,
                totalRequestCount,
                totalPengadaan,
                statusCounts,
                kondisiCounts
            ] = await Promise.all([
                prisma.aset.count(),
                prisma.request.count(),
                prisma.pengadaan.count(),
                prisma.aset.groupBy({
                    by: ['statusAset'],
                    _count: { statusAset: true }
                }),
                prisma.aset.groupBy({
                    by: ['kondisiAset'],
                    _count: { kondisiAset: true }
                }),
            ]);

            // Buat summary berdasarkan hasil query
            const summary = {
                totalAset: totalAsetsCount,
                totalRequest: totalRequestCount,
                totalPengadaan: totalPengadaan,

                statusAktif: statusCounts.find(r => r.statusAset === 'aktif')?._count.statusAset || 0,
                statusNonaktif: statusCounts.find(r => r.statusAset === 'nonaktif')?._count.statusAset || 0,
                statusMaintenance: statusCounts.find(r => r.statusAset === 'maintenance')?._count.statusAset || 0,

                kondisiBaik: kondisiCounts.find(r => r.kondisiAset === 'baik')?._count.kondisiAset || 0,
                kondisiNormal: kondisiCounts.find(r => r.kondisiAset === 'normal')?._count.kondisiAset || 0,
                kondisiBuruk: kondisiCounts.find(r => r.kondisiAset === 'buruk')?._count.kondisiAset || 0,
            };

            return res.status(200).json({
                success: true,
                message: 'Data dashboard berhasil diambil',
                summary
            });

        } catch (error) {
            console.error('Error saat mengambil data dashboard: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data dashboard: ' + error.message
            });
        }
    }

}

module.exports = DashboardController;