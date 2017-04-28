import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { createDevTools } from 'redux-devtools';
import thunk from 'redux-thunk';


import { ConnectedApp } from './components/App.jsx';
import reducer from './reducers/reducer';


const store = createStore(reducer,compose(applyMiddleware(thunk), window.devToolsExtension ? window.devToolsExtension() : f => f));


ReactDOM.render(
  <Provider store={store}>
    <ConnectedApp />
  </Provider>, document.getElementById('root'),
);

