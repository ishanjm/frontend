import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from './constants';

const initialState = {
	infomation: null,
	validationMessage: null
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_SUCCESS: return {
			...state,
			validationMessage: null,
			infomation: payload
		};
		case USER_SIGNIN_FAIL: return {
			...state,
			validationMessage: payload
		};
		default: return state;
	}
};

export default userReducer;