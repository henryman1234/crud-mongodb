const Product = require("../models/product.model.js")

async function getProducts(req, res) {
    try {
        const products = await Product.find({})
        res.status(200).json(products)
    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

async function getProduct(req, res) {
    try {
        const {id} = req.params
        const product = await Product.findById(id)
        res.status(200).json(product)

    } catch (error) {
        res.status(200).json({message: error.message})
    }
}

// create product
async function createProduct(req, res) {
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


async function updatedProduct(req, res) {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)

        if (!product) {
            return res.status(404).json({message: "Le produit n'existe pas!" })
        }

        const updatedProduct = await Product.findById(id)

        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

async function deleteProduct(req, res) {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)

        if (!product) {
            return res.status(404).json({message: "Le produit n'a pas été trouvé"})
        }

        res.status(200).json({message: "le produit a éte bien supprimé de la base de donnée"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}


module.exports = {
    getProducts,
    createProduct,
    getProduct,
    updatedProduct,
    deleteProduct
}