import { userSlice } from './reducers';

export const {
  signupRequest,
  signupSuccess,
  signupFail,
  resetSignup,
  loginRequest,
  loginSuccess,
  loginFail,
  logoutRequest,
  logoutSuccess,
  resetLogout,
} = userSlice.actions