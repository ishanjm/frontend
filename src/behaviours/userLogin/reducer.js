import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from './constants';

const initialState = {
	IsUserLoggedIn: false,
	username: null,
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_REQUEST: return state;
		case USER_SIGNIN_SUCCESS: return {
			...state,
			username: payload.data.name
		};
		default: return state;
	}
};

export default userReducer;