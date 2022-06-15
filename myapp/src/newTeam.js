
import React from 'react';
import {useState, useEffect} from 'react';
import team from './newteam.module.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
import black from './images/a.jpg';
import anna from './images/b.jpg';
import brandon from './images/c.jpg';
import muriel from './images/d.jpg';
import julia from './images/e.jpg';
import john from './images/f.jpg';
import Thabo from './images/g.jpg';
import lilian from './images/h.jpg';
import rating from './images/rating.png'


function Team(){ 
    const[username,setUsername] = useState("")
    const[role,setRole] = useState("")
    const[email,setEmail] = useState("")

    const[userlist,setUserlist]= useState([])
    useEffect(()=>{
        axios.get("http://localhost:3001/read").then((response)=>{
            setUserlist(response.data)
        })

    }, [])

    const deleteUser =(id)=>{
        axios.delete(`http://localhost:3001/delete/${id}`)
    }
    return(
        <body  className={team.bodyf}> 
              <nav className={team.navi}>
              <li className={team.our}>OUR TEAM MEMBERS <br/>Meet our Team!!</li>
                  <ul>

                  <li><Link to="/Crud" >ADD</Link></li> 
                                    <li><Link to="/Crud" >UPDATE</Link></li>
                                   <li><Link to="/Crud" >DELETE</Link></li> 
   
                  </ul>
                             </nav>
             
            
            <br /><br />
            <div  className={team.flexcontainer}>
                {userlist.map((val,key)=>{
                    return(
                        <div className={team.flexitem}>
                        <img className={team.user} src={anna} alt=" member" />
                        <div className={team.info}>
                            <p>{val.username} <br/>{val.role}<br/>Employee</p>
                            <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>{val.email}</div>
                            <br/><br/>
                            <img className={team.ratingP}src={rating} alt="" />  <br/>
                            <button className={team.btn} type="submit">Update</button> 
                            <button onClick={()=>deleteUser(val._id)} className={team.btn}  type="submit">Delete</button>
    
                        </div>
                    </div>
                    )
                })}
               
                {/* <div className={team.flexitem}>
                    <img className={team.user} src={black}alt=" member " /><br/>
                    <div className={team.info}>
                        <p>Haizel Maila <br/>CEO</p>
                        <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>murielg-tech@gmail.com</div>
                    
                        <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                        </div>
                </div>



                <div className={team.flexitem}>
                    <img className={team.user} src={brandon} alt=" member" /><br />
                    <div className={team.info}>
                        <p>Brandon Smith <br/>Administrator<br/>Employee</p>
                        <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>brang-tech@gmail.com</div><br/>
                        <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />

                    </div>
               </div>


               <div className={team.flexitem}>
                   <img className={team.user} src={muriel}alt=" member" /><br/>
                   <div className={team.info}>
                       <p>Muriel Jones <br/>Analyst/Developer<br/>Employee</p>
                       <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>murielg-tech@gmail.com</div>
                       <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                   
                   </div>
               </div>
        
        
        
            <div className={team.flexitem}>
                <img className={team.user} src={julia}alt=" member" /><br/>
                <div className={team.info} >
                    <p>Julia Malope <br/>Financial Manager<br/>Employee</p>
                    <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>juliag-tech@gmail.com</div>
                
                    <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                </div>
            </div>
        
        
        
            
            <div className={team.flexitem}>
                <img className={team.user} src={john}alt=" member" /><br />
                <div className={team.info} >
                    <p>John Lock <br/>Back-End Developer<br/>Employee</p>
                    <div className={team.mail} ><span role="img" aria-label="Snowman">📧</span>johng-tech@gmail.com</div>
                
                    <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                
                </div>
            </div>


            <div className={team.flexitem}>
                <img className={team.user} src={Thabo}alt=" member" /><br/>
                <div className={team.info} >
                    <p>Thabo Mmola <br/>Front-End Developer<br/>Employee</p>
                    <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>thabog-tech@gmail.com</div>
                    <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                
                </div>
            </div>

        
            <div className={team.flexitem}>
                <img className={team.user} src={lilian} alt=" member" /><br/>
                <div className={team.info} >
                    <p>Lilian Du-toit<br/>Project Assistant<br/>Employee</p>
                    <div className={team.mail}><span role="img" aria-label="Snowman">📧</span>liliang-tech@gmail.com</div>
                    <br/><br/>
                        <img className={team.ratingP}src={rating} alt="" />
                
                
                </div>
            </div>
 */}
        
        </div>

        <footer>Terms of Use|Company Regulations|Privacy Statement|Security Centre| ©Copyright.All rights reserved |( NCRCP7)</footer>

        </body>
        
        
       
    );
}
//import { format } from 'express/lib/response';
export default Team;