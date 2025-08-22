const express = require('express');
const router = express.Router();
const NotifController = require('../controller/notifController');
const { isAdmin, verifyToken } = require('../middleware/auth');

// Get Data Notifikasi
router.get('/', verifyToken, isAdmin, NotifController.getNotif);

module.exports = router;