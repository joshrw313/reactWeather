import Hourly from "./Hourly";
import { connect } from 'react-redux';

function mapStateToProps (state) {
	return {
		hourly: state.hourly
	}
}

export default connect(mapStateToProps)(Hourly);