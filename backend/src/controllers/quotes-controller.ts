import { Request, Response } from 'express';
import { Quote } from '../models';

const getQuotes = (req: Request, res: Response) => {
    res.json({ msg: 'getting quotes placeholder...' })
}

const getQuote = (req: Request, res: Response) => {
    res.json({ msg: 'getting single quote placeholder...' })
}

const addQuote = async (req: Request, res: Response) => {
    const { author, body, source } = req.body;
    const quote = await Quote.create({ 
        author,
        body,
        source
    });
    res.json(quote);
}

const deleteQuote = (req: Request, res: Response) => {
    res.json({ msg: 'deleting single quote placeholder...' })
}

export const quotesController = {
    getQuotes,
    getQuote,
    addQuote,
    deleteQuote
}