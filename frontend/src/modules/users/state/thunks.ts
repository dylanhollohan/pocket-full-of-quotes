import axios from 'axios';
import { SignupPayload } from '../types';
import { signupSuccess, signupFail } from './actions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api'
});

// signupRequest is the "thunk action creator"
export function signupRequest(payload: SignupPayload) {
  // signupRequestThunk is the "thunk function"
  return async function signupRequestThunk(dispatch, getState) {
    try {
      // Note that Axios automatically serializes payload as JSON (stringify)
      const response  = await axiosInstance({
        method: 'post',
        url: '/auth/signup',
        withCredentials: true,
        data: payload
      });
      console.log(response);
      dispatch(signupSuccess());
    } catch (error) {
      dispatch(signupFail({ message: "theres an error"}))
    }
  }
}