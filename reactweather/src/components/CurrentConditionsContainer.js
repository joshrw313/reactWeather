import CurrentConditions from "./CurrentConditions";
import { connect } from 'react-redux';

function mapStateToProps(state)  {
	function getWeatherIcon () {
		switch (state.current.current[0].WeatherIcon) {
			case 1: {
				return 'fas fa-sun'
			} 
			case 2: {
				return 'fas fa-cloud-sun'
			} 
			case 3: {
				return 'fas fa-cloud-sun'
			} 
			case 4: {
				return 'fas fa-cloud-sun'
			} 
			case 5: {
				return 'fas fa-cloud-sun'
			} 
			case 6: {
				return 'fas fa-cloud-sun'
			} 
			case 7: {
				return 'fas fa-cloud'
			} 
			case 8: {
				return 'fas fa-cloud-sun'
			} 
			case 9: {
				return 'fas fa-cloud-sun'
			} 
			case 10: {
				return 'fas fa-cloud-sun'
			} 
			case 11: {
				return 'fas fa-smog'
			} 
			case 12: {
				return 'fas fa-cloud-rain'
			} 
			case 13: {
				return 'fas fa-cloud-sun-rain'
			} 
			case 14: {
				return 'fas fa-cloud-sun-rain'
			} 
			case 15: {
				return 'fas fa-bolt'
			} 
			case 16: {
				return 'fas fa-bolt'
			} 
			case 17: {
				return 'fas fa-bolt'
			} 
			case 18: {
				return 'fas fa-cloud-rain'
			} 
			case 19: {
				return 'fas fa-snowflake'
			} 
			case 20: {
				return 'fas fa-snowflake'
			} 
			case 22: {
				return 'fas fa-snowflake'
			} 
			case 23: {
				return 'fas fa-snowflake'
			} 
			case 24: {
				return 'fas fa-cloud-rain'
			} 
			case 25: {
				return 'fas fa-cloud-rain'
			} 
			case 26: {
				return 'fas fa-cloud-rain'
			} 
			case 27: {
				return 'fas fa-cloud-rain'
			} 
			case 28: {
				return 'fas fa-cloud-rain'
			} 
			case 29: {
				return 'fas fa-cloud-rain'
			} 
			case 30: {
				return 'fas fa-sun'
			} 
			case 31: {
				return 'fas fa-cloud'
			} 
			case 32: {
				return 'fas fa-wind'
			} 
			case 33: {
				return 'fas fa-moon'
			} 
			case 34: {
				return 'fas fa-cloud-moon'
			} 
			case 35: {
				return 'fas fa-cloud-moon'
			} 
			case 36: {
				return 'fas fa-cloud-moon'
			} 
			case 37: {
				return 'fas fa-cloud-moon'
			} 
			case 38: {
				return 'fas fa-cloud-moon'
			} 
			case 39: {
				return 'fas fa-cloud-moon-rain'
			} 
			case 40: {
				return 'fas fa-cloud-moon-rain'
			} 
			case 41: {
				return 'fas fa-bolt'
			} 
			case 42: {
				return 'fas fa-bolt'
			} 
			case 43: {
				return 'fas fa-cloud-moon'
			} 
			case 44: {
				return 'fas fa-cloud-moon'
			} 
		}
	}

		return {
			current: state.current,
			getWeatherIcon
		}
	}

export default connect(mapStateToProps)(CurrentConditions);