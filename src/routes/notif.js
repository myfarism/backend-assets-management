const express = require('express');
const router = express.Router();
const NotifController = require('../controller/notifController');
const { verifyToken, allowRoles } = require('../middleware/auth');

// Get Data Notifikasi
router.get('/', verifyToken, allowRoles('1', '2'), NotifController.getNotif);

module.exports = router;