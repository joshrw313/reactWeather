import CurrentLocation from "./CurrentLocation";
import { connect } from 'react-redux';

function mapStateToProps(state) {
		return {
			location: state.location
			
		}
	}


export default connect(mapStateToProps)(CurrentLocation);