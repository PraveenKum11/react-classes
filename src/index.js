import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

import './index.css';
// import store from './store';
import store from './store/index.js';
import isItNumber, { isEven, isOdd, NUM_PRODUCTS } from './util';

// console.log('Multiple reducers', store1.getState());

// import CountDown from './components/CountDown';

const root = ReactDOM.createRoot(document.getElementById('root'));

// React component conventions
// 1. Any file that defines a react component should use
//    PascalCase for file name and should export only
//    1 component.
// 2. File extension should .jsx
// 3. Component also should use PascalCase
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

console.log(
  isOdd(3), isOdd(4), isEven(3), isEven(4),
  isItNumber(1), isItNumber('2'),
  NUM_PRODUCTS
);

// We will start at 9:05pm
