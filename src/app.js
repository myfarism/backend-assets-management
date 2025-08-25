// src/app.js
const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');


// Import routes
const authRoutes = require('./routes/auth');
const lokasiRoutes = require('./routes/lokasi');
const asetRoutes = require('./routes/aset');
const perpindahanRoutes = require('./routes/perpindahan');
const pengadaanRoutes = require('./routes/pengadaan');
const dashboardRoutes = require('./routes/dashboard');
const notifRoutes = require('./routes/notif');
const maintenanceRoutes = require('./routes/maintenance');
const subKategoriRoutes = require('./routes/subAset');

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(process.cwd(), "public", "uploads")));


// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/lokasi', lokasiRoutes);
app.use('/api/aset', asetRoutes);
app.use('/api/perpindahan', perpindahanRoutes);
app.use('/api/pengadaan', pengadaanRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/notif', notifRoutes);
app.use('/api/maintenance', maintenanceRoutes);
app.use('/api/subkategori', subKategoriRoutes);




// Legacy routes for backward compatibility
//app.use('/', authRoutes);

// 404 handler
// app.all('*', (req, res) => {
//   res.status(404).json({ 
//     success: false, 
//     message: 'Endpoint not found' 
//   });
// });


module.exports = app;