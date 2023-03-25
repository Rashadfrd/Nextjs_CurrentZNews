import React from 'react'
import classes from './style.module.css'
import { tempNews } from '@/mocks/articles'
import SingleNews from './singlenews'

function NewsSection() {
  return (
    <section className={classes.newsSection}>
        <div className={classes.container}>
        {tempNews.map((news)=>{
            return <SingleNews key={news.source.id} {...news} />
        })}
        </div>
    </section>
  )
}

export default NewsSection
