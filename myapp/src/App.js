//import logo from './logo.svg';
 //import './login.css';
//import './userpage.css';
import React from 'react';
import Home from './home';
import Team from './newTeam'
import Register from './register';
import Login from './login'; 
import Crud from './crud';
/* //import Register from './register';
import Login from './login';
import Crud from './crud';
 import Userpage from './userpage'; */
 // import'./register.css';

//import'./home.css';

//import './crud.css';


import {BrowserRouter as Router,Switch,Route}from 'react-router-dom';

function App() {
  return (
    <Router>
  
  <div className="App">
    <Switch>

    <Route exact path="/">
  < Home/>
  </Route>   
 
  
   <Route exact path="/Team">
   <Team/>
</Route>  

  <Route exact path="/Register">
  <Register/>
   </Route>

   <Route exact path="/Login">
  <Login/>
  </Route>  

  <Route exact path="/Crud">
  <Crud/>
  </Route>
   

   
  </Switch>
    </div>                                                                                                                                
   </Router>
  );
}

export default App;
