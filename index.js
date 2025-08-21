// server.js
require('dotenv').config();
const app = require('./src/app');

const PORT = process.env.PORT;

// Start server
app.listen(PORT, () => {
  console.log('🚀 =================================');
  console.log(`🌐 Server: http://localhost:${PORT}`);
  console.log(`❤️  Health: http://localhost:${PORT}/health`);
  console.log(`🔗 API Base: http://localhost:${PORT}/api`);
  console.log('=================================');
});