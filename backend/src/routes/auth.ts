import express from 'express';
import { authController as controller }  from '../controllers';

export const authRouter = express.Router();

authRouter.post('/signup', controller.signUserUp);
authRouter.post('/login', controller.logUserIn);
authRouter.get('/logout', controller.logUserOut);