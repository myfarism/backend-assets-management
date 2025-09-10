const express = require('express');
const router = express.Router();
const RequestController = require('../controller/requestController');
const { verifyToken, allowRoles } = require('../middleware/auth');


// Create Request

router.post('/', verifyToken, allowRoles('1', '2', '4'), RequestController.addRequest);
router.get('/', verifyToken, allowRoles('1', '2', '4'), RequestController.getAllRequests);
router.get('/user/:idUser', verifyToken, allowRoles('4'), RequestController.getRequestsUser);
router.get('/detail/:id', verifyToken, allowRoles('1', '2', '4'), RequestController.getRequestById);



module.exports = router;
