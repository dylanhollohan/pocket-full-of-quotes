import { Request, Response } from 'express';
import { User } from '../models';
import { MongooseError } from 'mongoose';
import { MongoServerError } from 'mongodb';
// import { } from './auth-types';

const handleErrors = (err: MongooseError | MongoServerError) => {
  console.log(err.message, err.code);
  console.log("typeof error: ", typeof err);
  let errors = { email: '', password: '' }

  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      const path: string = properties.path;
      errors[properties.path] = properties.message;
    })
  }
  return errors;
}

const signUserUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  try {
    const newUser = await User.create({ email, password, username })
    res.status(201).json(newUser);
  } catch (e: any) {
    const errors = handleErrors(e);
    res.status(400).send(errors);
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