import WeatherApp from "./WeatherApp";
import { connect } from 'react-redux';

import { getLocation, getCurrent } from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		fetchLocation: () => {
			dispatch(getLocation())
		},
		fetchCurrent: () => {
			dispatch(getCurrent())
		}
	}
}
function mapStateToProps(state) {
	return {
		state: state
	}
}


export default connect(mapStateToProps,mapDispatchToProps)(WeatherApp);