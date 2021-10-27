import {
	USER_SIGNIN_FAIL,
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNOUT,
	USER_REGISTER_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
} from './constants';

export const requestUserLogin = (email, password) => ({
	type: USER_SIGNIN_REQUEST,
	payload: { email, password }
});

export const requestUserSignUp = (username, password, email) => ({
	type: USER_REGISTER_REQUEST,
	payload: { username, password, email }
});