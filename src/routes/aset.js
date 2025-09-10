const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { verifyToken, allowRoles } = require('../middleware/auth');
const AsetController = require('../controller/asetController');

// Upload foto maksimal 5
router.post('/add', verifyToken, allowRoles('1', '2'), upload.array('foto', 5), AsetController.addAsset);

// Get Dropdown Add Asset
router.get('/get', verifyToken, allowRoles('1', '2'), AsetController.getViewAddAsset);

// Update Aset
router.put('/:asetId', verifyToken, allowRoles('1', '2'), upload.array('foto', 5), AsetController.updateAsset);

// Delete Aset
router.delete('/:asetId', verifyToken, allowRoles('1', '2'), AsetController.deleteAsset);

// Get All Aset
router.get('/', verifyToken, allowRoles('1', '2'), AsetController.getAllAsset);

// Get Detail Aset
router.get('/:asetId', verifyToken, allowRoles('1', '2'), AsetController.getDetailAsset);



module.exports = router;