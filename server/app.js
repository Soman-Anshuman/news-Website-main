const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');

// This is how you require the extern custom module using js
// const User = require('./model/user');

// Dotenv
require("dotenv").config();
const port = process.env.PORT;

// Mongoose
require('./db/connect');
app.use(express.json());
console.log("db called successfully")

app.use(cookieParser());

// Express Router
app.use(require('./routes/auth'));

app.listen(port, () => {
    console.log(`Server is listening on => http://localhost:${port}`);
});