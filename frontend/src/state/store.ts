import { configureStore } from '@reduxjs/toolkit';
import { default as usersReducer } from '../modules/users/state/reducers';
import { default as quotesReducer } from '../modules/quotes/state/reducers';


export const store = configureStore({
  reducer: {
    users: usersReducer,
    quotes: quotesReducer
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
