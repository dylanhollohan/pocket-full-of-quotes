import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddQuoteSuccessPayload, getQuotesSuccessPayload } from '../types';
import { RequestStatus } from '../../constants';

export interface QuoteState {
  selectedQuote: AddQuoteSuccessPayload | null;
  addQuoteRequestStatus: RequestStatus;
  getQuotesRequestStatus: RequestStatus;
  quotes: AddQuoteSuccessPayload[];
}

// Define the initial state using that type
const initialState: QuoteState = {
  selectedQuote: null,
  addQuoteRequestStatus: RequestStatus.IDLE,
  getQuotesRequestStatus: RequestStatus.IDLE,
  quotes: [],
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setSelectedQuote: (state, action: PayloadAction<AddQuoteSuccessPayload>) => {
      state.selectedQuote = action.payload;
    },
    addQuoteRequest: state => {
      state.addQuoteRequestStatus = RequestStatus.PENDING;
    },
    addQuoteSuccess: (state, action: PayloadAction<AddQuoteSuccessPayload>) => {
      state.addQuoteRequestStatus = RequestStatus.SUCCESS;
    },
    addQuoteFail: state => {
      state.addQuoteRequestStatus = RequestStatus.FAILURE;
    },
    getQuotesRequest: state => {
      state.getQuotesRequestStatus = RequestStatus.PENDING;
    },
    getQuotesSuccess: (state, action: PayloadAction<getQuotesSuccessPayload>) => {
      state.getQuotesRequestStatus = RequestStatus.SUCCESS;
      state.quotes = action.payload.quotes;
    },
    getQuotesFail: state => {
      state.getQuotesRequestStatus = RequestStatus.FAILURE;
    }
  }
})

export default quoteSlice.reducer;

