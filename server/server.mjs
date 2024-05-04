import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000; // Установка порта, либо использование порта по умолчанию 5000
// Добавляем middleware для обработки JSON
app.use(cors());
app.use(express.json());

// Роут для проверки работоспособности сервера
app.get('/', (_, res) => {
    res.send('Сервер работает!');
})

app.get('/map-data', (_, res) => {
    const data = {
        googleMapsApiKey: process.env.GOOGLE_MAP_RENT_CAR
    };
    console.log(data)
    res.json(data);
});
// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});