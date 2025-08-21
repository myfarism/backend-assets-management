const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/auth');
const PengadaanController = require('../controller/pengadaanController');

// Tambah pengadaan
router.post('/', verifyToken, isAdmin, PengadaanController.addPengadaan);

// Get data pengadaan 
router.get('/', verifyToken, isAdmin, PengadaanController.getDataPengadaan);

// Get detail pengadaan
router.get('/:pengadaanId', verifyToken, isAdmin, PengadaanController.getDetailPengadaan);

// Hapus data pengadaan
router.delete('/:pengadaanId', verifyToken, isAdmin, PengadaanController.deletePengadaan);

// Update data pengadaan
router.put('/:pengadaanId', verifyToken, isAdmin, PengadaanController.updatePengadaan);

module.exports = router;
