// server.js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Servir los archivos estáticos generados por Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Todas las rutas deben devolver el index.html para React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`✅ Frontend corriendo en http://localhost:${PORT}`);
});
