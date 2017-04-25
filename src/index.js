import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import { Provider} from 'react-redux';
import {ConnectedApp} from './components/App.jsx';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import { createDevTools } from 'redux-devtools';

const store=createStore(reducer,
  compose(applyMiddleware(thunk),  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


ReactDOM.render(
    <Provider store={store}>
        <ConnectedApp/>
    </Provider>,document.getElementById('root')
)












