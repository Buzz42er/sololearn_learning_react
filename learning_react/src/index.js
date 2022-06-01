import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';

const name = 'Jure';
const myIntro = <p> My name is {name}.</p>;

const root = ReactDOM.createRoot(document.getElementById('hello'));
root.render(
  <h1>Hello React!</h1>,
    myIntro,
    document.getElementById('hello')
);
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

class Ahoj extends React.Component {
  render() {
    return <h1>Hello world.</h1>;
  }
} 


ReactDOM.render (
  Ahoj,
  document.getElementById('root')
)

function Hello() {
  return <h1>Hello world.</h1>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('rComp')
);