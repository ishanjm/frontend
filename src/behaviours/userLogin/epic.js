import { from } from 'rxjs';
import axios from 'axios';
import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from './constants';

const userLoginEpic = action$ =>
	action$.pipe(
		ofType(USER_SIGNIN_REQUEST),
		mergeMap(action => from(axios.get('api/getName'))
			.pipe(
				map(response => ({
					type: USER_SIGNIN_SUCCESS,
					payload: response,
				})),
				catchError(() => ({
					type: 'FAIL',
					payload: error.xhr.response,
				})
				)
			)
		));

export default userLoginEpic;