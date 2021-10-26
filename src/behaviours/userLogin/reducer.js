import { USER_SIGNIN_REQUEST } from './constants';

const initialState = {
	IsUserLoggedIn: false,
	username: null,
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_REQUEST: return state;
		default: return state;
	}
};

export default userReducer;