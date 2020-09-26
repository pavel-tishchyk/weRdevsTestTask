import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import { BrowserRouter } from 'react-router-dom';
import Header from './сomponents/Header';
import Routes from './сomponents/Routes';

const store = createStore();

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <div className='wrapper'>
          <Header/>
          <Routes/>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
