import Daily from "./Daily";
import { connect } from 'react-redux';

function mapStateToProps (state) {
	return {
		daily: state.daily
	}
}

export default connect(mapStateToProps)(Daily);