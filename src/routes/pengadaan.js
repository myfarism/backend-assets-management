const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin, isSuperAdmin } = require('../middleware/auth');
const PengadaanController = require('../controller/pengadaanController');

// Tambah pengadaan
router.post('/', verifyToken, (isSuperAdmin || isAdmin), PengadaanController.addPengadaan);

// Get data pengadaan 
router.get('/', verifyToken, (isSuperAdmin || isAdmin), PengadaanController.getDataPengadaan);

// Get detail pengadaan
router.get('/:pengadaanId', verifyToken, (isSuperAdmin || isAdmin), PengadaanController.getDetailPengadaan);

// Hapus data pengadaan
router.delete('/:pengadaanId', verifyToken, (isSuperAdmin || isAdmin), PengadaanController.deletePengadaan);

// Update data pengadaan
router.put('/:pengadaanId', verifyToken, (isSuperAdmin || isAdmin), PengadaanController.updatePengadaan);

module.exports = router;
