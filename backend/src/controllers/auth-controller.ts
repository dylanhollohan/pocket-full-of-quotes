import { Request, Response } from 'express';
import { User } from '../models';
import { MongooseError } from 'mongoose';
import { MongoServerError } from 'mongodb';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

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
  return jwt.sign({ id }, process.env.JWT_SECRET!, {
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
  const { email, password } = req.body;
  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ userId: user._id }); 
  } catch (e: any) {
    res.status(400).json({ error: e });
  }
}

const logUserOut = async (req: Request, res: Response) => {
  console.log('logout in backend')
  res.cookie('jwt', '', { maxAge: 1 });
  res.status(200).json({message: "logged out"});
}

export const authController = {
  signUserUp,
  logUserIn,
  logUserOut
};