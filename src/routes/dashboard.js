const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/auth');
const DashboardController = require('../controller/dashboardController');

// Get Data Dashboard
router.get('/', verifyToken, isAdmin, DashboardController.dashboard);

module.exports = router;