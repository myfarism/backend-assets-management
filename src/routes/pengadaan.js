const express = require('express');
const router = express.Router();
const { verifyToken, allowRoles } = require('../middleware/auth');
const PengadaanController = require('../controller/pengadaanController');

// Tambah pengadaan
router.post('/', verifyToken, allowRoles('1', '2'), PengadaanController.addPengadaan);

// Get data pengadaan 
router.get('/', verifyToken, allowRoles('1', '2'), PengadaanController.getDataPengadaan);

// Get detail pengadaan
router.get('/:pengadaanId', verifyToken, allowRoles('1', '2'), PengadaanController.getDetailPengadaan);

// Hapus data pengadaan
router.delete('/:pengadaanId', verifyToken, allowRoles('1', '2'), PengadaanController.deletePengadaan);

// Update data pengadaan
router.put('/:pengadaanId', verifyToken, allowRoles('1', '2'), PengadaanController.updatePengadaan);

module.exports = router;
