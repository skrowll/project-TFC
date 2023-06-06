import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import APIError from '../helpers/error.helper';
import 'dotenv/config';

const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw new APIError(401, 'Token not found');
  }
  try {
    jwt.verify(authorization, process.env.JWT_SECRET as string);
  } catch (error) {
    console.log(error);
    throw new APIError(401, 'Token must be a valid token');
  }
  next();
};

export default validateToken;
