const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const http = require("http");
const PORT = process.env.PORT || 5000;

// Define app
const app = express();

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
app.use("/", products);

// Create server
app.set("port", PORT);
http.createServer(app).listen(parseInt(PORT, 10));
