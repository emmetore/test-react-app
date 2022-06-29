import '../node_modules/jquery/dist/jquery.js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import Newsfeed from './components/newsfeed';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <Newsfeed />
);


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   React.createElement(Newsfeed, {}, null)
// );

// //INSTRUCTOR VERSION IN WEEK 13 VIDEO
// ReactDOM.render(
//   React.createElement(Newsfeed, {}, null),
//   document.getElementById('root')
// );



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
