const express = require('express');
const router = express.Router();
const RequestController = require('../controller/requestController');
const { verifyToken, isSuperAdmin, isAdmin, isUser } = require('../middleware/auth');


// Create Request

router.post('/', verifyToken, (isSuperAdmin || isAdmin || isUser), RequestController.addRequest);
router.get('/', verifyToken, (isSuperAdmin || isAdmin), RequestController.getAllRequests);
router.get('/:idUser', verifyToken, (isSuperAdmin || isAdmin || isUser), RequestController.getRequestsUser);
router.get('/detail/:id', verifyToken, (isSuperAdmin || isAdmin || isUser), RequestController.getRequestById);


module.exports = router;
