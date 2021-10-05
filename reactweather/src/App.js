import './App.css';
import { Provider } from 'react-redux';
import WeatherApp from './components/WeatherAppContainer';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <WeatherApp />
      </div>
    </Provider>
  );
}

export default App;
