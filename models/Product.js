const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var productSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = Product = mongoose.model("product", productSchema);
