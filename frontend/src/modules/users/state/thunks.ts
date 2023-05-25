import axios from 'axios';
import { SignupPayload } from '../types';
import { signupSuccess, signupFail } from './actions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api',
});

// fetchTodoById is the "thunk action creator"
export function signupRequest(payload: SignupPayload) {
  // fetchTodoByIdThunk is the "thunk function"
  return async function signupRequestThunk(dispatch, getState) {
    try {
      const response  = await axiosInstance({
        method: 'post',
        url: '/auth/signup',
        data: payload
      });
      console.log(response);
      dispatch(signupSuccess());
    } catch (error) {
      dispatch(signupFail({ message: "theres an error"}))
    }
  }
}