import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Shop from './components/Shop';

function App() {
  return (
   <Provider store={store}>
    <div className="App">
      <Shop/>
    </div>
    </Provider>
  );
}

export default App;
