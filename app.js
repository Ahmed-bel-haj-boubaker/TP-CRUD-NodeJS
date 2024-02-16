var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose')
var usersRouter = require('./routes/users');

var app = express();
var databaseConfig = require('./config/dataBaseConfig.json');;

mongoose.connect(databaseConfig.connect, {
  serverSelectionTimeoutMS: 5000 
})
  .then(() => {
    console.log('Connected to the database');
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', usersRouter);


const server = app.listen(8000, () => {
  console.log(`Server is listening on port 8000 `);
});
module.exports = app;
