const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const { verifyToken, isAdmin } = require('../middleware/auth');
const AsetController = require('../controller/asetController');

// Upload foto maksimal 5
router.post('/add', verifyToken, isAdmin, upload.array('foto', 5), AsetController.addAsset);

// Get Dropdown Add Asset
router.get('/get', verifyToken, isAdmin, AsetController.getViewAddAsset);

// Update Aset
router.put('/:asetId', verifyToken, isAdmin, upload.array('foto', 5), AsetController.updateAsset);

// Delete Aset
router.delete('/:asetId', verifyToken, isAdmin, AsetController.deleteAsset);

// Get All Aset
router.get('/', verifyToken, isAdmin, AsetController.getAllAsset);

// Get Detail Aset
router.get('/:asetId', verifyToken, isAdmin, AsetController.getDetailAsset);



module.exports = router;