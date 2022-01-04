import { createAction, createReducer } from "@reduxjs/toolkit"

const PREFIX:string = 'BasePage';

export const fetchMoviesRequest = createAction<string, string>(`FETCH_MOVIES_REQUEST`);
export const fetchMoviesSuccess = createAction(`${PREFIX}/FETCH_MOVIES_SUCCESS`);
export const fetchMoviesFailure = createAction(`${PREFIX}/FETCH_MOVIES_FAILURE`);

const initialState = {
	watchedMovies: [],
	futureMovies: [],
	loading: false,
	error: null
}

const reducer = createReducer(initialState, {
	[fetchMoviesRequest.type]: () => ({
		...initialState,
	}),
	[fetchMoviesSuccess.type]: (state, action) => ({
		...state,
		loading: false,
		error: null,
		...action.payload,
	}),
	[fetchMoviesFailure.type]: (state, action) => ({
		...state,
		loading: false,
		error: action.payload,
	}),
});

export default reducer;