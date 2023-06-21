import axios, { AxiosResponse } from 'axios';
import { AddQuoteRequestPayload, AddQuoteSuccessPayload, GetQuotesRequestPayload, GetQuotesSuccessPayload } from '../types';
import { addQuoteFail, addQuoteSuccess, getQuotesSuccess, getQuotesFail } from './actions';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000/api/quotes'
});


export function addQuoteRequest(payload: AddQuoteRequestPayload) {
  return async function addQuoteRequestThunk(dispatch) {
    try {
      const response: AxiosResponse<AddQuoteSuccessPayload>  = await axiosInstance({
        method: 'post',
        url: '/',
        withCredentials: true,
        data: payload
      });
      // @ts-ignore
      if (response.data) {
        // @ts-ignore
        dispatch(addQuoteSuccess(response.data));
      } else {
        // @ts-ignore
        dispatch(addQuoteFail(response.errors))
        // use reducers to set error messages in global, and then clear them when a new signup request is made, or otherwise navigation is used.
      }
    } catch (error) {
      // @ts-ignore
      dispatch(addQuoteFail({ message: "theres an error"}))
    }
  }
}

export function getQuotesRequest(payload: GetQuotesRequestPayload) {
  return async function getQuotesRequestThunk(dispatch) {
    try {
      const response: AxiosResponse<GetQuotesSuccessPayload>  = await axiosInstance({
        method: 'post',
        url: '/shuffle',
        withCredentials: true,
        data: payload
      });
      console.log('get quotes response: ', response);
      // @ts-ignore
      if (response.data) {
        // @ts-ignore
        dispatch(getQuotesSuccess(response.data));
      } else {
        // @ts-ignore
        dispatch(getQuotesFail(response.errors))
        // use reducers to set error messages in global, and then clear them when a new signup request is made, or otherwise navigation is used.
      }
    } catch (error) {
      // @ts-ignore
      dispatch(getQuotesFail({ message: "theres an error getting quotes"}))
    }
  }
}