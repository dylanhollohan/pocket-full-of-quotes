import { Request, Response } from 'express';
import { User } from '../models';
import { MongooseError } from 'mongoose';
import { MongoServerError } from 'mongodb';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
// import { } from './auth-types';

// const handleErrors = (err: MongooseError | MongoServerError) => {
//   console.log(err.message, err.code);
//   console.log("typeof error: ", typeof err);
//   let errors = { email: '', password: '' }

//   if (err.code === 11000) {
//     errors.email = 'that email is already registered';
//     return errors;
//   }

//   if (err.message.includes('user validation failed')) {
//     Object.values(err.errors).forEach(({ properties }) => {
//       const path: string = properties.path;
//       errors[properties.path] = properties.message;
//     })
//   }
//   return errors;
// }

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'backupJwtSecret2484758275', {
    expiresIn: maxAge
  } )
}

const signUserUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await User.create({ email, password, username });
    console.log(typeof newUser._id);
    const token = createToken(newUser._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: newUser._id });
  } catch (e: any) {
    // const errors = handleErrors(e);
    res.status(400).send(e);
  }
}

const logUserIn = async (req: Request, res: Response) => {
  try {
      
  } catch (e: any) {
      res.json({ error: e });
  }
}

const logUserOut = async (req: Request, res: Response) => {
  try {
      console.log('ello mate');
  } catch (e: any) {
      res.json({ error: e });
  }
}

export const authController = {
  signUserUp,
  logUserIn,
  logUserOut
};