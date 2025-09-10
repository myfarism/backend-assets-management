const prisma = require('../config/database');
const { generatePengeluaranId } = require('../config/token');

function convertBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (_, value) =>
        typeof value === 'bigint'
            ? Number(value) // atau value.toString()
            : value
    ));
}

class PengeluaranController {
    static async addPengeluaran(req, res) {
        try {
            const { idAset, jumlahKeluar, deskripsi, addedBy } = req.body;

            // Validasi aset
            const existingAset = await prisma.aset.findUnique({
                where: { asetId: idAset },
            });

            if (!existingAset) {
                return res.status(404).json({
                    success: false,
                    message: "Aset tidak ditemukan",
                });
            }

            const jumlahAwal = parseInt(existingAset.jumlah);
            const jumlahKeluarInt = parseInt(jumlahKeluar);
            const sisaJumlah = jumlahAwal - jumlahKeluarInt;

            // Cek stok cukup
            if (sisaJumlah < 0) {
                return res.status(400).json({
                    success: false,
                    message: `Tidak bisa mengeluarkan aset. Stok tersedia: ${existingAset.jumlah}`,
                });
            }

            const pengeluaranId = generatePengeluaranId();

            // Transaksi pengeluaran dan update jumlah aset
            try {
                const pengeluaran = await prisma.pengeluaran.create({
                    data: {
                        pengeluaranId,
                        idAset,
                        jumlahKeluar: jumlahKeluarInt,
                        deskripsi,
                        addedBy,
                    },
                });

                await prisma.aset.update({
                    where: { asetId: idAset },
                    data: { jumlah: sisaJumlah },
                });

                return res.status(200).json(convertBigInt({
                    success: true,
                    message: 'Data pengeluaran berhasil ditambah',
                    data: pengeluaran,
                }));
            } catch (err) {
                return res.status(500).json({
                    success: false,
                    message: 'Gagal menyimpan data pengeluaran: ' + err.message,
                });
            }

        } catch (err) {
            console.error('Terjadi kesalahan saat pengeluaran:', err);
            return res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server: ' + err.message,
            });
        }
    }

    static async getAllPengeluaran(req, res) {
        try {
            let { 
                page = 1, 
                limit = 10, 
                subKategoriId, 
                search, 
                recent = 'desc' 
            } = req.query;

            page = parseInt(page);
            limit = parseInt(limit);
            const skip = (page - 1) * limit;

            const where = {};

            // filter sub kategori
            if (subKategoriId) {
                where.aset = { subKategoriAsetId: subKategoriId };
            }

            // pencarian deskripsi atau merk aset
            if (search) {
                where.OR = [
                    { deskripsi: { contains: search, mode: 'insensitive' } },
                    { aset: { merkDanTipe: { contains: search, mode: 'insensitive' } } }
                ];
            }

            // hitung total data
            const totalData = await prisma.pengeluaran.count();

            // ambil data
            const pengeluaranList = await prisma.pengeluaran.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: recent.toLowerCase() === 'asc' ? 'asc' : 'desc' },
                include: {
                    aset: {
                        select: {
                            asetId: true,
                            merkDanTipe: true,
                            unit: true,
                            jumlah: true,
                            subKategoriAsetId: true,
                            subKategoriAset: {
                                select: {
                                    subAsetId: true,
                                    nameSubAset: true
                                }
                            }
                        }
                    },
                }
            });

            return res.status(200).json(convertBigInt({
                success: true,
                message: "Data pengeluaran berhasil diambil",
                page,
                limit,
                totalData,
                totalPages: Math.ceil(totalData / limit),
                data: pengeluaranList
            }));

        } catch (error) {
            console.error('Error getAllPengeluaran:', error);
            return res.status(500).json({
                success: false,
                message: 'Terjadi kesalahan server Get Data Pengeluaran: ' + error.message,
            });
        }
    }

}

module.exports = PengeluaranController;