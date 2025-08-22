const prisma = require('../config/database');

class SubKategori {
    static async addSubKategori(req, res) {
        try {

        } catch(error){
            console.log('Gagal menambahkan sub kategori: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menambahkan sub kategori: ' + error.message
            });
        }
    }
}

module.exports = SubKategori;