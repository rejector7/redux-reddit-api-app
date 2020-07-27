import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AsyncApp from './components/AsyncApp'
import configureStore from './store/configureStore'
import {Provider} from 'react-redux'

const store = configureStore()

ReactDOM.render(
    <Provider store = {store}>
      <AsyncApp/>
    </Provider>,
    document.getElementById('root')
)