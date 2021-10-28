import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNOUT_REQUEST, USER_REGISTER_SUCCESS } from './constants';

const initialState = {
	information: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
	validationMessage: null,
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_SUCCESS: return {
			...state,
			validationMessage: null,
			information: payload
		};
		case USER_SIGNIN_FAIL: return {
			...state,
			validationMessage: payload
		};
		case USER_SIGNOUT_REQUEST: return {
			...state,
			information: null
		};
		case USER_REGISTER_SUCCESS: return {
			...state,
			information: payload.data
		};
		default: return state;
	}
};

export default userReducer;