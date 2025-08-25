const prisma = require('../config/database');
const { generateMaintenanceId } = require('../config/token');


class MaintenanceController {
    static async addMaintenance(req, res) {
        try {
            const { asetId } = req.params;
            const {
                tanggalMulai,
                perkiraanSelesai,
                deskripsi
            } = req.body;

            const existingAset = await prisma.aset.findUnique({
                where: { asetId }
            });

            if (!existingAset) {
                return res.status(404).json({
                    success: false,
                    message: 'Aset tidak ditemukan'
                });
            }

            if(!tanggalMulai || !perkiraanSelesai) {
                return res.status(400).json({
                    success: false,
                    message: 'Harap masukan tanggal mulai atau perkiraan selesai'
                });
            }

            const generateId = generateMaintenanceId()
            
            // Simpan ke database
            const dataMaintenance = await prisma.maintenance.create({
                data: {
                    maintenanceId: generateId,
                    aset: {
                        connect: {
                            asetId: asetId
                        }
                    },
                    tanggalMulai: tanggalMulai ? new Date(tanggalMulai) : null,
                    perkiraanSelesai: perkiraanSelesai ? new Date(perkiraanSelesai) : null,
                    deskripsi: deskripsi,
                    statusMaintenance: 'onprocess'
                }
            });

            // Ubah Status Aset
            await prisma.aset.update({
                where: { asetId },
                data: {
                    statusAset: 'maintenance'
                }
            });

            return res.status(200).json({
                success: true,
                message: 'Maintenance berhasil ditambahkan',
                data: dataMaintenance
            });
            

        } catch(error) {
            console.log('Gagal menambahkan maintenance: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menambahkan maintenance: ' + error.message
            });
        }
    }

    // Finish Maintenance
    static async finishMaintenance(req, res) {
        try {
            const { maintenanceId } = req.params;


            const maintain = await prisma.maintenance.findUnique({
                where: { maintenanceId },
                select: {
                    aset: {
                        select: {
                            asetId: true,
                            merkDanTipe: true
                        }
                    }
                }
            });

            const asetId = maintain.aset.asetId;

            if(!maintain) {
                console.log('Maintenance tidak ditemukan');
                return res.status(404).json({
                    success: false,
                    message: 'Maintenance tidak ditemukan'
                });
            }

            // Update status maintenance
            const finish = await prisma.maintenance.update({
                where: { maintenanceId },
                data: {
                    statusMaintenance: 'done',
                    tanggalSelesai: new Date()
                }
            });

            // Update status aset
            await prisma.aset.update({
                where: { asetId },
                data: {
                    statusAset: 'aktif'
                }
            });

            return res.status(200).json({
                success: true,
                message: 'Berhasil menyelesaikan maintenance',
                data: finish
            });


        } catch(error) {
            console.log('Gagal menyelesaikan maintenance: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menyelesaikan maintenance: ' + error.message
            });
        }
    }

    static async getDataMaintenance(req, res) {
        try {
            const maintenance = await prisma.maintenance.findMany({
                select: {
                    maintenanceId: true,
                    aset: {
                        select: {
                            asetId: true,
                            merkDanTipe: true
                        }
                    },
                    tanggalMulai: true,
                    perkiraanSelesai: true,
                    tanggalSelesai: true,
                    statusMaintenance: true
                }
            });

            const totalStatusMaintenance = maintenance.length;
            console.log(totalStatusMaintenance);

            const statusDone = await prisma.maintenance.findMany({ where: {statusMaintenance: 'done' } });
            const statusOnProcess = await prisma.maintenance.findMany({ where: {statusMaintenance: 'onprocess' } });

            return res.status(200).json({
                success: true,
                data: maintenance,
                summary: {
                    maintenanceLogs: totalStatusMaintenance,
                    totalDone: statusDone.length,
                    totalOnProcess: statusOnProcess.length
                }
            });
        } catch(error) {
            console.log('Gagal mengambil data maintenance: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data maintenance: ' + error.message
            });
        }
    }

    // Detail Maintenance
    static async detailMaintenance(req, res) {
        try {
            const { maintenanceId } = req.params;

            const dataDetail = await prisma.maintenance.findUnique({
                where: { maintenanceId },
                select: {
                    aset: {
                        select: {
                            asetId: true,
                            merkDanTipe: true
                        }
                    },
                    maintenanceId: true,
                    tanggalMulai: true,
                    perkiraanSelesai: true,
                    statusMaintenance: true,
                    deskripsi: true,
                    createdAt: true
                }
            });

            if(!dataDetail) {
                console.log('Detail tidak ditemukan');
                return res.status(500).json({
                    success: false,
                    message: 'Gagal mengambil detail maintenance: '
                });
            }

            return res.status(200).json({
                success: true,
                data: dataDetail
            });
        } catch(error) {
            console.log('Gagal mengambil detail maintenance: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil detail maintenance: ' + error.message
            });
        }
    }

}

module.exports = MaintenanceController;