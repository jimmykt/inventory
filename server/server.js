// dependencies
const express = require("express");
const cors = require("cors");

const app = express();

// config
require("dotenv").config();
const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`A ${req.method} request was made at ${req.path}`);
  next();
});

// routes

// Server
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
