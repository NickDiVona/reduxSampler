import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import NumberDisplay from './components/numberDisplay';

const myStore = createStore(rootReducer);

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <header className="App-header">
          <p>Click the button below to add one!</p>
          <NumberDisplay />
        </header>
      </div>
    </Provider>
  );
}

export default App;
