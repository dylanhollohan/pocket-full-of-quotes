import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { SignupError, LoginError, SignupSuccessPayload, LoginSuccessPayload } from '../types';
import { RequestStatus } from '../constants';

export interface UserState {
  loggedInUser: String | null;
  loginRequestStatus: RequestStatus;
  logoutRequestStatus: RequestStatus;
  signupRequestStatus: RequestStatus;
  signupError?: SignupError;
  loginError?: LoginError;
}

const initialState: UserState = {
  loggedInUser: null,
  loginRequestStatus: RequestStatus.IDLE,
  logoutRequestStatus: RequestStatus.IDLE,
  signupRequestStatus: RequestStatus.IDLE,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupRequest: state => {
      state.signupRequestStatus = RequestStatus.PENDING;
    },
    signupSuccess: (state, action: PayloadAction<SignupSuccessPayload>) => {
      state.signupRequestStatus = RequestStatus.SUCCESS;
      state.loggedInUser = action.payload.userId
    },
    signupFail: (state, action: PayloadAction<SignupError>) => {
      state.signupRequestStatus = RequestStatus.FAILURE;
      state.signupError = action.payload;
    },
    resetSignup: state => {
      state.signupRequestStatus = RequestStatus.IDLE;
      state.signupError = undefined;
    },
    // need to reset signupRequestStatus after the user is redirected to login page, or some other trigger.
    loginRequest: state => {
      state.loginRequestStatus = RequestStatus.PENDING;
    },
    loginSuccess: (state, action: PayloadAction<LoginSuccessPayload>) => {
      state.loginRequestStatus = RequestStatus.IDLE
      state.loggedInUser = action.payload.userId;
    },
    loginFail: (state, action: PayloadAction<LoginError>) => {
      state.loginRequestStatus = RequestStatus.FAILURE;
      state.loginError = action.payload;
    },
    logoutRequest: state => {
      state.logoutRequestStatus = RequestStatus.PENDING;
    },
    logoutSuccess: state => {
      state.logoutRequestStatus = RequestStatus.SUCCESS;
      state.loggedInUser = null;
    },
    logoutFail: state => {
      state.logoutRequestStatus = RequestStatus.FAILURE;
    },
    resetLogout: state => {
      state.logoutRequestStatus = RequestStatus.IDLE;
    }
  }
})

export default userSlice.reducer;

