import express, { Request, Response } from 'express';

const getQuotes = (req: Request, res: Response) => {
    res.json({ msg: 'getting quotes placeholder...' })
}

const getQuote = (req: Request, res: Response) => {
    res.json({ msg: 'getting single quote placeholder...' })
}

const addQuote = (req: Request, res: Response) => {
    res.json({ msg: 'add a quote placeholder...' })
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