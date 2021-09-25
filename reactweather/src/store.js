import { createStore } from 'redux';
import { setLocation } from './reducers';

const defaultState = {
	location: {
		name: 'city',
		postalCode: '000000',
		locationKey: ''
	},
	currentConditions: {

	},
	dailyForecast: {

	},
	hourlyForecast: {
		
	}
};

export const store = createStore(setLocation, defaultState);