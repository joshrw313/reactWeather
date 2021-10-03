import Daily from "./Daily";
import { connect } from 'react-redux';
import getWeatherIcon from "../getWeatherIcon";

function mapStateToProps (state) {
	return {
		daily: state.daily,
		getWeatherIcon
	}
}

export default connect(mapStateToProps)(Daily);