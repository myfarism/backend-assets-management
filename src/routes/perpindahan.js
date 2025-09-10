const express = require('express');
const router = express.Router();
const PerpindahanController = require('../controller/perpindahanController');
const { verifyToken, allowRoles } = require('../middleware/auth');

// Pindah aset 
router.post('/pindah', verifyToken, allowRoles('1', '2'), PerpindahanController.pindahAsset);

// Get data perpindahan 
router.get('/', verifyToken, allowRoles('1', '2'), PerpindahanController.getDataPindah);

module.exports = router;