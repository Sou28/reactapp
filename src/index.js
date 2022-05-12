import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './hooks/App.js';
import Test from './Test';
import reportWebVitals from './reportWebVitals';
import User from './hooks/User.js';
import { BrowserRouter as Router,Route,Switch,Link } from 'react-router-dom'
import  RouterTab  from './router/routerTab';
import {Home} from  './router/Home';
import {Contact} from './router/Contact';
import {AboutMe} from './router/AboutMe';


/* ReactDOM.render(
   <React.StrictMode>
    
    <Test/>
    <User/>
    
  </React.StrictMode>,
  document.getElementById('root') 
  
); */

ReactDOM.render(
  
  (<Router>
    <div>
    <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
        <li>
        <Link to="/about">About</Link>
          </li>
        <li>
        <Link to="/contact">Contact</Link>
        </li>
        </ul>
       <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutMe" >
          <AboutMe />
           </Route> 
          <Route path="/contact">
          <Contact />
          </Route>
        </Switch>
    </div>
   </Router> ),
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
