//import './crud.css'
import { useState, useEffect } from "react";
import Axios from 'axios'
import React from "react";
import CrudPage from "./crud.module.css"
import axios from "axios";
//mport Update from "../server/update";
function Crud(){
    const[username,setUsername] = useState("")
    const[role,setRole] = useState("")
    const[email,setEmail] = useState("")

    
    
    const add = () =>{
        Axios.post("http://localhost:3001/create",{username: username, role: role,email:email})
    }
 return(
  <html>
  <head>
   
      {/* <link rel="stylesheet" href="index.css"></link> */}
  </head>
   <body  className={CrudPage.bodyh} >
    <main>
        <center>
            <div className={CrudPage.form}>
                <form action="">
                    <div className={CrudPage.fHead}>Add/Edit/Remove Employee from database</div>
                     <br />
                     <input type="text" name="username"id="username"placeholder="👤Enter first and last name"class="user" onChange={(event)=> {setUsername(event.target.value)}}/><br />
                     <input type="text" name="role" id="" placeholder="👤Enter Role" class="user" onChange={(event)=> {setRole(event.target.value)}}/><br />
                     <input type="text" name="email" id="" placeholder="📧Enter User email" class="user" onChange={(event)=> {setEmail(event.target.value)}} /> <br />
                     <input  class="UploadFileImage"type="file" onchange="readURL(this)" accept="image/*"  />
                     <br />
                     <button onClick={add} className={CrudPage.btn}type="submit">ADD </button> 
                     <button onClick={add} className={CrudPage.btn}type="submit">UPDATE </button>
                
                       </form>
                        </div>
                        <br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br /><br /><br />
                        </center>
                        </main>
                        </body>
</html>

 );
 
}
export default Crud;