import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import InchToCm from './InchToCm'

ReactDOM.render(<InchToCm />, document.getElementById('root'));
registerServiceWorker();
