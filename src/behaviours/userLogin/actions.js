import { USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from './constants';

export const requestUserLogin = (username, password) => ({
	type: USER_SIGNIN_REQUEST,
	payload: { username, password }
});