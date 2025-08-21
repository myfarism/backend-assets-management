const { body, param } = require('express-validator');
const { AsetKategori } = require('../generated/prisma'); // Import enum dari Prisma

const kategoriEnum = Object.values(AsetKategori); // ["laptop", "furniture", "kamera"]

// Validasi tambah lokasi
const validateAddLokasi = [
    body('lokasi')
        .isString().withMessage('Lokasi harus berupa teks')
        .notEmpty().withMessage('Lokasi wajib diisi'),
    body('kategori')
        .isArray({ min: 1 }).withMessage('Kategori harus berupa array minimal 1 item')
        .notEmpty().withMessage('Kategori tidak boleh kosong')
        .custom((value) => {
            const invalid = value.filter(v => !kategoriEnum.includes(v));
            if (invalid.length > 0) {
                throw new Error(`Kategori tidak valid: ${invalid.join(', ')}`);
            }
            return true;
        })
];

// Validasi update lokasi
const validateUpdateLokasi = [
    param('idLokasi')
        .isInt().withMessage('ID Lokasi harus berupa angka'),
    body('lokasi')
        .optional()
        .isString().withMessage('Lokasi harus berupa teks'),
    body('kategori')
        .optional()
        .isArray().withMessage('Kategori harus berupa array')
        .custom((value) => {
            if (value && value.length === 0) {
                throw new Error('Kategori tidak boleh kosong');
            }
            const invalid = value.filter(v => !kategoriEnum.includes(v));
            if (invalid.length > 0) {
                throw new Error(`Kategori tidak valid: ${invalid.join(', ')}`);
            }
            return true;
        })
];

module.exports = {
    validateAddLokasi,
    validateUpdateLokasi
};
