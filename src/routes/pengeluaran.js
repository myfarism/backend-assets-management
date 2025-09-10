const express = require('express');
const router = express.Router();
const { verifyToken, allowRoles } = require('../middleware/auth');
const PengeluaranController = require('../controller/pengeluaranController');

// add pengeluaran
router.post('/', verifyToken, allowRoles('1', '2'), PengeluaranController.addPengeluaran);

// Get data pengeluaran
router.get('/', verifyToken, allowRoles('1', '2'), PengeluaranController.getAllPengeluaran);

module.exports = router;