const express = require("express");
const router = express.Router();

// Импортируем контроллер, который будет обрабатывать запросы
const productController = require("../controllers/productController");

// Определяем маршрут для получения информации о продукте по ID
// При запросе на /product/:id вызывается функция getProduct из productController
router.get("/product/:id", productController.getProduct);

module.exports = router;
