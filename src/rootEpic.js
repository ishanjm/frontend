import { combineEpics } from 'redux-observable';
import { userLoginEpic, userSignUpEpic } from './behaviours/userLogin/epic';

const rootEpic = combineEpics(
	userLoginEpic,
	userSignUpEpic
);
export default rootEpic;