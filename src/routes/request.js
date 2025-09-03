const express = require('express');
const router = express.Router();
const RequestController = require('../controller/requestController');
const { verifyToken, isAdmin } = require('../middleware/auth');


// Create Request

router.post('/', verifyToken, isAdmin, RequestController.addRequest);
router.get('/', verifyToken, isAdmin, RequestController.getAllRequests);
router.get('/:idUser', verifyToken, RequestController.getRequestsUser);

module.exports = router;
