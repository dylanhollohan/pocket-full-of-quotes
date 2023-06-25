import express, { Express, Request, Response } from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { quotesRouter, authRouter } from './routes'

const app: Express = express();
const corsOptions = {
    origin: ['http://localhost:8080'],
    credentials: true,
    exposedHeaders: ["Authorization"]
}

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/quotes', quotesRouter);
app.use('/api/auth', authRouter);

export default app;