const LocationButton = (props) => {
	return ( 
		<span>
			<button
				onClick={props.handleClick}
				>Get Location</button>
		</span> 
	);
}
 
export default LocationButton;