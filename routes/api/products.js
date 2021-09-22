const express = require("express");
const Product = require("../../models/Product");
const validateProductInput = require("../../validation/product");

const router = express.Router();

/**
 * @route   GET api/products
 * @desc    All products route
 * @access  Public
 */
router.get("/", (req, res) => {
  Product.find()
    .sort({ date: -1 })
    .then((products) => res.json(products))
    .catch((err) => res.status(404).json({ notFound: "No products found" }));
});

/**
 * @route   GET api/products/:id
 * @desc    All products route
 * @access  Public
 */
router.get("/:id", (req, res) => {
  Product.findById({ _id: req.params.id })
    .then((product) => {
      if (product) res.json(product);
      else res.status(404).json({ notFound: "No product found with this id" });
    })
    .catch((err) =>
      res.status(404).json({ notFound: "No product found with this id" })
    );
});

/**
 * @route   POST api/products
 * @desc    Create Product* [Will change to Private access later on]
 * @access  Public
 */
router.post("/", (req, res) => {
  const { errors, isValid } = validateProductInput(req.body);
  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  // Add new product
  const newProduct = {
    title: req.body.title,
    make: req.body.make,
  };
  new Product(newProduct).save().then((product) => res.json(product));
});

module.exports = router;
