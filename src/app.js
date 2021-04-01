const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');
const cors = require('cors');
const routes = require('./routes');

const app = express();

const corsOptions = {
  origin: '*',
};

app.disable('x-powered-by');
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', routes);

app.use('/api/v1', (req, res) => {
  res.status(200).json({
    success: true,
    message:
      'You are in the home route, refer to documentation for proper routing',
  });
});

// capture wildcat routes
app.use('*', (req, res) => {
  res.redirect('/api/v1');
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((error, req, res) => {
  res.status(500).json({
    success: false,
    message: error.message,
  });
});

module.exports = app;
