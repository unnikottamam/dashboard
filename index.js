const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

// Define app
const app = express();

// CORS
app.use(cors());

// Body parser
app.use(bodyParser.json());

// DB config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Routes
const products = require("./routes/api/products");
app.use("/api/products", products);

// Create server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on the port : ${PORT}`));
