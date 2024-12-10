const mongoose = require("mongoose")
const express = require("express")
const mongodb = require("mongodb")
const Product = require("./models/product.model.js")
const productRoutes = require("./routes/product.route.js")
const port = 3000

const app = express()

// myddlewares globaux
app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended: false}))
app.use("api/products", productRoutes)

mongoose.connect("mongodb+srv://henrynomo68:qgmS2sHUo3WhMhxd@cluster0.bygf6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(function(){
        console.log("Connection à la base de données reussie")
    })
    .catch(function(){
        console.log("Connection à la base de données échouée")
    })

   
app.listen(port, function(){
    console.log(`serveur en écoute sur le port ${port}`)
})    
