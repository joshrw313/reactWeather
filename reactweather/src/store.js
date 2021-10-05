import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers';
import thunk from 'redux-thunk';


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

export const store = createStore(rootReducer, defaultState, applyMiddleware(thunk));