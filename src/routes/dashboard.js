const express = require('express');
const router = express.Router();
const { verifyToken, allowRoles } = require('../middleware/auth');
const DashboardController = require('../controller/dashboardController');

// Get Data Dashboard
router.get('/', verifyToken, allowRoles('1', '2'), DashboardController.dashboard);

module.exports = router;