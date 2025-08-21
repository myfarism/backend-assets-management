const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const prisma = require('../config/database');
const { generateJWT, generateUserId } = require('../config/token');


class AuthController {
    static async login(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array()
            });
        }

        const { email, password } = req.body;
        try {
            let user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User tidak ditemukan'
                });
            }
            const valid = await bcrypt.compare(password, user.password);
            if (!valid) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials'
                });
            }

            // Update Last Login
            await prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    lastLogin: new Date().toISOString(),
                    status: 'aktif',
                },
            });

            const token = generateJWT(user);
            
            res.status(200).json({
                success: true,
                data: {
                    email: user.email,
                    name: user.name,
                    role: user.role,
                    status: user.status,
                    token
                },
                message: 'Login Berhasil'
            })
        } catch (error) {
            console.error('Login error: ', error);
            res.status(500).json({
                success: false,
                message: 'Login gagal: ' + error.message
            });
        }
    }

    static async register(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { email, password, name, roleId } = req.body;
        try {
            const userExists = await prisma.user.findUnique({ where: { email } });

            if (userExists) {
                return res.status(409).json({
                    success: false,
                    message: 'Email sudah digunakan!'
                });
            }

            const hashedPassword = await bcrypt.hash(password, 10);
            const userId = generateUserId();
            //console.log('Generated userId:', userId);

            const user = await prisma.user.create({
                data: {
                    name,
                    email: email,
                    password: hashedPassword,
                    roleId: roleId,
                    id: userId
                }
            });

            res.status(200).json({
                success: true,
                message: 'Registrasi berhasil!',
                data: user
            });
        } catch(error) {
            console.error('Registrasi error: ', error);
            res.status(500).json({
                success: false,
                message: 'Registrasi gagal: ' + error.message
            });
        }
    }

    static async updateUser(req, res) {
        const errors = validationResult(req);
        console.log(errors);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        const { id } = req.params; // atau bisa gunakan req.body.id
        const { name, email, role, password } = req.body;
        console.log('Req body: ', req.body);

        try {
            const existingUser = await prisma.user.findUnique({ where: { id } });

            if (!existingUser) {
                return res.status(404).json({
                    success: false,
                    message: 'Akun tidak ditemukan!'
                });
            }

            let newPassword;

            if (password) {
                newPassword = await bcrypt.hash(password, 10);
            }

            const updatedUser = await prisma.user.update({
                where: { id },
                data: {
                    name: name || existingUser.name,
                    email: email || existingUser.email,
                    role: role || existingUser.role,
                    password: newPassword || existingUser.password
                }
            });

            return res.status(200).json({
                success: true,
                message: 'User berhasil diupdate',
                data: updatedUser
            });

        } catch (error) {
            console.error('Update user error:', error);
            res.status(500).json({
                success: false,
                message: 'Update gagal: ' + error.message
            });
        }
    }

    static async deleteUser(req, res) {
        const { id } = req.params;

        try {
            const user = await prisma.user.findUnique({ where: { id } });

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'Akun tidak tidemukan!'
                });
            }

            await prisma.user.delete({ where: { id } });

            return res.status(200).json({
                success: true,
                message: 'User berhasil dihapus'
            });

        } catch (error) {
            console.error('Delete user error:', error);
            res.status(500).json({
                success: false,
                message: 'Hapus user gagal: ' + error.message
            });
        }
    }

    static async getAllUsers(req, res) {
        try {
            // Ambil data user dengan pagination
            const users = await prisma.user.findMany({
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: {
                        select: {
                            userRoleId: true,
                            nameRole: true
                        }
                    },
                    lastLogin: true,
                    status: true,
                    createdAt: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            // Hitung total user untuk pagination info
            const totalUsersCount = await prisma.user.count();

            // Hitung role
            const roleCounts = await prisma.user.groupBy({
                by: ['roleId'],
                _count: { roleId: true }
            });
            
            const roles = await prisma.userRole.findMany({
                where: { userRoleId: { in: roleCounts.map(r => r.roleId) } },
                select: { userRoleId: true, nameRole: true }
            });
            
            const roleSummary = roleCounts.map(rc => {
                const roleName = roles.find(r => r.userRoleId === rc.roleId)?.nameRole || "Unknown";
                return { roleId: rc.roleId, roleName, count: rc._count.roleId };
            });

            const aktifCounts = await prisma.user.groupBy({
                by: ['status'],
                _count: { status: true }
            });

            const summary = {
                totalUsers: totalUsersCount,
                totalSuperAdmin: roleCounts.find(r => r.roleId === '1')?._count.roleId || 0,
                totalAdmin: roleCounts.find(r => r.roleId === '2')?._count.roleId || 0,
                totalMaintenance: roleCounts.find(r => r.roleId === '3')?._count.roleId || 0,
                totalUserBiasa: roleCounts.find(r => r.roleId === '4')?._count.roleId || 0,
                totalAktifUser: aktifCounts.find(r => r.status === 'aktif')?._count.status || 0
            };

            return res.status(200).json({
                success: true,
                message: 'Daftar user berhasil diambil',
                data: users,
                summary,
                roleSummary
            });

        } catch (error) {
            console.error('Error saat mengambil daftar user:', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil daftar user: ' + error.message
            });
        }
    }

    static async getUserDetail(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            });
        }

        try {
            const { id } = req.params;

            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    email: true,
                    name: true,
                    role: true,
                    password: true
                }
            });

            if (!user) {
                return res.status(404).json({
                    success: false,
                    message: 'User tidak ditemukan'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Data user berhasil diambil',
                data: user
            });
        } catch(error) {
            console.error('Error saat mengambil detail user: ', error);
            return res.status(500).json({
                success: false,
                message: 'Gagal mengambil detail user: ' + error.message
            });
        }
    }

    static async logout(req, res) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                error: errors.array()
            });
        }

        const { email } = req.body;
        try {
            let user = await prisma.user.findUnique({
                where: { email }
            });

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User tidak ditemukan'
                });
            }
            await prisma.user.update({
                where: {
                    email: email,
                },
                data: {
                    status: 'nonaktif',
                },
            });

            res.status(200).json({ 
            success: true, 
            message: 'Logged Out Berhasil'
            });
        } catch (error) {
            console.error('Logout error: ', error);
            res.status(500).json({
                success: false,
                message: 'Logout gagal: ' + error.message
            });
        }
    }
}

module.exports = AuthController;