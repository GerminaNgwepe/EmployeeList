 import React from 'react';
 import image from './images/g_tech_3.png';
 import { Link }from 'react-router-dom';
import LoginPage from './login.module.css';
 //import  './login.css';

 function Login(){

return(
    
    <body className= {LoginPage.bodyk}>
        <header>
            <div id="logo">
                <img src={image} alt="" /> 
           </div>
           </header>
           <main>
               <br /><br /><br />  <br />
               <center>
                   <div className= {LoginPage.form}>
                       <div className={LoginPage.fHead}>Client Login</div>
                       <label for ="login" name="Client login " placeholder="Client Login" ></label>
                       <br /><br /><br /><br />
                       <form action="">
                           <input type="text" name="username" id="" placeholder="👤USERNAME" class="user" /><br />
                           <input type="password" name="password" id="" placeholder="🔐PASSWORD" class="user" /> <br />
                           <button type="submit">LOGIN</button>
                           <p className={LoginPage.jj}>Need an account? <Link to="/Register"> Register</Link></p>
                      </form>
                 </div>
                 <br /><br /><br /><br /><br /><br /><br />
                 <br /><br /><br /><br /><br /><br /><br />
              </center>
            </main>
    </body>
  
);

    
 }

 export default Login;