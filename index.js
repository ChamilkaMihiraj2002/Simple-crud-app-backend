const express = require('express')
const mongoose = require('mongoose');
const Product = require('./model/product.model.js')
const productRoutes = require('./routes/product.routes.js');
const app = express()

// middleware configuration
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/products', productRoutes);

// test route
app.get('/', (req, res) => {
    res.send('Hello World');
});

mongoose.connect("mongodb+srv://Admin:13yCOr089ADKKHcx@backenddb.4jxd7.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
.catch(() => {
    console.log("Connection failed");
});