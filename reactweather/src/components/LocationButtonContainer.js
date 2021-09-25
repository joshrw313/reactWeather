import LocationButton from "./LocationButton";
import { connect } from 'react-redux';

import { actionGetLocation } from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch(actionGetLocation());
		}
	}
}

export default connect(null, mapDispatchToProps)(LocationButton);