import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
import { quotesRouter } from './routes'
config();

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());
app.use('/api/quotes', quotesRouter);

app.listen(port, () => {
    console.log(`listening on ${port}`)
});
