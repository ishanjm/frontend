import { GET_USER_LIST_SUCCESS, GET_USER_LIST_FAIL } from './constants';

const initialState = {
	users: null
};

const userDetailReducer = (state = initialState, action) => {
	const { payload, type } = action;
	switch (type) {
		case GET_USER_LIST_SUCCESS: return {
			...state,
			users: payload
		};
		case GET_USER_LIST_FAIL: return {
			...state,
			validationMessage: payload
		};
		default: return state;
	}
};

export default userDetailReducer;