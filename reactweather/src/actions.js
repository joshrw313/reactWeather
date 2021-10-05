import { keys } from './config/keys';
import { store } from './store';

export const GETLOCATIONSTART = 'getLocation_start';
export const GETCURRENTSTART = 'getCurrent_start';
export const GETDAILYSTART = 'getDaily_start';
export const GETHOURLYSTART = 'getHourly_start';
export const GETLOCATIONSUCCESS = 'getLocation_success';
export const GETCURRENTSUCCESS = 'getCurrent_success';
export const GETDAILYSUCCESS = 'getDaily_success';
export const GETHOURLYSUCCESS = 'getHourly_success';
export const GETLOCATIONFAILURE = 'getLocation_failure';
export const GETCURRENTFAILURE = 'getCurrent_failure';
export const GETDAILYFAILURE = 'getDaily_failure';
export const GETHOURLYFAILURE = 'getHourly_failure';


const accuWeatherKey = keys.accuWeather;

export const getLocation = () => {
	return dispatch => {
		dispatch(actionGetLocationStart());
		navigator.geolocation.getCurrentPosition(position => {
			 fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherKey}%20&q=${position.coords.latitude}%2C${position.coords.longitude}`)
				.then(response => response.json())	
				.then(response => dispatch(actionGetLocationSuccess(response)))
				.catch(err => dispatch(actionGetLocationFailure(err)))
		})	
	}	
}

export const getCurrent = () => {
	return dispatch => {
		dispatch(actionGetCurrentStart());


	fetch(`http://dataservice.accuweather.com/currentconditions/v1/${store.getState().location.location[0].Key}?apikey=${accuWeatherKey}&details=true`)
		.then(res => res.json())
		.then(res => dispatch(actionGetCurrentSuccess(res)))
		.catch(err => dispatch(actionGetCurrentFailure(err)))
	}
}

export const getDaily = () => {
	return dispatch => {
		dispatch(actionGetDailyStart());

	fetch(`http://dataservice.accuweather.com/forecasts/v1//daily/5day/${store.getState().location.location[0].Key}?apikey=${accuWeatherKey}&details=true`)
		.then(res => res.json())
		.then(res => dispatch(actionGetDailySuccess(res)))
		.catch(err => dispatch(actionGetDailyFailure(err)))
	}
}

export const getHourly = () => {
	return dispatch => {
		dispatch(actionGetHourlyStart());

	fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${store.getState().location.location[0].Key}?apikey=${accuWeatherKey}&details=true`)
		.then(res => res.json())
		.then(res => dispatch(actionGetHourlySuccess(res)))
		.catch(err => dispatch(actionGetHourlyFailure(err.message)))
	}
}

function actionGetLocationSuccess(data) {
	return {
		type: GETLOCATIONSUCCESS,
		payload: {
			...data
		} 
	};
}
function actionGetCurrentSuccess(data) {
	console.log(data)
	return {
		type: GETCURRENTSUCCESS,
		payload: data
		
	};
}
function actionGetDailySuccess(data) {
	return {
		type: GETDAILYSUCCESS,
		payload: {
			...data
		}
	};
}
function actionGetHourlySuccess(data) {
	return {
		type: GETHOURLYSUCCESS,
		payload: {
			...data
		}
	};
}
function actionGetLocationStart() {
	return {
		type: GETLOCATIONSTART,
	};
}
function actionGetCurrentStart() {
	return {
		type: GETCURRENTSTART,
	};
}
function actionGetDailyStart() {
	return {
		type: GETDAILYSTART,
	};
}
function actionGetHourlyStart() {
	return {
		type: GETHOURLYSTART,
	};
}
		
function actionGetLocationFailure(errMsg) {
	return {
		type: GETLOCATIONFAILURE,
		payload: { errMsg }
	};
}
function actionGetCurrentFailure(errMsg) {
	return {
		type: GETCURRENTFAILURE,
		payload: { errMsg }
	};
}
function actionGetDailyFailure(errMsg) {
	return {
		type: GETDAILYFAILURE,
		payload: { errMsg }
	};
}
function actionGetHourlyFailure(errMsg) {
	return {
		type: GETHOURLYFAILURE,
		payload: { errMsg }
	};
}
