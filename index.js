import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style/login.css'
import Login from './component/login';
import Logout from './component/logout';

//import One from "./App/Page1.js"
//import Two from "./App/Page2"
//import App from './App';
//import reportWebVitals from './reportWebVitals';
/**
 JSX -> jacvascript XML
 <></> fragment -> it is used to create tag, it doesn't style, clas name it won't allow,continous tag will not allow,multiple prent tag is not allowed
 */
//let firstName="Java";
//let secondName="Script";
const isLogin=true;
const Main =()=>{
    /**if(isLogin){
      return <Login/>
    }
    return <Logout/>*/
    return(isLogin ? <Login/> : <Logout/>)
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <h1>Test</h1>
 <Main/>
  </>
  );
  /*<section className='container'>
  <div>
    <p>gjhfhfhfhdv</p>
  </div>
  <div>
    <p>hhgegffegfhv</p>
  </div>
  <div>{10**5}</div>
  </section>
  //<>



  /<div className='container'>
  <h1>
    my first app</h1>
    <p>ghgdgyghgfhetfvgf hgfhgffgftefg hgfdf <span><b>(10+10)</b></span></p>
    <One/>
    <Two/>
    {firstName.concat(secondName)}
    <div>
      <h1>Another div</h1>
    </div>
    <div>
      <h2>Another div</h2>
    </div>
    </div>
    //</>*/


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
// react app