const express = require('express');
const router = express.Router();
const NotifController = require('../controller/notifController');
const { isSuperAdmin, isAdmin, verifyToken } = require('../middleware/auth');

// Get Data Notifikasi
router.get('/', verifyToken, (isSuperAdmin || isAdmin), NotifController.getNotif);

module.exports = router;