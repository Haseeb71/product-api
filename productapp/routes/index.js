const express = require("express");
const router = express.Router();
const productController = require("../controller/productController");

router.get("/api/product/Categories",productController.index);
router.get("/api/product/:id",productController.product);
router.get("/api/product/show/:id",productController.show);

module.exports = router;