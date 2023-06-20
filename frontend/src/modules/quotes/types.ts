export type AddQuoteSuccessPayload = AddQuoteRequestPayload & {
  author: string;
  id: string;
  timestamp: any;
}

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