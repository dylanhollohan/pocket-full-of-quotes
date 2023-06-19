import axios, { AxiosResponse } from 'axios';
import { SignupRequestPayload, LoginRequestPayload, SignupSuccessPayload, LoginSuccessPayload } from '../types';
import { signupSuccess, signupFail, loginFail, logoutFail, loginSuccess, logoutSuccess } from './actions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/auth'
});

// signupRequest is the "thunk action creator"
export function signupRequest(payload: SignupRequestPayload) {
  // signupRequestThunk is the "thunk function"
  return async function signupRequestThunk(dispatch) {
    try {
      const response: AxiosResponse<SignupSuccessPayload>  = await axiosInstance({
        method: 'post',
        url: '/signup',
        withCredentials: true,
        data: payload
      });
      console.log('signup response: ', response);
      // @ts-ignore
      if (response.data.userId) {
        // @ts-ignore
        dispatch(signupSuccess({ userId: response.data.userId}));
      } else {
        // @ts-ignore
        dispatch(signupFail(response.errors))
      }
    } catch (error) {
      dispatch(signupFail({ message: "theres an error"}))
    }
  }
}

export function loginRequest(payload: LoginRequestPayload) {
  return async function loginRequestThunk(dispatch, getState) {
    try {
      const response: AxiosResponse<LoginSuccessPayload> = await axiosInstance({
        method: 'post',
        url: '/login',
        withCredentials: true,
        data: payload
      });
      console.log('login response: ', response);
      // @ts-ignore
      if (response.data.userId) {
        // @ts-ignore
        dispatch(loginSuccess({ userId: response.data.userId}));
      } else {
        // @ts-ignore
        dispatch(loginFail(response.errors))
        // use reducers to set error messages in global, and then clear them when a new signup request is made, or otherwise navigation is used.
      }
    } catch (error) {
      dispatch(loginFail({ message: "theres an error"}))
    }
  }
}

export function logoutRequest() {
  return async function logoutRequestThunk(dispatch) {
    try {
      const response: AxiosResponse = await axiosInstance({
        method: 'get',
        url: '/logout',
        withCredentials: true,
      });
      console.log('logout response: ', response)
      // @ts-ignore
      if (response.status === 200) {
        // @ts-ignore
        dispatch(logoutSuccess());
      } else {
        // @ts-ignore
        dispatch(logoutFail())
      }
    } catch (error) {
      dispatch(logoutFail())
    }
  }
}