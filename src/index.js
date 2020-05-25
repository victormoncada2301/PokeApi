import React from 'react';
import ReactDOM, {render} from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxPromise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './stylesheet/styles.css';
import reducers from './Reducers';

const middleware = applyMiddleware(reduxPromise, thunk);
const store = createStore(reducers, middleware);

ReactDOM.render (
    <Provider store={store}>
        <BrowserRouter> 
            <App/> 
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
    registerServiceWorker();