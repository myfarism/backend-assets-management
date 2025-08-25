const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/auth');
const SubKategoriController = require('../controller/subkategoriController');
const { subAsetKategori } = require('../config/database');

// Add Sub Kategori
router.post('/', verifyToken, isAdmin, SubKategoriController.addSubKategori);

// Get Sub Kategori
router.get('/', verifyToken, isAdmin, SubKategoriController.getSubKategori);

// Delete Sub Kategori
router.delete('/:subAsetId', verifyToken, isAdmin, SubKategoriController.deleteSubKategori);

// Update Sub Kategori
router.post('/:subAsetId', verifyToken, isAdmin, SubKategoriController.updateSubKategori);

module.exports = router;