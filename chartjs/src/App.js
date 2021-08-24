import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import LineChart from './components/LineChart';
import store from './store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <div className="chart">
       <LineChart/>
      </div>
    </div>
    </Provider>
  );
}

export default App;
