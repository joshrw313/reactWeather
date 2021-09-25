import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'

import {store} from './store';
import { actionGetLocation, actionGetCurrent, actionGetDaily, actionGetHourly} from './actions';

window.store = store;
window.getLocation = actionGetLocation;
window.getCurrent = actionGetCurrent;
window.getDaily = actionGetDaily;
window.getHourly = actionGetHourly;

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
