var express = require('express');
var router = express.Router();
// const {verifyToken}  = require("../utils/verifyToken");
const {ListProduct,CreateProduct,FindProductById,UpdateProduct,DeleteProduct} = require("../controllers/ProductController");

router.get("/list-product",ListProduct);
router.post("/create-product",CreateProduct);
router.get("/find-product",FindProductById);
router.post("/update-product",UpdateProduct);
router.post("/delete-product",DeleteProduct);







module.exports = router;