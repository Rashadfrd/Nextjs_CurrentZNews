import React from 'react'
import Image from 'next/image'
import classes from './style.module.css'

function SingleNews({urlToImage,title}) {
  return (
    <div className={classes.cardWrapper}>
        <div className={classes.card}>
            <div className={classes.image}>
                <Image fill unoptimized src={urlToImage ? urlToImage : 'https://artsmidnorthcoast.com/wp-content/uploads/2014/05/no-image-available-icon-6.png'} alt='pic'/>
            </div>
            <div>
                <span>{title}</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptas dolorum, vitae sapiente ducimus quidem tempora? Eos fugiat qui nostrum dicta iusto in, praesentium modi voluptates nihil, perspiciatis ratione saepe!</p>
            </div>
            <div>
                <button>Read more</button>
            </div>    
        </div>
    </div>
  )
}

export default SingleNews
