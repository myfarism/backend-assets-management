// src/routes/auth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');
const { verifyToken, allowRoles  } = require('../middleware/auth');


// Register new user
router.post('/register', verifyToken, allowRoles('1'), AuthController.register);

// Login user
router.post('/login', AuthController.login);

// Logout user
router.post('/logout', verifyToken, allowRoles('1'), AuthController.logout);

// Update User
router.put('/users/:id', verifyToken, allowRoles('1'), AuthController.updateUser);

// Delete User
router.delete('/users/:id', verifyToken, allowRoles('1'), AuthController.deleteUser);

// Get ALl Users
router.get('/users', verifyToken, allowRoles('1'), AuthController.getAllUsers);

// Get Detail User
router.get('/users/:id', verifyToken, allowRoles('1'), AuthController.getUserDetail);

module.exports = router;