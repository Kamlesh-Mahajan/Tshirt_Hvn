const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //* Wrong Mongodb ID error
  if (err.name === "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // Mongoose duplicate key error 
  if(err.code === 1000){
    const message= 'Duplicate ${Object.keys(err.keyValue)}   entered';
    err = new ErrorHandler(message ,400);
  }

  // wrong JWT error
  if (err.name === "JsonWebTokanError"){
    const message ='Json tokan is invalid. try agian';
    err = new ErrorHandler(message, 400);
  }
// JWT expire error
  if (err.name === "TokanExpiredError"){
    const message ='Json tokan is Expired. try agian';
    err = new ErrorHandler(message, 400);
  }
  res.status(err.statusCode).json({
    success: false,
    // error: err.stack,
    message: err.message,
  });
};
