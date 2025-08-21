// middlewares/auth.js
const jwt = require('jsonwebtoken');
const prisma = require('../config/database');

const SECRET_KEY = process.env.JWT_SECRET; 

// Middleware untuk verifikasi token
const verifyToken = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ success: false, message: 'Token tidak ditemukan' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await prisma.user.findUnique({ where: { id: decoded.id } });

        if (!user) {
            return res.status(404).json({ success: false, message: 'User tidak ditemukan' });
        }

        req.user = user; 
        next();
    } catch (error) {
        console.error('Token verification failed:', error);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Harap Login lagi!',
                status: 'Failed',
            });
        }
        return res.status(401).json({ 
            success: false, 
            message: 'Token tidak valid' 
        });
    }
};

// Middleware untuk cek apakah user adalah admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.roleId === '1') {
        next(); // Lanjut ke controller
    } else {
        return res.status(403).json({ 
            success: false, 
            message: 'Akses ditolak. Hanya admin yang diperbolehkan.' 
        });
    }
};

module.exports = {
    verifyToken,
    isAdmin
};
