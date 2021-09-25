import React from "react";
import CurrentLocation from "./LocationContainer";
import DonateButton from "./DonateButton";
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Link
 } from 'react-router-dom';


const Weather = props => (
	<React.Fragment>
		<Router>
			<div className="container-fluid">
					<ul className="navbar navbar-light bg-light">
						<li className="navbar-brand">ReactWeather</li>
						<li className="nav-link d-flex"><Link to="/donate">Donate $1.00</Link></li>
					</ul>
					<ul className="nav justify-content-center">
						<li className="nav-link">
							<Link to="/">Current Conditions</Link>
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
					<CurrentLocation />
				</Route>
				<Route exact path="/daily">
					<CurrentLocation />
				</Route>
				<Route exact path="/hourly">
					<CurrentLocation />
				</Route>
				<Route exact path="/donate">
					<DonateButton />
				</Route>
			</Switch>
		</Router>
	</React.Fragment>
)

export default Weather;