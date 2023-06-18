import axios, { AxiosResponse } from 'axios';
import { AddQuoteRequestPayload, AddQuoteSuccessPayload } from '../types';
import { addQuoteFail, addQuoteSuccess } from './actions';

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
      console.log('add quote response: ', response);
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