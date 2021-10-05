const Hourly = (props) => {
	return ( 
		<div className="container-fluid"> 
		<h1>12 Hour Forecast</h1>
			<div className="container-sm">
				{
				Object.keys(props.hourly.hourly[0]).map(i => { 
				return (
				<div key={i}>
				<hr/>
				<div className="row align-items-center">
				<div className="col">
					<h1>{props.hourly.hourly[0][i].DateTime.substr(11,5)}</h1>
				</div>
				<div className="col">
					<i className={props.getWeatherIcon(props.hourly.hourly[0][i].WeatherIcon)} style={{'fontSize': '3rem'}}/>

					<h5>{props.hourly.hourly[0][i].IconPhrase}</h5>
					<p>{props.hourly.hourly[0][i].Temperature.Value}{props.hourly.hourly[0][i].Temperature.Unit} <br/> RealFeel: {props.hourly.hourly[0][i].Temperature.Value}{props.hourly.hourly[0][i].Temperature.Unit}</p>	
				</div>
				<div className="col">
					<h4>Precipitation {props.hourly.hourly[0][i].PrecipitationProbability}%</h4>
				</div>
				</div>
				<hr/>
				</div>
				)
				})	
					}	
			</div>		
		</div>
	);
}
 
export default Hourly;