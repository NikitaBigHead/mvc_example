const express = require("express");
const app = express();

const mongoose = require("mongoose");

//подключение к 'mongodb
mongoose
    .connect("mongodb://localhost:27017/my-mvc-app", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Подключение к MongoDB успешно"))
    .catch((err) => console.error("Ошибка подключения к MongoDB:", err));

// Подключаем маршруты для продуктов
const productRoutes = require("./routes/productRoutes");

// Используем маршруты для обработки запросов, начинающихся с /product
app.use("/", productRoutes);

// Запуск сервера на порту 3000
app.listen(3000, () => {
    console.log("Сервер запущен на порту 3000");
});
