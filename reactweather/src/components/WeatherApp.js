import React from "react";
import DonateButton from "./DonateButton";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';
import CurrentConditions from "./CurrentConditionsContainer";
import CurrentLocation from "./LocationContainer";
import Daily from "./DailyContainer";
import Hourly from "./HourlyContainer";

const Weather = props => (
	<div onLoad= {() => props.fetchLocation()}>
		<Router>
			<div className="container-fluid">
					<ul className="navbar navbar-light bg-light">
						<li className="navbar-brand">ReactWeather</li>
						<li className="nav-link d-flex"><Link to="/donate">Donate $1.00</Link></li>
					</ul>
					{ props.state.location.location && <CurrentLocation /> }
					<ul className="nav justify-content-center">
						<li className="nav-link">
							<Link to="/current">Current Conditions</Link>
						</li>
						<li className="nav-link">
							<Link to="/daily">5 day forecast</Link>
						</li>
						<li className="nav-link">
							<Link to="/hourly">12 hour forecast</Link>
						</li>
						<li className="nav-link">
							<a href="http://accuweather.com"><img height="20rem" width="140rem" src='accuweather.png' alt="accuweather attribution"/></a>
						</li>
					</ul>
			</div>
			<Switch>
				<Route exact path="/">
				</Route>
				<Route exact path="/current">
					<div>
						{ props.state.current.current && <CurrentConditions />}
					</div>
				</Route>
				<Route exact path="/daily">
					<div>
						{ props.state.daily.daily && <Daily />}
					</div>
				</Route>
				<Route exact path="/hourly">
					<div>
						{ props.state.hourly.hourly && <Hourly />}
					</div>
				</Route>
				<Route exact path="/donate">
					<DonateButton />
				</Route>
			</Switch>
		</Router>
	</div>
)

export default Weather;