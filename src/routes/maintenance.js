const express = require('express');
const router = express.Router();
const { verifyToken, isSuperAdmin, isAdmin, isMaintenance } = require('../middleware/auth');
const MaintenanceController = require('../controller/maintenanceController');

// Add Maintenance
router.post('/:asetId', verifyToken, (isSuperAdmin || isAdmin || isMaintenance), MaintenanceController.addMaintenance);

// Get data maintenance
router.get('/', verifyToken, (isSuperAdmin || isAdmin || isMaintenance), MaintenanceController.getDataMaintenance);

// Get Detail
router.get('/:maintenanceId', verifyToken, (isSuperAdmin || isAdmin || isMaintenance), MaintenanceController.detailMaintenance);

router.post('/finish/:maintenanceId', verifyToken, (isSuperAdmin || isAdmin || isMaintenance), MaintenanceController.finishMaintenance);


module.exports = router;