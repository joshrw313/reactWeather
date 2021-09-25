import React from 'react';
import LocationButton from './LocationButtonContainer';

const CurrentLocation = (props) => {
	return (  
		<React.Fragment>
			<div>
				<h1>{props.location.name} {props.location.postalCode} <LocationButton/></h1>
			</div>
		</React.Fragment>
	);
}
 
export default CurrentLocation;