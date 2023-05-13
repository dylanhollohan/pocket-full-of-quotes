import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../types';
import { LoginRequestStatus, LogoutRequestStatus } from '../constants';

export interface UserState {
  loggedInUser: User | null;
  loginRequestStatus: LoginRequestStatus
  logoutRequestStatus: LogoutRequestStatus
}

// Define the initial state using that type
const initialState: UserState = {
  loggedInUser: null,
  loginRequestStatus: LoginRequestStatus.IDLE,
  logoutRequestStatus: LogoutRequestStatus.IDLE
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginRequest: state => {
      state.loginRequestStatus = LoginRequestStatus.PENDING;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loginRequestStatus = LoginRequestStatus.IDLE
      state.loggedInUser = action.payload;
    },
    logoutRequest: state => {
      state.logoutRequestStatus = LogoutRequestStatus.PENDING;
    },
    logoutSuccess: state => {
      state.loginRequestStatus = LoginRequestStatus.IDLE
      state.loggedInUser = null;
    }
  }
})

export default userSlice.reducer;
