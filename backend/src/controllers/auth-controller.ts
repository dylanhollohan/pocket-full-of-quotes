import { Request, Response } from 'express';
import { User } from '../models';
// import { } from './auth-types';

const signUserUp = async (req: Request, res: Response) => {
  const { email, password, username } = req.body;
  console.log('in handler');
  try {
    const newUser = await User.create({ email, password, username })
    res.status(201).json(newUser);
  } catch (e: any) {
    console.log(e);
    res.status(400).send('error, user not created');
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