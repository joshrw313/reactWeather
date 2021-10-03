const Daily = (props) => {
	const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	const today = new Date().getDay();
	return ( 
		<div className="container-fluid">
		<h3>5 Day Forecast</h3>
		{props.daily.daily[0].DailyForecasts.map(d => {
			let i = props.daily.daily[0].DailyForecasts.indexOf(d)
		return (
		<div className="container-sm">
		<hr/>
			<div className="row align-items-center">
				<div className="col">
					<h3>{days[today+1+i]}</h3>
					<h3>{d.Date.substr(5,5)}</h3>
				</div>
				<div className="col">
					<i className={props.getWeatherIcon(props.daily.daily[0].DailyForecasts[i].Day.Icon)} style={{'fontSize': '3rem'}}/>

					<h5>{props.daily.daily[0].DailyForecasts[i].Day.IconPhrase}</h5>
					<p>Low: {props.daily.daily[0].DailyForecasts[i].Temperature.Minimum.Value}{props.daily.daily[0].DailyForecasts[i].Temperature.Minimum.Unit} High: {props.daily.daily[0].DailyForecasts[i].Temperature.Maximum.Value}{props.daily.daily[0].DailyForecasts[i].Temperature.Maximum.Unit}</p>	
				</div>
				<div className="col">
					<h4>Precipitation {props.daily.daily[0].DailyForecasts[i].Day.PrecipitationProbability}%</h4>
				</div>
			</div>
		<hr/>
		</div>)})}
		</div>
	);
}
 
export default Daily;