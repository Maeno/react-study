import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Parent from './Parent'

ReactDOM.render(<Parent />, document.getElementById('root'));
registerServiceWorker();
