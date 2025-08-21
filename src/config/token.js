const jwt = require('jsonwebtoken');


function generateJWT(user) {
    return jwt.sign({
        id: user.id,
        email: user.email,
        name: user.name,
        role: user.role
    }, process.env.JWT_SECRET, { expiresIn: '24h'});
}

function generateUserId(length = 4) {
  let result = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  const userId = `USER-${result}`;
  return userId;
}

function generateLokasiId(length = 3) {
  let result = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  const lokasiId = `LOC-${result}`;
  return lokasiId;
}

function generatePindahId(length = 8) {
  let result = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  const pindahId = `PINDAH-${result}`;
  return pindahId;
}

function generateAsetId(kategori) {
  // Mendapatkan tanggal saat ini dalam format YYYYMMDD
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero
  const day = String(today.getDate()).padStart(2, '0'); // Menambahkan leading zero

  const formattedDate = `${year}${month}${day}`; // Format YYYYMMDD

  // Menambahkan kategori
  let sanitizedKategori;
  
  if (kategori === 'asetFisik') {
    sanitizedKategori = 'FSK';
  } else if (kategori === 'asetDigital') {
    sanitizedKategori = 'DIGI'
  }

  // Menghasilkan angka acak 3 digit
  const randomNumber = Math.floor(Math.random() * 900) + 100; // Angka acak antara 100 dan 999

  // Menggabungkan tanggal, kategori, dan angka acak untuk membuat Aset ID
  const asetId = `${formattedDate}-${sanitizedKategori}-${randomNumber}`;
  
  return asetId;
}

function generatePengadaanId(length = 4) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero
  const day = String(today.getDate()).padStart(2, '0'); // Menambahkan leading zero

  const formattedDate = `${year}${month}${day}`; // Format YYYYMMDD

  let result = '';
  const digits = '0123456789';
  for (let i = 0; i < length; i++) {
    result += digits.charAt(Math.floor(Math.random() * digits.length));
  }

  const pengadaanId = `ORD${formattedDate}-${result}`;

  return pengadaanId;
}

function generateMaintenanceId(kategori) {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Menambahkan leading zero
  const day = String(today.getDate()).padStart(2, '0'); // Menambahkan leading zero

  const formattedDate = `${year}${month}${day}`; // Format YYYYMMDD

  const maintenanceId = `MAINTENANCE-${kategori}-${formattedDate}`;

  return maintenanceId;
}

module.exports = {
    generateJWT,
    generateUserId,
    generateAsetId,
    generatePengadaanId,
    generateMaintenanceId,
    generateLokasiId,
    generatePindahId
};