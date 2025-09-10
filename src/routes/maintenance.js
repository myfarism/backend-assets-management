const express = require('express');
const router = express.Router();
const { verifyToken, allowRoles } = require('../middleware/auth');
const MaintenanceController = require('../controller/maintenanceController');

// Add Maintenance
router.post('/:asetId', verifyToken, allowRoles('1', '2', '3'), MaintenanceController.addMaintenance);

// Get data maintenance
router.get('/', verifyToken, allowRoles('1', '2', '3'), MaintenanceController.getDataMaintenance);

// Get Detail
router.get('/:maintenanceId', verifyToken, allowRoles('1', '2', '3'), MaintenanceController.detailMaintenance);

router.post('/finish/:maintenanceId', verifyToken, allowRoles('1', '2', '3'), MaintenanceController.finishMaintenance);


module.exports = router;