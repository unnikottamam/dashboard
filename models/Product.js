const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  make: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
    min: 4,
    max: 4,
  },
  price: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = Product = mongoose.model("product", productSchema);
