import { Request, Response } from 'express';
import { User } from '../models';
import { MongooseError } from 'mongoose';
import { MongoServerError } from 'mongodb';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
// import { } from './auth-types';

const handleErrors = (err: any) => {
  let errors = { email: '', password: '' }

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes('user validation failed')) {
    // @ts-ignore
    Object.values(err.errors).forEach(({ properties }) => {
      const path: string = properties.path;
      // @ts-ignore
      errors[properties.path] = properties.message;
    })
  }
  return errors;
}

const maxAge = 3 * 24 * 60 * 60;

const createToken = (id: any) => {
  return jwt.sign({ id }, process.env.JWT_SECRET || 'backupJwtSecret2484758275', {
    expiresIn: maxAge
  } )
}

const signUserUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await User.create({ email, password, username });
    const token = createToken(newUser._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ userId: newUser._id });
  } catch (e: any) {
    const errors = handleErrors(e);
    res.status(400).json({ errors });
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