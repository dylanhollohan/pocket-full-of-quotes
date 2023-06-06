import { NextFunction, Request, Response } from 'express';
import jwt, { JsonWebTokenError } from 'jsonwebtoken';

export default function (req: Request, res: Response, next: NextFunction) {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET!, (err: any, decodedToken: any) => {
      if (err) {
        console.log(err);
        throw JsonWebTokenError;
      } else {
        console.log(decodedToken);
        next(); // do what ever lives in the route handler for this route
      }
    })
  } else {
    throw JsonWebTokenError;
  }

}