// src/utils/asetUtils.js
const prisma = require('../config/database');

// Ambil semua pilihan enum dari PostgreSQL
async function getEnumValues(enumName) {
    const values = await prisma.$queryRawUnsafe(`
        SELECT unnest(enum_range(NULL::"${enumName}"))::text AS value
    `);
    return values.map(v => v.value);
}

// Ambil semua lokasi dari DB
async function getLokasiList() {
    return await prisma.lokasi.findMany({
        select: {
            idLokasi: true,
            lokasi: true,
            kategoriAset: true,
            subKategoriAset: true
        },
        orderBy: { lokasi: 'asc' }
    });
}

module.exports = {
    getEnumValues,
    getLokasiList
};
