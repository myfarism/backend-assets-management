const express = require('express');
const router = express.Router();
const { verifyToken, allowRoles } = require('../middleware/auth');
const SubKategoriController = require('../controller/subkategoriController');

// Add Sub Kategori
router.post('/', verifyToken, allowRoles('1'), SubKategoriController.addSubKategori);

// Get Sub Kategori
router.get('/', verifyToken, allowRoles('1'), SubKategoriController.getSubKategori);

// Delete Sub Kategori
router.delete('/:subAsetId', verifyToken, allowRoles('1'), SubKategoriController.deleteSubKategori);

// Update Sub Kategori
router.post('/:subAsetId', verifyToken, allowRoles('1'), SubKategoriController.updateSubKategori);

module.exports = router;