import React from 'react'
import ContactCss from './Css/Contactus.module.css'
import costumor from './Css/costumor2.png'
import { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const[name,setName]=useState('');
  const[prenom,setPrenom]=useState('');
  const[email,setEmail]=useState('');
  const[numero,setNumero]=useState('');
  const[message,setMessage]=useState('');

  const handleSubmit=()=>{
    if(name.length===0){
      alert("inserer votre nom");
    }
    else if(prenom.length===0){
      alert("inser votre prenom");
    }
    else if(email.length===0){
      alert("insere votre email");
    }
    else if(numero.length===0){
      alert("password");
    }
    else if(message.length===0){
      alert("message vide");
    }
    else{
      const url="http://localhost/Api/Messages.php";
      let fData=new FormData();
      fData.append('name',name);
      fData.append('prenom',prenom);
      fData.append('email',email);
      fData.append('numero',numero);
      fData.append('message',message);

      axios.post(url,fData)
      .then(response=>alert(response));
       alert("message envoyer")
    }
  }
  return (
    <html>
    <head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </link>        <script src="https://kit.fontawesome.com/1ee23388a8.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
    </head>
    <body className={ContactCss.bodyContact}>
      <div className={ContactCss.logoContact}>
        <img src={costumor} alt='logo' className={ContactCss.imglogoContact}/>
      </div>
    <div className={ContactCss.wrapperContact}>
    <header>Send us a Message</header>
    <form action="#">
      <div className={ContactCss.dbl_fieldContact}>
        <div className={ContactCss.fieldContact}>
          <input type="text" value={name} placeholder="Enter your name" onChange={(e)=> setName(e.target.value)}/>
          <i class='fas fa-user'></i>
        </div>
        <div className={ContactCss.fieldContact}>
        <input type="text" value={prenom} placeholder="Enter your familyName" className={ContactCss.input1} onChange={(e)=> setPrenom(e.target.value)}/>
          <i class='fas fa-globe'></i>
          
        </div>
      </div>
      <div className={ContactCss.dbl_fieldContact}>
        <div className={ContactCss.fieldContact}>
          <input type="text" value={numero}  placeholder="Enter your phone" onChange={(e)=> setNumero(e.target.value)}/>
          <i class='fas fa-phone-alt'></i>
        </div>
        <div className={ContactCss.fieldContact}>
        <input type="text" value={email} placeholder="Enter your email" className={ContactCss.input1} onChange={(e)=> setEmail(e.target.value)}/>
          <i class='fas fa-envelope'></i>
          
        </div>
      </div>
      <div className={ContactCss.messageContact}>
        <textarea placeholder="Write your message" value={message} onChange={(e)=> setMessage(e.target.value)}></textarea>
        <i class="material-icons">message</i>
      </div>
      <div className={ContactCss.button_areaContact}>
        <button type="submit" onClick={handleSubmit}>Send Message</button>
        <span></span>
      </div>
    </form>
  </div>
  </body>
  </html>
  )
}

export default ContactUs
