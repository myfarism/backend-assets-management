const express = require('express');
const router = express.Router();
const PerpindahanController = require('../controller/perpindahanController');
const { verifyToken, isSuperAdmin, isAdmin } = require('../middleware/auth');

// Pindah aset 
router.post('/pindah', verifyToken, (isSuperAdmin || isAdmin), PerpindahanController.pindahAsset);

// Get data perpindahan 
router.get('/', verifyToken, (isSuperAdmin || isAdmin), PerpindahanController.getDataPindah);

module.exports = router;