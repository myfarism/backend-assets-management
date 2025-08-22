//const { Suspense } = require('react');
const prisma = require('../config/database');
const { validationResult } = require('express-validator');
const { generateAsetId } = require('../config/token');
const { getEnumValues, getLokasiList } = require('../utils/asetUtils');
const fs = require('fs');
const path = require('path');
const QRCode = require('qrcode');
const { mapStatusAset, mapKondisiAset, mapHakMilik } = require('../utils/enumUtils');

class AsetController {
    static async getViewAddAsset(req, res) {
        try {
            const kondisiAset = await getEnumValues("AsetKondisi");
            const statusAset = await getEnumValues("AsetStatus");
            const kategoriAset = await getEnumValues("AsetKategori");
            const hakMilik = await getEnumValues("HakMilik");
            const lokasi = await getLokasiList();

            const subKategoriAset = await prisma.subAsetKategori.findMany({
                select: {
                    subAsetId: true,
                    nameSubAset: true
                }
            });

            const userRole = await prisma.userRole.findMany({
                select: {
                    userRoleId: true,
                    nameRole: true
                }
            });

            return res.status(200).json({
                success: true,
                message: 'Data dropdown berhasil diambil',
                data: { subKategoriAset, kondisiAset, statusAset, lokasi, kategoriAset, hakMilik, userRole }
            });
        } catch (error) {
            console.error("Error getViewAddAsset:", error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil data dropdown: ' + error.message
            });
        }
    }

    static async addAsset(req, res) {
        const uploadBasePath = path.resolve(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadBasePath)) {
            fs.mkdirSync(uploadBasePath, { recursive: true });
        }

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const {
                lokasiId,
                kategoriAset,
                subKategoriAset,
                merkDanTipe,
                tahun,
                kondisiAset,
                statusAset,
                nomorSeri,
                masaBerlaku,
                statusKepemilikan,
                pic
            } = req.body;
            console.log(req.body);

            // Ambil data valid dari helper
            const kategoriValid = await prisma.subAsetKategori.findMany({
                select: {
                    subAsetId: true,
                    nameSubAset: true
                }
            });
            //console.log(kategoriValid);
            const kondisiValid = await getEnumValues("AsetKondisi");
            const statusValid = await getEnumValues("AsetStatus");
            const hakValid = await getEnumValues("HakMilik");
            const lokasiValid = await getLokasiList();

            // Generate ID unik
            const asetId = generateAsetId(kategoriAset);

            if (kategoriAset === 'asetFisik') {
                //console.log(req.body);
                // Validasi input

                const isValid = kategoriValid.some(item => item.subAsetId === subKategoriAset);

                if (!isValid) {
                    return res.status(400).json({ success: false, message: "Sub Kategori aset tidak valid" });
                }
                if (!kondisiValid.includes(kondisiAset)) {
                    return res.status(400).json({ success: false, message: "Kondisi aset tidak valid" });
                }
                if (!statusValid.includes(statusAset)) {
                    return res.status(400).json({ success: false, message: "Status aset tidak valid" });
                }
                if (!lokasiValid.some(l => l.idLokasi === String(lokasiId))) {
                    return res.status(400).json({ success: false, message: "Lokasi tidak ditemukan" });
                }
                if (!hakValid.includes(statusKepemilikan)) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan tidak valid" });
                }

                if (statusKepemilikan === 'pribadi' && !pic) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan pribadi PIC tidak boleh kosong" });
                }

                // Upload foto maksimal 5
                let urlFoto = [];
                if (req.files && req.files.length > 0) {
                    if (req.files.length > 5) {
                        return res.status(400).json({ success: false, message: "Maksimal 5 foto" });
                    }

                    // Loop melalui file yang diupload dan ubah namanya
                    urlFoto = req.files.map((file, index) => {
                        const newFilename = `${asetId}_${index + 1}${path.extname(file.originalname)}`;

                        // Path baru -> server/public/uploads
                        const newFilePath = path.join(uploadBasePath, newFilename);

                        fs.renameSync(file.path, newFilePath);

                        // URL public yang bisa diakses
                        return `/uploads/${newFilename}`;
                    });
                }
                
                // QR Code data
                const qrDataObj = {
                    asetId,
                    merkDanTipe,
                    tahun,
                };

                const qrPath = path.join(uploadBasePath, "qrcodes");
                if (!fs.existsSync(qrPath)) fs.mkdirSync(qrPath, { recursive: true });

                const qrFilePath = path.join(qrPath, `${asetId}.png`);
                await QRCode.toFile(qrFilePath, JSON.stringify(qrDataObj, null, 2));

                // URL public
                const urlQR = `/uploads/qrcodes/${asetId}.png`;
            
                // Simpan ke database
                const newAssetFisik = await prisma.aset.create({
                    data: {
                        asetId,
                        lokasi: {
                            connect: {
                                idLokasi: String(lokasiId),
                            },
                        },
                        kategoriAset,
                        subKategoriAset: {
                            connect: {
                                subAsetId: subKategoriAset,
                            },
                        },
                        merkDanTipe,
                        tahun: parseInt(tahun),
                        kondisiAset: mapKondisiAset(kondisiAset),
                        statusAset: mapStatusAset(statusAset),
                        nomorSeri,
                        masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : null,
                        statusKepemilikan: mapHakMilik(statusKepemilikan),
                        urlFoto,
                        urlQR,
                        pic
                    }
                });

                return res.status(200).json({
                    success: true,
                    message: 'Aset Fisik berhasil ditambahkan',
                    data: newAssetFisik
                });
            } else if (kategoriAset === 'asetDigital'){
                if (!hakValid.includes(statusKepemilikan)) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan tidak valid" });
                }

                if (statusKepemilikan === 'pribadi' && !pic) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan pribadi PIC tidak boleh kosong" });
                }

                const newStatusAsetDigital = 'aktif';

                const newAsetDigital = await prisma.aset.create({
                    data: {
                        asetId,
                        kategoriAset,
                        merkDanTipe,
                        masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : null,
                        statusAset: newStatusAsetDigital,
                        statusKepemilikan: statusKepemilikan.toLowerCase(),
                        pic
                    }
                });

                return res.status(200).json({
                    success: true,
                    message: 'Aset Digital berhasil ditambahkan',
                    data: newAsetDigital
                });
            } else {
                console.log(req.body);
                console.log('Error');
                return res.status(400).json({
                    success: false,
                    message: 'Kategori Asset tidak valid'
                });
            }

        } catch (error) {
            console.error("Error addAsset:", err);

            // 🔥 Rollback: hapus QR dan foto
            try {
                if (fs.existsSync(qrFilePath)) fs.unlinkSync(qrFilePath);
                if (urlFoto.length > 0) {
                    urlFoto.forEach(f => {
                        const filePath = path.join(__dirname, `..${f}`);
                        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
                    });
                }
            } catch (cleanupErr) {
                console.error("Error cleanup files:", cleanupErr);
            }

            return res.status(500).json({
                success: false,
                message: 'Gagal menambahkan aset',
                error: err.message
            });
        }
    }
    
    static async updateAsset(req, res) {
        const uploadBasePath = path.resolve(process.cwd(), "public", "uploads");
        if (!fs.existsSync(uploadBasePath)) {
            fs.mkdirSync(uploadBasePath, { recursive: true });
        }

        const deleteOldPhotos = (oldPhotos) => {
            if (!oldPhotos || oldPhotos.length === 0) return;
            oldPhotos.forEach(photoUrl => {
                const filePath = path.join(process.cwd(), "public", photoUrl);
                if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                console.log(`🗑️ Deleted old photo: ${filePath}`);
                }
            });
        };

        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    success: false,
                    errors: errors.array()
                });
            }

            const { asetId } = req.params;
            const {
                lokasiId,
                kategoriAset,
                subKategoriAset,
                merkDanTipe,
                tahun,
                kondisiAset,
                statusAset,
                nomorSeri,
                masaBerlaku,
                statusKepemilikan,
                pic
            } = req.body;

            const existingAset = await prisma.aset.findUnique({ where: { asetId } });
            if (!existingAset) {
                return res.status(404).json({ success: false, message: 'Aset tidak ditemukan' });
            }

            // --------- ASET FISIK ----------
            if (kategoriAset === "asetFisik") {
                const kategoriValid = await prisma.subAsetKategori.findMany({ select: { subAsetId: true } });
                const kondisiValid = await getEnumValues("AsetKondisi");
                const statusValid = await getEnumValues("AsetStatus");
                const hakValid = await getEnumValues("HakMilik");
                const lokasiValid = await getLokasiList();

                if(merkDanTipe || tahun) {
                    return res.status(400).json({
                        success: false,
                        message: 'Tidak bisa merubah Nama atau Tahun'
                    });
                }

                if (subKategoriAset && !kategoriValid.some(item => item.subAsetId === subKategoriAset)) {
                    return res.status(400).json({ success: false, message: "Sub Kategori aset tidak valid" });
                }
                if (kondisiAset && !kondisiValid.includes(kondisiAset)) {
                    return res.status(400).json({ success: false, message: "Kondisi aset tidak valid" });
                }
                if (statusAset && !statusValid.includes(statusAset)) {
                    return res.status(400).json({ success: false, message: "Status aset tidak valid" });
                }
                if (lokasiId && !lokasiValid.some(l => l.idLokasi === String(lokasiId))) {
                    return res.status(400).json({ success: false, message: "Lokasi tidak ditemukan" });
                }
                if (statusKepemilikan && !hakValid.includes(statusKepemilikan)) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan tidak valid" });
                }
                if (statusKepemilikan === "Pribadi" && (pic === null || pic === undefined || pic === '')) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan pribadi PIC tidak boleh kosong" });
                }

                // Update foto jika ada
                let urlFoto = null;
                
                const dataUpdate = {
                    kondisiAset: kondisiAset ? mapKondisiAset(kondisiAset) : existingAset.kondisiAset,
                    statusAset: statusAset ? mapStatusAset(statusAset) : existingAset.statusAset,
                    nomorSeri: nomorSeri || existingAset.nomorSeri,
                    masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : existingAset.masaBerlaku,
                    statusKepemilikan: statusKepemilikan ? mapHakMilik(statusKepemilikan) : existingAset.statusKepemilikan,
                    pic: pic || existingAset.pic,
                };

                if (req.files && req.files.length > 0) {
                    if (req.files.length > 5) {
                        return res.status(400).json({ success: false, message: "Maksimal 5 foto" });
                    }

                    // 🔥 Hapus foto lama sebelum ganti
                    deleteOldPhotos(existingAset.urlFoto);

                    urlFoto = req.files.map((file, index) => {
                        const newFilename = `${asetId}_${index + 1}${path.extname(file.originalname)}`;
                        const newFilePath = path.join(uploadBasePath, newFilename);
                        fs.renameSync(file.path, newFilePath);
                        return `/uploads/${newFilename}`;
                    });
                    dataUpdate.urlFoto = urlFoto;
                }

                if (lokasiId) {
                    dataUpdate.lokasi = {
                        connect: { idLokasi: String(lokasiId) }
                    };
                }
                if (subKategoriAset) {
                    dataUpdate.subKategoriAset = {
                        connect: { subAsetId: subKategoriAset }
                    };
                }

                const updatedAsset = await prisma.aset.update({ where: { asetId }, data: dataUpdate });
                return res.status(200).json({ success: true, message: "Aset Fisik berhasil diperbarui", data: updatedAsset });

            // --------- ASET DIGITAL ----------
            } else if (kategoriAset === "asetDigital") {
                const hakValid = await getEnumValues("HakMilik");
                if (statusKepemilikan && !hakValid.includes(statusKepemilikan)) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan tidak valid" });
                }
                if (statusKepemilikan === "pribadi" && !pic) {
                    return res.status(400).json({ success: false, message: "Hak Kepemilikan pribadi PIC tidak boleh kosong" });
                }

                const dataUpdate = {
                    merkDanTipe: merkDanTipe || existingAset.merkDanTipe,
                    masaBerlaku: masaBerlaku ? new Date(masaBerlaku) : existingAset.masaBerlaku,
                    statusAset: statusAset ? mapStatusAset(statusAset) : existingAset.statusAset,
                    statusKepemilikan: statusKepemilikan ? mapHakMilik(statusKepemilikan) : existingAset.statusKepemilikan,
                    pic: pic || existingAset.pic
                };

                const updatedAsset = await prisma.aset.update({ where: { asetId }, data: dataUpdate });
                return res.status(200).json({ success: true, message: "Aset Digital berhasil diperbarui", data: updatedAsset });

            } else {
                return res.status(400).json({ success: false, message: "Kategori aset tidak valid" });
            }

        } catch (error) {
            console.error("Error updateAsset:", error);
            return res.status(500).json({
                success: false,
                message: "Gagal memperbarui aset",
                error: error.message
            });
        }
    }



    // Delete Asset
    static async deleteAsset(req, res) {
        try {
            const { asetId } = req.params;

            // Cek apakah aset ada di database
            const asset = await prisma.aset.findUnique({
                where: { asetId }
            });

            if (!asset) {
                return res.status(404).json({
                    success: false,
                    message: 'Aset tidak ditemukan'
                });
            }

            // Hapus foto jika ada
            if (asset.urlFoto && asset.urlFoto.length > 0) {
                asset.urlFoto.forEach((fotoPath) => {
                    const filePath = path.join(__dirname, `../uploads/${fotoPath.split('/').pop()}`);
                    if (fs.existsSync(filePath)) {
                        fs.unlinkSync(filePath); // Hapus file foto
                    }
                });
            }

            // Hapus QR Code
            const qrFilePath = path.join(__dirname, `../uploads/qrcodes/${asetId}.png`);
            if (fs.existsSync(qrFilePath)) {
                fs.unlinkSync(qrFilePath); // Hapus file QR Code
            }

            // Hapus data aset dari database
            await prisma.aset.delete({
                where: { asetId }
            });

            return res.status(200).json({
                success: true,
                message: 'Aset berhasil dihapus'
            });

        } catch (error) {
            console.error("Error deleteAsset:", error);
            return res.status(500).json({
                success: false,
                message: 'Gagal menghapus aset',
                error: error.message
            });
        }
    }

    static async getAllAsset(req, res) {
        try {
            let { 
                recent,        // 'asc' | 'desc'
                lokasi,        // lokasiId
                kategori,      
                kondisi,       // enum AsetKondisi
                status,        // enum AsetStatus
                search,        // keyword search
                page = 1, 
                limit = 10 
            } = req.query;

            page = parseInt(page);
            limit = parseInt(limit);

            if (isNaN(page) || page < 1) page = 1;
            if (isNaN(limit) || limit < 1) limit = 10;

            const skip = (page - 1) * limit;

            // Filter
            const where = {};

            if (lokasi) {
                where.lokasiId = String(lokasi); // pastikan string untuk UUID
            }

            if (kategori) {
                where.kategoriAset = kategori;
            }

            if (kondisi) {
                where.kondisiAset = kondisi;
            }

            if (status) {
                where.statusAset = status;
            }

            if (search) {
                where.OR = [
                    { asetId: { contains: search.trim(), mode: 'insensitive' } },
                    { merkDanTipe: { contains: search.trim(), mode: 'insensitive' } }
                ];
            }

            // Sorting
            let orderBy = {};
            if (recent && ['asc', 'desc'].includes(recent.toLowerCase())) {
                orderBy = { createdAt: recent.toLowerCase() };
            } else {
                orderBy = { createdAt: 'desc' }; // default terbaru
            }

            // Query Data
            const [asets, totalAsetsCount, statusCounts, subKategoriValid] = await Promise.all([
                prisma.aset.findMany({
                    where,
                    skip,
                    take: limit,
                    orderBy,
                    select: {
                        asetId: true,
                        kategoriAset: true,
                        merkDanTipe: true,
                        tahun: true,
                        kondisiAset: true,
                        statusAset: true,
                        createdAt: true,
                        lokasi: { 
                            select: { 
                                idLokasi: true, 
                                lokasi: true 
                            } 
                        },
                        subKategoriAset: {
                            select: {
                                subAsetId: true,
                                nameSubAset: true
                            }
                        },
                    }
                }),
                prisma.aset.count(),
                prisma.aset.groupBy({
                    by: ['statusAset'],
                    _count: { statusAset: true }
                }),
                prisma.subAsetKategori.findMany({
                    select: {
                        subAsetId: true,
                        nameSubAset: true
                    }
                }),
            ]); 

            const summary = {
                totalAset: totalAsetsCount,
                totalKategori: subKategoriValid.length,
                totalStatusAktif: statusCounts.find(r => r.statusAset === 'aktif')?._count.statusAset || 0,
                totalStatusNonaktif: statusCounts.find(r => r.statusAset === 'nonaktif')?._count.statusAset || 0,
                totalStatusMaintenance: statusCounts.find(r => r.statusAset === 'maintenance')?._count.statusAset || 0
            };

            return res.status(200).json({
                success: true,
                message: 'Daftar aset berhasil diambil',
                data: asets,
                pagination: {
                    totalItems: totalAsetsCount,
                    totalPages: Math.ceil(totalAsetsCount / limit),
                    currentPage: page,
                    pageSize: limit
                },
                summary
            });

        } catch (error) {
            console.error('Error saat mengambil daftar aset: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil daftar aset: ' + error.message
            });
        }
    }


    static async getDetailAsset(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { asetId } = req.params;

            const aset = await prisma.aset.findUnique({
                where: { asetId },
                select: {
                    asetId: true,
                    merkDanTipe: true,
                    tahun: true,
                    kategoriAset: true,
                    nomorSeri: true,
                    kondisiAset: true,
                    statusAset: true,
                    lokasiId: true,
                    statusKepemilikan: true,
                    masaBerlaku: true,
                    urlQR: true,
                    urlFoto: true
                }
            });

            if (!aset) {
                return res.status(404).json({
                    success: false,
                    message: 'Aset tidak ditemukan!'
                });
            }

            const idAset = asetId;
            const historyPindahan = await prisma.perpindahan.findMany({
                where: { idAset },
                select: {
                    tempatLama: true,
                    tempatBaru: true,
                    tanggalPindah: true
                },
                take: 3,
                orderBy: {
                    tanggalPindah: 'desc'
                }
            });

            return res.status(200).json({
                success: true,
                message: 'Data detail Aset berhasil diambil',
                data: aset,
                historyPindahan
            });
        } catch(error) {
            console.error('Error saat mengambil detail aset: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil detail aset: ' + error.message
            });
        }
    }
}

module.exports = AsetController;