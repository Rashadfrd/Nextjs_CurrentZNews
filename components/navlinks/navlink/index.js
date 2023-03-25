import Link from 'next/link'
import React from 'react'
import classes from './style.module.css'

function Navlink({category, isActive}) {
  return (
    <Link className={isActive ?`${classes.active} ${classes.navLink}` : `${classes.navLink}`} href={`/news/${category}`}>{category}</Link>
  )
}

export default Navlink
