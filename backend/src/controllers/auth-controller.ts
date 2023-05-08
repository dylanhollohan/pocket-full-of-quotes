import { Request, Response } from 'express';
import { User } from '../models';
// import { } from './auth-types';
import mongoose from 'mongoose';

const signUserUp = async (req: Request, res: Response) => {
  try {
      
  } catch (e: any) {
      res.json({ error: e });
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
      
  } catch (e: any) {
      res.json({ error: e });
  }
}

export const authController = {
  signUserUp,
  logUserIn,
  logUserOut
};