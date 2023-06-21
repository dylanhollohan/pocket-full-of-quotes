import express from 'express';
import { quotesController as controller }  from '../controllers';
import { requireAuth } from '../middleware';

export const quotesRouter = express.Router();

quotesRouter.get('/', requireAuth, controller.getQuotes);
quotesRouter.post('/shuffle', requireAuth, controller.getRandomQuotes);
quotesRouter.get('/:id', requireAuth, controller.getQuote);
quotesRouter.post('/', requireAuth, controller.addQuote);
quotesRouter.delete('/:id', requireAuth, controller.deleteQuote);
quotesRouter.patch('/:id', requireAuth, controller.updateQuote);