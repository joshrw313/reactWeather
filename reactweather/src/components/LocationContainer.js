import CurrentLocation from "./CurrentLocation";
import { connect } from 'react-redux';

function mapStateToProps(state) {
		return {
			location: {
				name: state.location.name,
				postalCode: state.location.postalCode,
				locationKey: state.location.Key
			}
		}
	}


export default connect(mapStateToProps)(CurrentLocation);