import { combineEpics } from 'redux-observable';
import { userLoginEpic, userSignUpEpic } from './behaviours/userLogin/epic';
import { getAllUsersEpic } from './behaviours/user/epic';

const rootEpic = combineEpics(
	userLoginEpic,
	userSignUpEpic,
	getAllUsersEpic
);
export default rootEpic;