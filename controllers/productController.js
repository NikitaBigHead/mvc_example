// Импортируем модель Product для работы с данными продукта
const Product = require("../models/product");

// Экспортируем функцию, которая будет обрабатывать запрос на получение продукта по ID
exports.getProduct = async (req, res) => {
    try {
        // Ищем продукт в базе данных по ID, полученному из запроса
        const product = await Product.findById(req.params.id);

        // Если продукт найден, рендерим View и передаем продукт для отображения
        res.render("product", { product: product });
    } catch (error) {
        // Если произошла ошибка, возвращаем код 500 и сообщение об ошибке
        res.status(500).send("Error retrieving product data");
    }
};
