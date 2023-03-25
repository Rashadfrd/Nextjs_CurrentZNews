'use client'
import React from 'react'
import Navlink from './navlink'
import classes from './style.module.css'
import { usePathname } from 'next/navigation';

const tempCategories = [
    {
        id:1,
        name:'Politics'
    },
    {
        id:2,
        name:'Opinions'
    },
    {
        id:3,
        name:'Climate'
    },
    {
        id:4,
        name:'Investigations'
    },
    {
        id:5,
        name:'Tech'
    },
    {
        id:6,
        name:'Business'
    },
    {
        id:7,
        name:'Sports'
    },
]

function Navlinks() {
    const pathname = usePathname();

    const isActive = (item)=>{
        return pathname?.split('/').pop() === item
    }
  return (
    <nav className={classes.nav}>
        {tempCategories.map((category)=>{
         return <Navlink key={category.id} isActive={isActive(category.name)} category={category.name} />
        })}
    </nav>
  )
}

export default Navlinks
