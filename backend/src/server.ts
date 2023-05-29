import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { quotesRouter, authRouter } from './routes'
config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:8080'}))
app.use('/api/quotes', quotesRouter);
app.use('/api/auth', authRouter);

mongoose.connect(process.env.DB_URI || 'oops')
    .then(() => { 
        app.listen(port, () => {
            console.log(`connected to db, listening on ${port}`);
        });
    }) 
    .catch((e) => console.log(e));
