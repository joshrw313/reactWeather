const CurrentConditions = (props) => {
	console.log(props);
	return (
		<div  className="container">
			<h1>{props.current.current[0].Temperature.Imperial.Value}{props.current.current[0].Temperature.Imperial.Unit} {props.current.current[0].WeatherText}</h1>
			<h3>Real Feel: {props.current.current[0].RealFeelTemperature.Imperial.Value}{props.current.current[0].RealFeelTemperature.Imperial.Unit}</h3>
			<i className={props.getWeatherIcon()} style={{'fontSize': '12rem'}}></i>
		</div>
	  );
}
 
export default CurrentConditions;