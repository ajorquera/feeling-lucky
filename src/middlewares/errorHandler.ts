import { ErrorRequestHandler } from "express";

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {

  console.error(JSON.stringify(error));

  res.status(500).end();
};

export default errorHandler;