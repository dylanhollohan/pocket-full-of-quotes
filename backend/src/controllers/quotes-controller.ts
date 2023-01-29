import { Request, Response } from 'express';
import { Quote } from '../models';
import { AddQuoteRequestPayload, GetQuotePayload } from './quote-types';
import mongoose from 'mongoose';

// TODO: better error handling
const getQuotes = async (req: Request, res: Response) => {
    try {
        const quotes = await Quote.find({});
        res.status(200).json(quotes);
    } catch (e: any) {
        res.json({ error: e });
    }
}

const getRandomQuotes = async (req: Request, res: Response) => {
    try {
        const quotes = await Quote.aggregate([
            {
              '$sample': {
                'size': 5
              }
            }
          ]);
        res.status(200).json(quotes);
    } catch (e: any) {
        res.json({ error: e });
    }
};

// TODO: better error handling
const getQuote = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "No such quote" });
    }
    try {
        const quote = await Quote.findById(id);
        res.status(200).json(quote);
    } catch (e: any) {
        res.status(400).json({ error: e });
    }
};

const addQuote = async (req: Request, res: Response): Promise<void> => {
    const { author, body, source }: AddQuoteRequestPayload = req.body;
    try { 
        const quote = await Quote.create({ 
        author,
        body,
        source
        });
        res.status(200).json(quote);
    } catch (e: any) {
        if (e.name === "ValidationError") {
            res.status(400).json({ msg: e.message });
        } else {
            res.status(500).json({ msg: e.message });
        }
    }
};

// TODO: better error handling
const deleteQuote = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "No such quote" });
    }
    try {
        const result = await Quote.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ error: "No such quote" });
        }
        res.status(200).json({ deletedId: result?._id });
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
};

const updateQuote = async (req: Request, res: Response): Promise<any> => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        res.status(404).json({ error: "No such quote" });
    }
    const { body } = req;
    if (JSON.stringify(body) === '{}') {
        res.status(400).json({ error: "Must include body" })
    }
    try {
        const updatedQuote = await Quote.findByIdAndUpdate(id, { ...body }, { new: true });
        if (!updatedQuote) {
            return res.status(404).json({ error: "No such quote" });
        }
        res.status(200).json(updatedQuote);
    } catch (e: any) {
        res.status(400).json({ error: e.message })
    }
};

export const quotesController = {
    getQuotes,
    getRandomQuotes,
    getQuote,
    addQuote,
    deleteQuote,
    updateQuote
};