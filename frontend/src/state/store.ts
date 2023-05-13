import { createSlice, configureStore } from '@reduxjs/toolkit'

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    loggedIn: false
  },
  reducers: {
    loggedIn: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loggedIn = true;
    },
    loggedOut: state => {
      state.loggedIn = false;
    }
  }
})

export const { loggedIn, loggedOut } = loginSlice.actions

const store = configureStore({
  reducer: loginSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(loggedIn())
store.dispatch(loggedOut())
