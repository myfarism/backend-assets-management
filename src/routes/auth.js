// src/routes/auth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controller/authController');
const { verifyToken, isAdmin } = require('../middleware/auth');


// Register new user
router.post('/register', verifyToken, isAdmin, AuthController.register);

// Login user
router.post('/login', AuthController.login);

// Logout user
router.post('/logout', verifyToken, isAdmin, AuthController.logout);

// Update User
router.put('/users/:id', verifyToken, isAdmin, AuthController.updateUser);

// Delete User
router.delete('/users/:id', verifyToken, isAdmin, AuthController.deleteUser);

// Get ALl Users
router.get('/users', verifyToken, isAdmin, AuthController.getAllUsers);

// Get Detail User
router.get('/users/:id', verifyToken, isAdmin, AuthController.getUserDetail);

module.exports = router;