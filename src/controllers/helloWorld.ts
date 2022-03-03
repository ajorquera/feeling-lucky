import { MY_MESSAGE } from './../env';
import { RequestHandler } from "express";

const helloWorld: RequestHandler = (_req, res) => {
  res.json({
    message: MY_MESSAGE
  });
};

export default helloWorld;