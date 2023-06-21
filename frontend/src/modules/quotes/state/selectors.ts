import { RootState } from '../../../state/store';

export const selectSelectedQuote = (state: RootState) => state.quotes.selectedQuote;
export const selectAddQuoteRequestStatus = (state: RootState) => state.quotes.addQuoteRequestStatus;
// export const selectGetQuotesRequestStatus = (state: RootState) => state.quotes.getQuotesRequestStatus;
export const selectQuotes = (state: RootState) => state.quotes.quotes;
export const selectAddedQuote = (state: RootState) => state.quotes.addedQuote;
