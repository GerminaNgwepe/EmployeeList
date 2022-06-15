import React from 'react';
import { Link }from 'react-router-dom';

import images from './g_tech_3.png';
import homePage from './home.module.css'
function Home(){
    // const link='login.html';
return(
 
    <body className={homePage.home} >
    <header>
        <table width="100%">
            <tr>
                <td>
                    <div id="glogo">
                        <img src={images} alt="" />
                    </div>   
                </td>
                <td>
                     <nav className={homePage.navii}>
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Services</a>
                        <a href="/">Contacts</a>
                        <Link  className={homePage.reg}to="/Register">REGISTER</Link>
                    </nav> 
                </td>
            </tr>
        </table>
    </header>
    <main>
        <br /><br /><br /><br />
        <div className={homePage.text}>
            YOUR NUMBER <br />
            STOP FOR <br />
            CREATIVE & UNIQUE <br /> 
            WEBSITES
            <br /><br />
            { <Link to='/Login'className={homePage.log}>LOGIN</Link>  }

    <br />
    { <Link to='/Crud' className={homePage.crud}>UPDATE</Link>  }
    <br />
    { <Link to='/Team' className={homePage.team}>OUR TEAM</Link>  }


        </div>
    </main>
    <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br /><br /><br /> <br /><br />
</body>
/* </html> */
);
}
export default Home;