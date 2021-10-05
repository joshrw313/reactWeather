import { combineReducers } from 'redux';
const GETLOCATIONSTART = 'getLocation_start';
const GETCURRENTSTART = 'getCurrent_start';
const GETDAILYSTART = 'getDaily_start';
const GETHOURLYSTART = 'getHourly_start';
const GETLOCATIONSUCCESS = 'getLocation_success';
const GETCURRENTSUCCESS = 'getCurrent_success';
const GETDAILYSUCCESS = 'getDaily_success';
const GETHOURLYSUCCESS = 'getHourly_success';
const GETLOCATIONFAILURE = 'getLocation_failure';
const GETCURRENTFAILURE = 'getCurrent_failure';
const GETDAILYFAILURE = 'getDaily_failure';
const GETHOURLYFAILURE = 'getHourly_failure';

const defaultState = {
	location:{
		loading: false,
		error: null,
		location: null
	}, 
	current:{
		loading: false,
		error: null,
		current: null
	}, 
	daily:{
		loading: false,
		error: null,
		daily: null
	}, 
	hourly:{
		loading: false,
		error: null,
		hourly: null
	} 
};

const setLocation = (state = defaultState, action) => {
	switch(action.type) {
		case GETLOCATIONSTART:
			return {
				...state.location,
				loading: true

			}
		case GETLOCATIONSUCCESS: {
			return {
				...state.location,
				loading: false,
				error: null,
				location: [action.payload]
			}
			}
		case GETLOCATIONFAILURE: {
			return {
				...state.location,
				loading: false,
				error: action.payload.error

			}
		}
		default:
			return state
	}
}
function setCurrent(state = defaultState, action) {
	switch(action.type) {
		case GETCURRENTSTART:
			return {
				...state.current,
				loading: true
			}
		case GETCURRENTSUCCESS: {
			return {
				...state.current,
				loading: false,
				error: null,
				current: action.payload
				}
			}
		case GETCURRENTFAILURE: {
			return {
				...state.current,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}

function setDaily(state = defaultState, action) {
	
	switch(action.type) {
		case GETDAILYSTART:
			return {
				...state.daily,
				loading: true
			}
		case GETDAILYSUCCESS: {
			return {
				...state.daily,
				loading: false,
				error: null,
				daily: [action.payload]
			}
			}
		case GETDAILYFAILURE: {
			return {
				...state.daily,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}

function setHourly(state = defaultState, action) {
	
	switch(action.type) {
		case GETHOURLYSTART:
			return {
				...state.hourly,
				loading: true
			}
		case GETHOURLYSUCCESS: {
			return {
				...state.hourly,
				loading: false,
				error: null,
				hourly: [action.payload]
			}
			}
		case GETHOURLYFAILURE: {
			return {
				...state.hourly,
				loading: false,
				error: action.payload
			}
		}
		default:
			return state
	}
}

export const rootReducer = combineReducers({
	location: setLocation,
	current: setCurrent,
	daily: setDaily,
	hourly: setHourly
});