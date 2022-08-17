const express = require("express");

const router = express.Router();

const productControllers = require("../controllers/product-controllers");

router.get("/products", productControllers.getAllProducts);

router.get("/products/:name", productControllers.getProduct);

module.exports = router;
