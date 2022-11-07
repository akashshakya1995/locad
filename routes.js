const productRoutes = require("express").Router()
const { createProduct, getProduct, updateProduct, deleteProduct } = require("./handler")

productRoutes.post("/create", createProduct)
productRoutes.patch("/update/:productId", updateProduct)
productRoutes.get("/getProduct", getProduct)
productRoutes.delete("/delete/:productId", deleteProduct)


module.exports = productRoutes 