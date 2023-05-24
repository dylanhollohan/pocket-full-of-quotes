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
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(loggedIn())
// store.dispatch(loggedOut())
