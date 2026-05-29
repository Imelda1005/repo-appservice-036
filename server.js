const express = require('express');
const app = express();
// Middleware untuk mencatat log setiap request yang masuk
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const port = process.env.PORT || 3000;
app.get('/', (req, res) => {
 res.send('<h1>Praktikum Azure App Service</h1><p>Aplikasi berjalan.</p>');
});
app.get('/status', (req, res) => {
 res.json({ status: 'running', service: 'Azure App Service', timestamp: new Date() });
});
app.get('/profil', (req, res) => {
 res.json({ mataKuliah: 'Komputasi Awan', topik: 'Serverless Azure' });
});
app.listen(port, () => console.log(`Server berjalan pada port ${port}`));
