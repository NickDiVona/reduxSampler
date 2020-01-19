import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/rootReducer';
import ReduxButton from './components/reduxButton';
import NormalButton from './components/normalButton';

const myStore = createStore(rootReducer);

function App() {
  return (
    <Provider store={myStore}>
      <div className="App">
        <header className="App-header">
          <ReduxButton />
          <NormalButton />
        </header>
      </div>
    </Provider>
  );
}

export default App;
