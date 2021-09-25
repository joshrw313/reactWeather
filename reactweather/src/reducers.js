import {
	GETLOCATION,
	GETCURRENT,
	GETDAILY,
	GETHOURLY
} from './actions';

const accuWeatherKey = '';

const FetchPosition = {};

const fetchLocation = async () => {

	await navigator.geolocation.getCurrentPosition(async position => {
		FetchPosition.here =  await fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${accuWeatherKey}%20&q=${position.coords.latitude}%2C${position.coords.longitude}`).then(response => response.json()).catch(e => console.log(e));
	});
}


fetchLocation();

export function setLocation(state, action) {
	switch(action.type) {
		case GETLOCATION:
	let Location = FetchPosition.here;
	console.log(Location);
		return {
			location: {
				name: Location.EnglishName,
				postalCode: Location.PrimaryPostalCode,
				locationKey: Location.Key
			}
			}
		case GETCURRENT: {
			const fetchCurrent = async () => {
				return await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${state.location.locationKey}?apikey=${accuWeatherKey}&details=true`).then(response => response.json()).catch(e => console.log(e));
			};
			return {
				location: state.location,
				currentConditions: fetchCurrent(),
				dailyForecast: state.dailyForecast,
				hourlyForecast: state.hourlyForecast
			}

		}
		case GETDAILY: {
			const fetchDaily = async () => {
				return await fetch(`http://dataservice.accuweather.com/forecasts/v1//daily/5day/${state.location.locationKey}?apikey=${accuWeatherKey}&details=true`).then(response => response.json()).catch(e => console.log(e));
			};
			return {
				location: state.location,
				currentConditions: state.currentConditions,
				dailyForecast: fetchDaily(),
				hourlyForecast: state.hourlyForecast
			}

		}
		case GETHOURLY: {
			const fetchHourly = async () => {
				return await fetch(`http://dataservice.accuweather.com/forecasts/v1/hourly/12hour/${state.location.locationKey}?apikey=${accuWeatherKey}&details=true`).then(response => response.json()).catch(e => console.log(e));
			};
			return {
				location: state.location,
				currentConditions: state.currentConditions,
				dailyForecast: state.dailyForecast,
				hourlyForecast: fetchHourly() 
			}

		}
		default:
			console.log(state);
			return state
	}
}