import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import {store} from './store';
import { getLocation, getCurrent, getDaily, getHourly} from './actions';

window.store = store;
window.getLocation = getLocation;
window.getCurrent = getCurrent;
window.getDaily = getDaily;
window.getHourly = getHourly;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
