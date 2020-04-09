module.exports = app => {
    const products = require("../controllers/Products.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Product
    
    router.post("/add", products.create);
  
    // Retrieve all Products
    router.get("/", products.getAll);
  
    // Retrieve all Products
    router.get("/name/:name", products.searchByName);
  
    // Retrieve a single Product with id
    router.get("/id/:id", products.findOne);
  
    router.put("/id/:id",products.update);

    // Delete a Product with id
    router.delete("/delete/:id", products.delete);

    
    app.use('/products', router);
  };