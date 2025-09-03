// src/routes/auth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');
const { verifyToken, isSuperAdmin,  } = require('../middleware/auth');


// Register new user
router.post('/register', verifyToken, isSuperAdmin, AuthController.register);

// Login user
router.post('/login', AuthController.login);

// Logout user
router.post('/logout', verifyToken, isSuperAdmin, AuthController.logout);

// Update User
router.put('/users/:id', verifyToken, isSuperAdmin, AuthController.updateUser);

// Delete User
router.delete('/users/:id', verifyToken, isSuperAdmin, AuthController.deleteUser);

// Get ALl Users
router.get('/users', verifyToken, isSuperAdmin, AuthController.getAllUsers);

// Get Detail User
router.get('/users/:id', verifyToken, isSuperAdmin, AuthController.getUserDetail);

module.exports = router;