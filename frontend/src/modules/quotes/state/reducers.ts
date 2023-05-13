import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { Quote } from '../types';
// import { LoginRequestStatus, LogoutRequestStatus } from '../constants';

export interface QuoteState {
  selectedQuote: Quote | null;
  quotes: Quote[] | null;
}

// Define the initial state using that type
const initialState: QuoteState = {
  selectedQuote: null,
  quotes: null,
}

export const quoteSlice = createSlice({
  name: 'quote',
  initialState,
  reducers: {
    setSelectedQuote: (state, action: PayloadAction<Quote>) => {
      state.selectedQuote = action.payload;
    }
  }
})

export default quoteSlice.reducer;

