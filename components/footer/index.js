import React from 'react'
import classes from './style.module.css'

function Footer() {
  const date = new Date;
  const currentDate = date.getFullYear()
  return (
    <footer className={classes.footer}>
      Copyright © {currentDate} <a href="https://github.com/Rashadfrd" style={{color:'blue'}} target='_blank'>Farhadzada Rashad</a> All Rights Reserved
    </footer>
  )
}

export default Footer
