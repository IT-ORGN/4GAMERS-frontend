import React from 'react'
import { Link } from 'react-router-dom'
import HomeCss from './Css/Home.module.css'
import fortnite from './Css/anime.png'

function Home() {
  return (
    <div className={HomeCss.gamerinterface}>
    
<h1 className={HomeCss.h1gamers}>WELCOME TO GAMERS WORLD </h1>
<h2 className={HomeCss.h2gamers}>EVERY THING YOU NEED IS HERE</h2>
<Link to='/products' className={HomeCss.linkgamers}><input type='button' value="GET STARTED " className={HomeCss.buttongamers}></input></Link>
      <img src={fortnite} className={HomeCss.img}/>
    </div>
  )
}

export default Home
