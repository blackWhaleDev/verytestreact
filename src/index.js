import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

let el = (
    <React.Fragment>
        <h1>hq</h1>
        <h2>he</h2>
    </React.Fragment>
);
ReactDOM.render(
    <React.StrictMode>
        {/*<App/>*/}
        {el}
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
