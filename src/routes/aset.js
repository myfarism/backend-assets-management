const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { verifyToken, isSuperAdmin, isAdmin } = require('../middleware/auth');
const AsetController = require('../controller/asetController');

// Upload foto maksimal 5
router.post('/add', verifyToken, (isSuperAdmin || isAdmin), upload.array('foto', 5), AsetController.addAsset);

// Get Dropdown Add Asset
router.get('/get', verifyToken, (isSuperAdmin || isAdmin), AsetController.getViewAddAsset);

// Update Aset
router.put('/:asetId', verifyToken, (isSuperAdmin || isAdmin), upload.array('foto', 5), AsetController.updateAsset);

// Delete Aset
router.delete('/:asetId', verifyToken, (isSuperAdmin || isAdmin), AsetController.deleteAsset);

// Get All Aset
router.get('/', verifyToken, (isSuperAdmin || isAdmin), AsetController.getAllAsset);

// Get Detail Aset
router.get('/:asetId', verifyToken, (isSuperAdmin || isAdmin), AsetController.getDetailAsset);



module.exports = router;