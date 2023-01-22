import express, { Express, Request, Response } from 'express';
import { config } from 'dotenv';
config();

const app: Express = express();

const port = process.env.PORT;

app.get('/', (req: Request, res: Response) => {
    res.send('Welcomess')
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
});
