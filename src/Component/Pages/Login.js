import React, { useState } from 'react'
import LoginCss from './Css/Login.module.css'
import axios from 'axios';
import {Link} from 'react-router-dom'
import imgLogin from './Css/imageLogin2.png'
function Login() {
  const[name,setName]=useState('');
  const[prenom,setPrenom]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[confpass,setconfpass]=useState('');

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
    else if(password.length===0){
      alert("password");
    }
    else if(password != confpass){
      alert("confirmation echec");
    }
    else{
      const url="http://localhost/Api/Clients.php";
      let fData=new FormData();
      fData.append('name',name);
      fData.append('prenom',prenom);
      fData.append('email',email);
      fData.append('password',password);

      axios.post(url,fData)
      .then(response=>alert(response));
       alert("enregistrer reussite")
    }
  }
  return (
    <div className={LoginCss.bg}>
    <img src={imgLogin} className={LoginCss.imgLogin}></img>
    
      <div className={LoginCss.signup_boxLogin}>
      <h1>Sign Up</h1>
      <h4>It's free and only takes a minute</h4>
      <form >
        <label>First Name</label>
        <input type="text" placeholder="" name='name' id='_name' value={name} onChange={(e)=> setName(e.target.value)} />
        <label>Last Name</label>
        <input type="text" placeholder="" name='prenom' id='_prenom' value={prenom} onChange={(e)=> setPrenom(e.target.value)}/>
        <label>Email</label>
        <input type="email" placeholder="" name='email' id='_email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" placeholder="" name='password' id='_passwordcl' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <label>Confirm Password</label>
        <input type="password" placeholder=""  name='confpass' value={confpass} onChange={(e)=> setconfpass(e.target.value)}/>
        <input type="button" name="send" value="Send" onClick={handleSubmit}/>
      <closeform></closeform></form>
     
      </div>

      <div className={LoginCss.login_boxLogin}>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="email" placeholder="" />
        <label>Password</label>
        <input type="password" placeholder="" />
        <Link to="/Admin"><input type="button" value="Submit" /></Link>
      <closeform></closeform></form>
    </div>
    
      </div>
  );
  
}

export default Login
