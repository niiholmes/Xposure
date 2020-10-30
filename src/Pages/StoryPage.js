import React from 'react';
import style from '../module.css/StoryPage.module.css'



const StoryPage = ({match}) => {

    const id = match.params.id

    return(
        <div>
            <h1 className={style.storyPage}>This is a {id} page</h1>

        </div>
    )
}



export default StoryPage