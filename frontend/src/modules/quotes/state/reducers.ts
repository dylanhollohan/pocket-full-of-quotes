import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { AddQuoteSuccessPayload, GetQuotesRequestPayload, GetQuotesSuccessPayload } from '../types';
import { RequestStatus } from '../../constants';

export interface QuoteState {
  selectedQuote: AddQuoteSuccessPayload | null;
  addQuoteRequestStatus: RequestStatus;
  getQuotesRequestStatus: RequestStatus;
  addedQuote: AddQuoteSuccessPayload | null;
  quotes: AddQuoteSuccessPayload[];
}

const initialState: QuoteState = {
  selectedQuote: null,
  addedQuote: null,
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
      state.addedQuote = action.payload;
    },
    addQuoteFail: state => {
      state.addQuoteRequestStatus = RequestStatus.FAILURE;
    },
    getQuotesRequest: (state, action: PayloadAction<GetQuotesRequestPayload>)  => {
      state.getQuotesRequestStatus = RequestStatus.PENDING;
    },
    getQuotesSuccess: (state, action: PayloadAction<GetQuotesSuccessPayload>) => {
      state.getQuotesRequestStatus = RequestStatus.SUCCESS;
      state.quotes = action.payload.quotes;
    },
    getQuotesFail: state => {
      state.getQuotesRequestStatus = RequestStatus.FAILURE;
    }
  }
})

export default quoteSlice.reducer;

