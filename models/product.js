// Подключаем mongoose — библиотеку для работы с MongoDB в Node.js
const mongoose = require("mongoose");
// Определяем схему продукта, которая указывает, какие поля и типы данных будут у продукта
const productSchema = new mongoose.Schema({
    name: String, // Поле "name" типа String для названия продукта
    price: Number, // Поле "price" типа Number для цены продукта
    description: String, // Поле "description" типа String для описания продукта
});

// Экспортируем модель, чтобы её можно было использовать в других файлах
module.exports = mongoose.model("Product", productSchema);
