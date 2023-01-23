import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import { quotesRouter } from './routes'
config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/quotes', quotesRouter);

mongoose.connect(process.env.DB_URI || 'oops')
    .then(() => { 
        app.listen(port, () => {
            console.log(`connected to db, listening on ${port}`);
        });
    }) 
    .catch((e) => console.log(e));
