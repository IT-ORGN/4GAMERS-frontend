import React from 'react'
import CardCss from './Css/Card.module.css'

import { useState,useEffect } from 'react'
import axios from 'axios'
function Categorie() {
  const [categorie,setCategorie]=useState([])

  
  useEffect(()=>{
     axios.get("http://localhost/Api/Categorie.php").then(res=>{
      setCategorie(res.data);
      
     })
  })
  return (
    <div className={CardCss.body}>
   
    <div className={CardCss.root}>
     {categorie.map((art,i)=>
     

      <div className={CardCss.box}>
        <div className={CardCss.img_box}>
          <img src={art.image}/>
        </div>
        <div className={CardCss.left}>
        <p>{art.description}</p>
         <h2>{art.nomcat}</h2>
         <button>Voir </button>
        </div>
      </div>
      )}

      </div>
    </div>
         
  )
}

export default Categorie
