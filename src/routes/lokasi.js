const express = require('express');
const router = express.Router();
const LokasiController = require('../controller/lokasiController');
const { verifyToken, allowRoles } = require('../middleware/auth');
const { validateAddLokasi, validateUpdateLokasi } = require('../middleware/validationLokasi');

// Get all lokasi + total aset
router.get('/', verifyToken, allowRoles('1'), LokasiController.getAllLokasi);

// Add new lokasi
router.post('/', verifyToken, allowRoles('1'), validateAddLokasi, LokasiController.addLokasi);

// Update lokasi
router.put('/:idLokasi', verifyToken, allowRoles('1'), validateUpdateLokasi, LokasiController.updateLokasi);

// Delete lokasi
router.delete('/:idLokasi', verifyToken, allowRoles('1'), LokasiController.deleteLokasi);

router.get('/:idLokasi', verifyToken, allowRoles('1'), LokasiController.getDetailLokasi);

module.exports = router;
