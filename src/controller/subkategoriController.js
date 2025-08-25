const prisma = require('../config/database');
const { generateSubKategori } = require('../config/token');

class SubKategori {
    static async addSubKategori(req, res) {
        try {
            const { nameSubAset } = req.body

            if(!nameSubAset) {
                return res.status(400).json({
                    success: false,
                    message: 'Harap masukan nama Sub Kategori'
                });
            }

            const subAset = await prisma.subAsetKategori.findFirst({
                where: {
                    nameSubAset: {
                        equals: nameSubAset,
                        mode: 'insensitive'
                    }
                }
            });

            if(subAset) {
                return res.status(400).json({
                    success: false,
                    message: 'Nama Sub Kategori sudah ada'
                });
            }

            const generateId = generateSubKategori()

            const addSubKategori = await prisma.subAsetKategori.create({
                data: {
                    subAsetId: generateId,
                    nameSubAset: nameSubAset
                }
            });

            console.log(subAset);
            return res.status(200).json({
                success: true,
                message: 'Berhasil tambah sub kategori',
                data: addSubKategori
            });
        } catch(error){
            console.log('Gagal menambahkan sub kategori: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menambahkan sub kategori: ' + error.message
            });
        }
    }

    static async updateSubKategori(req, res) {
        try {
            const { subAsetId } = req.params;
            const { nameSubAset } = req.body;

            const subAset = await prisma.subAsetKategori.findUnique({ where: { subAsetId } });

            if(!subAset) {
                return res.status(404).json({
                    success: false,
                    message: 'Sub Kategori tidak ditemukan'
                });
            }

            const data = await prisma.subAsetKategori.update({
                where: { subAsetId },
                data: {
                    nameSubAset: nameSubAset
                }
            });

            if(!data) {
                return res.status(400).json({
                    success: false,
                    message: 'Gagal update sub kategori'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Berhasil update sub kategori',
                data: data
            });


        } catch(error) {
            console.log('Gagal update sub kategori: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal update sub kategori: ' + error.message
            });
        }
    }

    static async deleteSubKategori(req, res) {
        try {
            const { subAsetId } = req.params

            const subAset = await prisma.subAsetKategori.findUnique({ where: { subAsetId } });

            if(!subAset) {
                return res.status(404).json({
                    success: false,
                    message: 'Sub Kategori tidak ditemukan'
                });
            }

            // Hapus Sub Kategori
            const data = await prisma.subAsetKategori.delete({ where: { subAsetId } });

            return res.status(200).json({
                success: true,
                message: 'Berhasil hapus sub kategori',
                data: data
            });
        } catch(error) {
            console.log('Gagal menghapus sub kategori: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menghapus sub kategori: ' + error.message
            });
        }
    }

    // Get Sub Kategori
    static async getSubKategori(req, res){
        try{
            const subKategori = await prisma.subAsetKategori.findMany({
                include: {
                    _count: {
                        select: {
                            asets: true
                        }
                    }
                }
            });

            return res.status(200).json({
                success: true,
                data: subKategori.map(item => ({
                    subAsetId: item.subAsetId,
                    nameSubAset: item.nameSubAset,
                    totalAset: item._count.asets
                }))
            });

        } catch(error){
            console.log('Gagal mengambil sub kategori: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil sub kategori: ' + error.message
            });
        }
    }
}

module.exports = SubKategori;