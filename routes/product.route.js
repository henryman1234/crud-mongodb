const express = require("express")
const mongoose = require("mongoose")
const router = express.Router()
const Product = require('../models/product.model.js')
const {getProducts, getProduct, createProduct, deleteProduct, updatedProduct} = require('../controllers/product.controller.js')

router.get("/", getProducts)

router.get("/:id", getProduct)

router.post("/", createProduct)

router.put("/:id", updatedProduct)

router.delete("/:id", deleteProduct)








module.exports = router