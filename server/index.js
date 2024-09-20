"use strict";

require("dotenv").config();

const express = require("express");
const app = express();

// asyncErrors to errorHandler:
require("express-async-errors");

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

// Accept JSON:
app.use(express.json());

// Cors
const cors = require("cors");
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8000"], // İzin verilen origin URL'leri buraya ekleyin
    credentials: true, // Credentials (cookielere izin) için true yapın
  })
);

//home page
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to App Fellas Flight API",
  });
});
//routes
app.use(require("./src/router/index"));

//errorHandler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500; 
  return res.status(statusCode).send({
    error: true,
    message: err.message || 'Internal Server Error', 
    cause: err.cause || null, 
    body: req.body || {}, 
  });
});


app.listen(8000, () => console.log(`http://127.0.0.1:8000`));
