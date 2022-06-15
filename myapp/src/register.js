import React, { useState } from 'react';
import logo from './images/g_tech_3.png';
import fingerprint from './images/fingerprint.jpg';
import { Link }from 'react-router-dom';
import axios from 'axios'
import registerPage from './register.module.css'

function Register(){
    const[username,setUsername] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[confirm ,setConfirm] = useState("")
    const register = () =>{
        axios.post("http://localhost:3001/insert",{username: username,email:email,password:password,confirm:confirm})
    }
return(

<body className={registerPage.bodys}>
    <header>
        <div className={registerPage.logoR}>
            <img src={logo}alt="" />
            </div>
             </header>
              <main>
                  <center>
                      <div  className={registerPage.formR}>
                    <div className={registerPage.rHead}><img className={registerPage.pic} src={fingerprint} alt="" /></div>
                    <br /><br /><br /><br /><br />
                     <form action="">
                         <input type="text" name="username" id="" placeholder="USERNAME" onChange={(event)=> {setUsername(event.target.value)}}/><br />
                         <input type="email" name="email" id="" placeholder="E-MAIL" onChange={(event)=> {setEmail(event.target.value)}}/><br />
                         <input type="password" name="password" id="" placeholder="PASSWORD" onChange={(event)=> {setPassword(event.target.value)}}/><br />
                         <ul>
                             <li className={registerPage.textLi}>must have special character</li><br />
                             <li className={registerPage.textLi}>must have atleast one uppercase</li><br />
                             <li className={registerPage.textLi}>must atleast contain 8 characters</li><br />
                             </ul>
                             <input type="password" placeholder="CONFIRM PASSWORD" onChange={(event)=> {setConfirm(event.target.value)}} /><br></br>
                             <button onClick={register} type="submit">REGISTER</button><br />
                             <p className='haveaccount'>Already have an account? <Link to="/Login"> Login </Link></p>
                             </form>
                    </div>
            </center>
                
        </main>
    </body>
   

);

}
export default Register;