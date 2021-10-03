import React from 'react';

const CurrentLocation = (props) => {
	return (  
			<div>
				<h1>{props.location.location[0].EnglishName} {props.location.location[0].PrimaryPostalCode}</h1>
			</div>
	);
	
}
 
export default CurrentLocation;