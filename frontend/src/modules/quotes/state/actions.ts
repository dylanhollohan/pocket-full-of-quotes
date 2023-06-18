import { quoteSlice } from './reducers';

export const { 
  setSelectedQuote,
  addQuoteRequest,
  addQuoteSuccess,
  addQuoteFail,
  getQuotesRequest,
  getQuotesSuccess,
  getQuotesFail
 } = quoteSlice.actions