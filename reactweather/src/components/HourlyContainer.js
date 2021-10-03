import Hourly from "./Hourly";
import { connect } from 'react-redux';
import getWeatherIcon from "../getWeatherIcon";

function mapStateToProps (state) {
	return {
		hourly: state.hourly,
		getWeatherIcon
	}
}

export default connect(mapStateToProps)(Hourly);