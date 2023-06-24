export type AddQuoteSuccessPayload = AddQuoteRequestPayload & {
  _id: string;
  timestamp: any;
}

export type AppQuote = AddQuoteSuccessPayload;

export type AddQuoteRequestPayload = {
  author: string,
  content: string,
  source: string,
  userId: string
}

export type GetQuotesRequestPayload = {
  userId: string
}

export type GetQuotesSuccessPayload = {
  quotes: AddQuoteSuccessPayload[];
}