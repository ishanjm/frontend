import { combineEpics } from 'redux-observable';
import userLoginEpic from './behaviours/userLogin/epic';

const rootEpic = combineEpics(
	userLoginEpic
);
export default rootEpic;