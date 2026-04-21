import express from 'express';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Sirviendo los archivos estáticos generados por Vite
app.use(express.static(path.join(__dirname, 'dist')));

// Redirigir cualquier otra ruta al index.html para que el enrutamiento de React funcione
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Ready on port ${PORT}`);
});
