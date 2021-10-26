import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from "redux-observable";
import { filter, mapTo, delay } from "rxjs/operators";

import userReducer from './behaviours/userLogin/reducer';

const initialState = {
	sidebarShow: 'responsive'
};

export const pingEpic = action$ =>
	action$.pipe(
		filter(action => action.type === "USER_SIGNIN_REQUEST"),
		delay(1000), // Asynchronously wait 1000ms then continue
		mapTo({ type: "PONG" })
	);

const changeState = (state = initialState, { type, ...rest }) => {
	switch (type) {
		case 'set':
			return { ...state, ...rest };
		default:
			return state;
	}
};
const rootReducer = combineReducers({
	changeState,
	user: userReducer
});

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(pingEpic);

export default store;