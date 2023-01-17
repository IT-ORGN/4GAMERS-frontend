import React from 'react'
import CardCss from './Css/Card.module.css'
//import '../Site.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
function Products() {
  const [Products,setProducts]=useState([])

  
  useEffect(()=>{
     axios.get("http://localhost/Api/Produits.php").then(res=>{
      setProducts(res.data);
      
     })
  })
  return (
    
        
    <div className={CardCss.body}>
   
    <div className={CardCss.root}>
     {Products.map((art,i)=>
     

      <div className={CardCss.box}>
        <div className={CardCss.img_box}>
          <img src={art.image}/>
        </div>
        <div className={CardCss.left}>
        <p>{art.description}</p>
         <h2>{art.nom}</h2>
         <h2>{art.prix}</h2>
         <button>Acheter</button>
        </div>
      </div>
      )}

      </div>
    </div>
         

    
  )
}

export default Products
