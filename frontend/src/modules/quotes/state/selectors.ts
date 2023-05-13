import { RootState } from '../../../state/store';

export const selectSelectedQuote = (state: RootState) => state.quotes.selectedQuote;
