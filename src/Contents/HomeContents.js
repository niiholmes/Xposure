import React from 'react';
import style from '../module.css/HomeContents.module.css';
import image1 from './media/ip12.jpg'
import image2 from './media/paris.png'
import image3 from './media/livingcity.jpg'



const HomeContents= () => {

    return(

        <div>

            <h1 className={style.stories}>Stories</h1>
            <div className={style.lcontainer1}>
            <img src={image1} alt='iphone12' className={style.iphone12}/>
            <br></br>
            <figcaption className={style.caption}>
                Apple unveils the much awaited iphone 12 range of phones, at Spaceship<br></br>
                <span className={style.readMore}>Read more</span></figcaption>
            </div>


                <div className={style.lcontainer2}>
                    <div>
                <img src={image2} alt='paris jackson' className={style.paris}/>
                <figcaption className={style.caption2}>
                    Paris Jackson signs new photography deal with Eugene<br></br>
                    <span className={style.readMore}>Read more</span>
                </figcaption>
                </div>

                <div>

                <img src={image3} alt='paris jackson' className={style.livingCity}/>
                <figcaption className={style.caption3}>
                    Ghana is set to become a developed city in 2020<br></br>
                    <span className={style.readMore}>Read more</span>
                </figcaption>

                </div>
                </div>
    

        </div>
         

         
        

    )
}



export default HomeContents