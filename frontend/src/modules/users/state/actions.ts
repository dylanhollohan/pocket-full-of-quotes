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
  logoutFail,
  resetLogout,
} = userSlice.actions