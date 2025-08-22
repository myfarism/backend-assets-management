const prisma = require('../config/database');
const { generateMaintenaceId } = require('../config/token');


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

            const generateMaintenanceId = generateMaintenaceId()

            

        } catch(error) {
            console.log('Gagal menambahkan maintenance: ', error);
            return res.status(500).json({
                success
            });
        }
    }

}

module.exports = MaintenanceController;