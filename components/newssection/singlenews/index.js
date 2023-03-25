import React from 'react'
import Image from 'next/image'
import classes from './style.module.css'

function SingleNews({urlToImage,title,description}) {
  return (
    <div className={classes.cardWrapper}>
        <div className={classes.card}>
            <div className={classes.image}>
                <Image fill unoptimized src={urlToImage ? urlToImage : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'} alt='pic'/>
            </div>
            <div className={classes.titleAndContent}>
                <span style={{fontWeight:'bold'}}>{title}</span>
                <p>{description ? description.substring(0, 100) + ' ...' : description}</p>
            </div>
            <div>
                <button className={classes.button}>Read more</button>
            </div>    
        </div>
    </div>
  )
}

export default SingleNews
