const prisma = require('../config/database');
const { generateRequestId } = require('../config/token');

function convertBigInt(obj) {
    return JSON.parse(JSON.stringify(obj, (_, value) =>
        typeof value === 'bigint'
            ? Number(value) // atau value.toString()
            : value
    ));
}

class RequestController {
    static async addRequest(req, res) {
        try {
            const {
                namaAset,
                jumlah,
                kategoriAset,
                tipeKebutuhan,
                tanggalButuh,
                deskripsi,
                vendor,
                unit,
                langganan,
                durasi,
                idUser,
                requestBy 
            } = req.body;

            const reqId = generateRequestId();

            const data = await prisma.request.create({
                data: {
                    requestId: reqId,
                    namaAset,
                    jumlah: BigInt(jumlah),
                    kategoriAset,
                    tipeKebutuhan,
                    tanggalButuh: new Date(tanggalButuh),
                    deskripsi,
                    status: "pending",
                    vendor,
                    unit,
                    langganan,
                    durasi,
                    idUser,
                    requestBy,     
                    approvedBy: null 
                }
            });

            res.status(201).json(convertBigInt({
                success: true,
                message: 'Request berhasil ditambahkan',
                data
            }));
        } catch (error) {
            console.error('Add Request error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal menambahkan request: ' + error.message
            });
        }
    }

    static async getAllRequests(req, res) {
        try {
            const data = await prisma.request.findMany({
                include: {
                    user: {
                        select: {
                        id: true,
                        name: true,
                        email: true,
                        roleId: true
                        }
                    }
                },
                orderBy: { tanggalButuh: 'desc' }
            });

            console.log(data);

            res.status(200).json(convertBigInt({
                success: true,
                data
            }));
        } catch (error) {
            console.error('Get All Request error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal mengambil data request: ' + error.message
            });
        }
    }

    static async getRequestsUser(req, res) {
        try {
            const { idUser } = req.params;

            const data = await prisma.request.findMany({
                include: {
                    user: {
                        select: {
                        id: true,
                        name: true,
                        email: true,
                        roleId: true
                        }
                    }
                },
                orderBy: { tanggalButuh: 'desc' }
            });

            console.log(data);

            res.status(200).json(convertBigInt({
                success: true,
                data
            }));
        } catch (error) {
            console.error('Get All Request error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal mengambil data request: ' + error.message
            });
        }
    }

    // READ Single Request
    static async getRequestById(req, res) {
        try {
            const { id } = req.params;

            const data = await prisma.request.findUnique({
                where: { requestId: id },
                include: { user: true }
            });

            if (!data) {
                return res.status(404).json({
                    success: false,
                    message: 'Request tidak ditemukan'
                });
            }

            res.status(200).json({
                success: true,
                data
            });
        } catch (error) {
            console.error('Get Request By Id error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal mengambil data request: ' + error.message
            });
        }
    }

    // APPROVE Request (khusus update status & approveBy)
    static async approveRequest(req, res) {
        try {
            const { id } = req.params;
            const { approveBy } = req.body;

            const existing = await prisma.request.findUnique({
                where: { requestId: id }
            });

            if (!existing) {
                return res.status(404).json({
                    success: false,
                    message: 'Request tidak ditemukan'
                });
            }

            const data = await prisma.request.update({
                where: { requestId: id },
                data: {
                    status: "approved",
                    approveBy
                }
            });

            res.status(200).json({
                success: true,
                message: 'Request berhasil disetujui',
                data
            });
        } catch (error) {
            console.error('Approve Request error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal menyetujui request: ' + error.message
            });
        }
    }

    // DELETE Request
    static async deleteRequest(req, res) {
        try {
            const { id } = req.params;

            const existing = await prisma.request.findUnique({
                where: { requestId: id }
            });

            if (!existing) {
                return res.status(404).json({
                    success: false,
                    message: 'Request tidak ditemukan'
                });
            }

            await prisma.request.delete({
                where: { requestId: id }
            });

            res.status(200).json({
                success: true,
                message: 'Request berhasil dihapus'
            });
        } catch (error) {
            console.error('Delete Request error: ', error);
            res.status(500).json({
                success: false,
                message: 'Gagal menghapus request: ' + error.message
            });
        }
    }
}

module.exports = RequestController;
