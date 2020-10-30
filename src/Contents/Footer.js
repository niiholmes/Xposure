import React from 'react';
import style from '../module.css/Footer.module.css';
import image1 from './media/coffee.jpg'



const Footer= () => {

    return(
        <div>

            <center>


              <tr className={style.pals}>
              <td><img src={image1} alt='coffee' className={style.img1}></img></td>
              </tr>
              <tr>
                  <h4 className={style.contact}>Questions? <span className={style.hi}>Say Hi</span></h4>
              </tr>
              
            </center>

            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                
        
         

         
        

        </div>
    )
}



export default Footer