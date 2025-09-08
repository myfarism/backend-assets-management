const prisma = require('../config/database');

class NotifController {
    static async getNotif(req, res) {
        try {
            const data = await prisma.$queryRaw`
                SELECT 
                    "asetId", 
                    "merkDanTipe", 
                    "masaBerlaku",
                    CASE 
                        WHEN "masaBerlaku" IS NOT NULL 
                        THEN GREATEST(DATE_PART('day', "masaBerlaku" - NOW()), 0)
                        ELSE NULL 
                    END AS "sisaHari"
                FROM "Aset"
                WHERE "kategoriAset" = 'Aset Digital'
                  AND "masaBerlaku" IS NOT NULL
                  AND DATE_PART('day', "masaBerlaku" - NOW()) <= 5
                ORDER BY 
                    CASE 
                        WHEN DATE_PART('day', "masaBerlaku" - NOW()) <= 0 THEN 9999
                        ELSE DATE_PART('day', "masaBerlaku" - NOW())
                    END ASC
            `;

            return res.status(200).json({ 
                success: true,
                data 
            });
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
