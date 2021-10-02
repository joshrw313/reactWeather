import LocationButton from "./LocationButton";
import { connect } from 'react-redux';

import { getCurrent, getHourly, getDaily } from "../actions";

function mapDispatchToProps(dispatch) {
	return {
		handleClick: () => {
			dispatch(getCurrent());
			dispatch(getDaily());
			dispatch(getHourly());
		}
	}
}

export default connect(null, mapDispatchToProps)(LocationButton);