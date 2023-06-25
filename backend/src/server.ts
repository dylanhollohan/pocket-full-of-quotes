import app from './app';
import mongoose from 'mongoose';
import { config } from 'dotenv';

config();
const port = process.env.PORT;

mongoose.connect(process.env.DB_URI || 'oops')
    .then(() => { 
        app.listen(port, () => {
            console.log(`connected to db, listening on ${port}`);
        });
    }) 
    .catch((e) => console.log(e));
