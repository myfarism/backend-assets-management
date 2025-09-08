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


const mapKategoriAset = (val) => {
    if (!val) return null;
    const mapping = {
        "Aset Fisik": "asetFisik",
        "Aset Digital": "asetDigital",
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
        "Guna Pakai": "gunaPakai",
        "Kantor": "kantor",
    };
    return mapping[val] || val.toLowerCase();
};


const mapStatusAsetView = (val) => {
    if (!val) return null;

    const cleanVal = val.trim().toLowerCase();

    const mapping = {
        "aktif": "Aktif",
        "nonaktif": "Non Aktif",
        "maintenance": "Maintenance",
    };

    return mapping[cleanVal] || val;
}; 

module.exports = {
    mapStatusAset,
    mapKondisiAset,
    mapHakMilik,
    mapKategoriAset,
    mapStatusAsetView
};
