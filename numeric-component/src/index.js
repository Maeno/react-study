import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import NumericForm from './NumericForm'

ReactDOM.render(<NumericForm />, document.getElementById('root'));
registerServiceWorker();
