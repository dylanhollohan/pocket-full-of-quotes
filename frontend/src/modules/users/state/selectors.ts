import { RootState } from '../../../state/store';

export const selectLoggedInUser = (state: RootState) => state.users.loggedInUser;

export const selectLoginRequestStatus = (state: RootState) => state.users.loginRequestStatus;
export const selectLogoutRequestStatus = (state: RootState) => state.users.logoutRequestStatus;