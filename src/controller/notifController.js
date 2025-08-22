const prisma = require('../config/database');

class NotifController {
    static async getNotif(req, res) {
        try {
            const selectedColumns = ["asetId", "merkDanTipe", "masaBerlaku", "sisaHari"];
            const quotedColumns = selectedColumns.map(col => `"${col}"`).join(', ');
            const data = await prisma.$queryRawUnsafe(
                `SELECT ${quotedColumns} FROM asetexpiring`
            );

            return res.status(200).json({ 
                success: true,
                data });
        } catch (error) {
            console.log('Gagal mengambil data notifikasi: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil notifikasi: ' + error.message
            });
        }
    }
}

module.exports = NotifController;
