import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SignupError, SignupSuccessPayload, LoginSuccessPayload } from '../types';
import { LoginRequestStatus, LogoutRequestStatus, SignupRequestStatus } from '../constants';

export interface UserState {
  loggedInUser: String | null;
  loginRequestStatus: LoginRequestStatus;
  logoutRequestStatus: LogoutRequestStatus;
  signupRequestStatus: SignupRequestStatus;
  signupError?: SignupError;
}

// Define the initial state using that type
const initialState: UserState = {
  loggedInUser: null,
  loginRequestStatus: LoginRequestStatus.IDLE,
  logoutRequestStatus: LogoutRequestStatus.IDLE,
  signupRequestStatus: SignupRequestStatus.IDLE,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupRequest: state => {
      state.signupRequestStatus = SignupRequestStatus.PENDING;
    },
    signupSuccess: (state, action: PayloadAction<SignupSuccessPayload>) => {
      state.signupRequestStatus = SignupRequestStatus.SUCCESS;
      state.loggedInUser = action.payload.userId
    },
    signupFail: (state, action: PayloadAction<SignupError>) => {
      state.signupRequestStatus = SignupRequestStatus.FAILURE;
      state.signupError = action.payload;
    },
    resetSignup: state => {
      state.signupRequestStatus = SignupRequestStatus.IDLE;
      state.signupError = undefined;
    },
    // need to reset signupRequestStatus after the user is redirected to login page, or some other trigger.
    loginRequest: state => {
      state.loginRequestStatus = LoginRequestStatus.PENDING;
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.loginRequestStatus = LoginRequestStatus.IDLE
      state.loggedInUser = action.payload.userId;
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

