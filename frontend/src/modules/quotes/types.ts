export type AddQuoteSuccessPayload = AddQuoteRequestPayload & {
  author: string;
  id: string;
  timestamp: any;
}

export type AddQuoteRequestPayload = {
  author?: string,
  content: string,
  source?: string
}

export type getQuotesSuccessPayload = {
  quotes: AddQuoteSuccessPayload[];
}