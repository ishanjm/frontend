import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from "redux-observable";
import userReducer from './behaviours/userLogin/reducer';
import userDetailReducer from './behaviours/user/reducer';
import rootEpic from './rootEpic';

const initialState = {
	sidebarShow: 'responsive'
};

const applicationState = (state = initialState, { type, ...rest }) => {
	switch (type) {
		case 'set':
			return { ...state, ...rest };
		default:
			return state;
	}
};
const rootReducer = combineReducers({
	applicationState,
	user: userReducer,
	userDetails: userDetailReducer
});

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
		trace: true,
		traceLimit: 25
	}) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(epicMiddleware)));
epicMiddleware.run(rootEpic);

export default store;