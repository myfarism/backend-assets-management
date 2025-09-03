const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin, isSuperAdmin } = require('../middleware/auth');
const DashboardController = require('../controller/dashboardController');

// Get Data Dashboard
router.get('/', verifyToken, (isSuperAdmin || isAdmin), DashboardController.dashboard);

module.exports = router;