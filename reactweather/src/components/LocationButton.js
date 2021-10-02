const LocationButton = (props) => {
	return ( 
		<span>
			<button
				onClick={props.handleClick}
				>Get Weather</button>
		</span> 
	);
}
 
export default LocationButton;