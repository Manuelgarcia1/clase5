import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(<React.StrictMode><App title="Counter" /></React.StrictMode>,document.getElementById('root'));
reportWebVitals();

if (module.hot){
    module.hot.accept();
}