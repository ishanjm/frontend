import { from, of } from 'rxjs';
import axios from 'axios';
import { ofType } from "redux-observable";
import { mergeMap, map, catchError } from "rxjs/operators";
import {
	GET_USER_LIST_REQUEST,
	GET_USER_LIST_SUCCESS,
	GET_USER_LIST_FAIL
} from './constants';

export const getAllUsersEpic = action$ =>
	action$.pipe(
		ofType(GET_USER_LIST_REQUEST),
		mergeMap(action => from(axios.get('https://profound-griffin-361440.netlify.app/api/user/get-all'))
			.pipe(
				map(response => {
					return {
						type: GET_USER_LIST_SUCCESS,
						payload: response.data.Users,
					};
				}),
				catchError((error) => of({
					type: GET_USER_LIST_FAIL,
					payload: error.response && error.response.data.message ? error.response.data.message : error.message,
				})
				)
			)
		));
