import React from 'react'
import {AiOutlineMenu} from 'react-icons/ai'
import {BsBell} from 'react-icons/bs'
import classes from './style.module.css'
import Link from 'next/link'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logoAndActions}>
        <button type='button' className={classes.menu}><AiOutlineMenu size={25} color={'white'} /></button>
        <button type='button' className={classes.bell}><BsBell size={25} color={'white'} /></button>
      </div>
        <div>
          <Link href='/'><h1 className={classes.logo}>The <span className={classes.singleLogo}>CURRENTZ</span> News</h1></Link>
        </div>
      <div className={classes.buttons}>
          <button className={classes.subscribe}>Subscribe</button>
          <button className={classes.signIn}>Sign In</button>
      </div>
    </header>
  )
}

export default Header
