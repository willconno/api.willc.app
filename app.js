var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var helmet = require('helmet')
var auth = require("./middleware/auth");
const { afterInit } = require('./db/db');

var app = express();

app.use(helmet())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(auth);

app.use('/', require('./routes/index'));
app.use("/posts", require("./routes/posts"));

module.exports = app;
