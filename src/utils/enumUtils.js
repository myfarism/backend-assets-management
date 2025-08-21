// src/utils/asetMapper.js

/**
 * Mapping Status Aset dari input user (string / label) ke enum Prisma
 */
const mapStatusAset = (val) => {
    if (!val) return null;
    const mapping = {
        "Aktif": "aktif",
        "Non Aktif": "nonaktif",
        "Maintenance": "maintenance",
    };
    return mapping[val] || val.toLowerCase();
};

/**
 * Mapping Kondisi Aset dari input user (string / label) ke enum Prisma
 */
const mapKondisiAset = (val) => {
    if (!val) return null;
    const mapping = {
        "Baik": "baik",
        "Normal": "normal",
        "Buruk": "buruk",
    };
    return mapping[val] || val.toLowerCase();
};

/**
 * Mapping Hak Kepemilikan dari input user (string / label) ke enum Prisma
 */
const mapHakMilik = (val) => {
    if (!val) return null;
    const mapping = {
        "Pribadi": "pribadi",
        "Kantor": "kantor",
    };
    return mapping[val] || val.toLowerCase();
};

module.exports = {
    mapStatusAset,
    mapKondisiAset,
    mapHakMilik,
};
