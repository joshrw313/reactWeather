import React from 'react';
import LocationButton from './LocationButtonContainer';

const CurrentLocation = (props) => {
	return (  
			<div>
				<h1>{props.location.location[0].EnglishName} {props.location.location[0].PrimaryPostalCode} <LocationButton/></h1>
			</div>
	);
	
}
 
export default CurrentLocation;