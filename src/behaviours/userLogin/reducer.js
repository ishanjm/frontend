import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT_REQUEST, USER_REGISTER_SUCCESS } from './constants';
import { isExpired } from "react-jwt";


const userInfo = localStorage.getItem('userInfo');

const isExpiredToken = loginInfo => {
	debugger;
	return isExpired(JSON.parse(loginInfo).token);

};

const initialState = {
	userInfo: userInfo && !isExpiredToken(userInfo) ? JSON.parse(userInfo) : null,
	validationMessage: null,
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_SUCCESS: return {
			...state,
			validationMessage: null,
			userInfo: payload
		};
		case USER_SIGNIN_FAIL: return {
			...state,
			validationMessage: payload
		};
		case USER_SIGNOUT_REQUEST: return {
			...state,
			userInfo: null
		};
		case USER_REGISTER_SUCCESS: return {
			...state,
			userInfo: payload.data
		};
		default: return state;
	}
};

export default userReducer;