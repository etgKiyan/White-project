const products = require("../models/products.model");


exports.create = async (req, res) => {
  // Validate request
  if (!req.body.product_name || !req.body.product_price) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }
  // Create a Product
  const product = {
    name: req.body.product_name,
    price: req.body.product_price
  };
  // Save Product in the database
  const result = await products.create(product);
  //error
  if (!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occurred while creating the Product."
    });
  }
  res.status(200).send(result.data);
};

exports.searchByName = async (req, res) => {
  const name = req.params.name;
  // search Product by name
  const result = await products.searchByName(name);
  //error
  if (!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occurred searchByName Products"
    });
  }
  res.status(200).send(result.data);
};

exports.findOne = async (req, res) => {
  const id = req.params.id;
  // search Product by name
  const result = await products.findOne(id);
  //error
  if(!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occurred searchByName Products"
    });
  }
  res.status(200).send(result.data);
};

exports.getAll = async (req, res) => {
  const result = await products.getAll();
  console.log(result);
  //error
  if (!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occurred getAll Products"
    });
  }
  res.status(200).send(result.data);
};


// Delete a Product with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;
  // search Product by name
  const result = await products.delete(id);
  //error
  if(!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occurred delete Products"
    });
  }
  res.status(200).send(result.data);
};

exports.update = async (req, res) => {
  const id = req.params.id;
  const result = await products.update(id,req.body.product_name,req.body.product_price);
  if(!result.ok) {
    res.status(500).send({
      message: result.data || "Some error occured updating Products"
    })
  }
  res.status(200).send(result.data);
}

