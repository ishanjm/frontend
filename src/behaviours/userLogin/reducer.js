import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from './constants';

const initialState = {
	infomation: null,
};

const userReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case USER_SIGNIN_SUCCESS: return {
			...state,
			infomation: payload
		};
		default: return state;
	}
};

export default userReducer;