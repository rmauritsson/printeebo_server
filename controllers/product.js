const Product = require("../models/product");
const slugify = require("slugify");

exports.createProduct = async (req, res) => {
  try {
    console.log("Product Request", req.body);

    req.body.slug = slugify(req.body.title);

    const product = await new Product(req.body).save();
    res.json(product);
  } catch (err) {
    console.log("Error IN CREATING PRODUCT", err.message);
    //res.status(400).send("Failed to create product");
    res.status(400).json({
      err: err.message,
    });
  }
};

exports.readProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send("Failed to read product");
  }
};

exports.updateProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send("Failed to update product");
  }
};

exports.removeProduct = async (req, res) => {
  try {
  } catch (err) {
    res.status(400).send("Failed to remove product");
  }
};

exports.listProducts = async (req, res) => {
  try {
    let products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(400).send("Failed to list products");
  }
};
