import React from 'react';
import * as serviceWorker from './serviceWorker';
import ReactDOM from 'react-dom'
import './index.css';
import Stas9nJSApp from "./App";

     ReactDOM.render(<Stas9nJSApp/>, document.getElementById('root'));


// API
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

