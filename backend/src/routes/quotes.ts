import express from 'express';
import { quotesController as controller }  from '../controllers';

export const router = express.Router();

router.get('/', controller.getQuotes);
router.get('/shuffle', controller.getRandomQuotes);
router.get('/:id', controller.getQuote);
router.post('/', controller.addQuote);
router.delete('/:id', controller.deleteQuote);
router.patch('/:id', controller.updateQuote);