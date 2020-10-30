import React from 'react';
import style from '../module.css/Navbar.module.css';
import {NavLink} from 'react-router-dom';



const Navbar= () => {

    return(
        <div>

            <div className={style.navbar}>
                <div>
                  <h1 >
                      <NavLink to='/' className={style.home}>theXpeople</NavLink>
                  </h1>            
                </div>
             
               
                    <ul className={style.unorderedList}>
                        <li>
                            <NavLink to='/about' className={style.about}>about</NavLink>
                        </li>
                        <li>
                           <NavLink to='/create-an-account' className={style.new}> create-an-account</NavLink>
                        </li>
                        <li>
                            <NavLink to='/sign-in' className={style.old}>sign-in</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact' className={style.hi}>contact</NavLink>
                        </li>
                    </ul>
                
            </div>
         

         
        

        </div>
    )
}



export default Navbar