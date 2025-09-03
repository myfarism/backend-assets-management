const express = require('express');
const router = express.Router();
const LokasiController = require('../controller/lokasiController');
const { verifyToken, isSuperAdmin } = require('../middleware/auth');
const { validateAddLokasi, validateUpdateLokasi } = require('../middleware/validationLokasi');

// Get all lokasi + total aset
router.get('/', verifyToken, isSuperAdmin, LokasiController.getAllLokasi);

// Add new lokasi
router.post('/', verifyToken, isSuperAdmin, validateAddLokasi, LokasiController.addLokasi);

// Update lokasi
router.put('/:idLokasi', verifyToken, isSuperAdmin, validateUpdateLokasi, LokasiController.updateLokasi);

// Delete lokasi
router.delete('/:idLokasi', verifyToken, isSuperAdmin, LokasiController.deleteLokasi);

router.get('/:idLokasi', verifyToken, isSuperAdmin, LokasiController.getDetailLokasi);

module.exports = router;
