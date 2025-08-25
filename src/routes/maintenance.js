const express = require('express');
const router = express.Router();
const { verifyToken, isAdmin } = require('../middleware/auth');
const MaintenanceController = require('../controller/maintenanceController');

// Add Maintenance
router.post('/:asetId', verifyToken, isAdmin, MaintenanceController.addMaintenance);

// Get data maintenance
router.get('/', verifyToken, isAdmin, MaintenanceController.getDataMaintenance);

// Get Detail
router.get('/:maintenanceId', verifyToken, isAdmin, MaintenanceController.detailMaintenance);

router.post('/finish/:maintenanceId', verifyToken, isAdmin, MaintenanceController.finishMaintenance);


module.exports = router;