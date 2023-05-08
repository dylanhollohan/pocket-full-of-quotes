import express from 'express';
import { quotesController as controller }  from '../controllers';

export const quotesRouter = express.Router();

quotesRouter.get('/', controller.getQuotes);
quotesRouter.get('/shuffle', controller.getRandomQuotes);
quotesRouter.get('/:id', controller.getQuote);
quotesRouter.post('/', controller.addQuote);
quotesRouter.delete('/:id', controller.deleteQuote);
quotesRouter.patch('/:id', controller.updateQuote);