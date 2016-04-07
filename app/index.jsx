import './main.css';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';
import alt from './libs/alt';
import storage from './libs/storage';
import persistent from './libs/persistent';

persistent(alt, storage, 'myapp');

alt.dispatcher.register(console.log.bind(console));

ReactDOM.render(<App />, document.getElementById('app'));
