import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

const distPath = path.join(__dirname, 'dist');

// Эндпоинт проверки работоспособности
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Раздача статических файлов из директории dist
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));
} else {
  console.error(' ОШИБКА: Директория dist не найдена. Убедитесь, что выполнена сборка npm run build');
}

// Для всех остальных запросов возвращаем index.html (SPA routing)
app.get('*all', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(500).send('Ошибка сервера: сборка не найдена. Пожалуйста, запустите npm run build.');
  }
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});

