const express = require('express');
const router = express.Router();
const LokasiController = require('../controller/lokasiController');
const { verifyToken, isAdmin } = require('../middleware/auth');
const { validateAddLokasi, validateUpdateLokasi } = require('../middleware/validationLokasi');

// Get all lokasi + total aset
router.get('/', verifyToken, isAdmin, LokasiController.getAllLokasi);

// Add new lokasi
router.post('/', verifyToken, isAdmin, validateAddLokasi, LokasiController.addLokasi);

// Update lokasi
router.put('/:idLokasi', verifyToken, isAdmin, validateUpdateLokasi, LokasiController.updateLokasi);

// Delete lokasi
router.delete('/:idLokasi', verifyToken, isAdmin, LokasiController.deleteLokasi);

router.get('/:idLokasi', verifyToken, isAdmin, LokasiController.getDetailLokasi);

module.exports = router;
