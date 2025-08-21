const express = require('express');
const router = express.Router();
const PerpindahanController = require('../controller/perpindahanController');
const { verifyToken, isAdmin } = require('../middleware/auth');

// Pindah aset 
router.post('/pindah', verifyToken, isAdmin, PerpindahanController.pindahAsset);

// Get data perpindahan 
router.get('/', verifyToken, isAdmin, PerpindahanController.getDataPindah);

module.exports = router;