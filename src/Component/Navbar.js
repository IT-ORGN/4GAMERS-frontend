import React from 'react'
import SiteCss from  './Site.module.css';
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <html>
    <head>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
 <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    </link>        <script src="https://kit.fontawesome.com/1ee23388a8.js" crossorigin="anonymous"></script>
    </head>
    <body>
    <div>
       
<header className={SiteCss.header}>


<Link to="/app" className={SiteCss.logo}><i className='fas fa-gamepad'></i> 4GAMERS </Link>


<nav className={SiteCss.navbar}>
    <Link  to="/">Acceuil</Link>
    <Link  to="/products">Products</Link>
    <Link  to="/categorie">Categories</Link>
    <Link  to="/contactUs">Contact US</Link>
    <Link  to="/help">help</Link>
</nav>

<div className={SiteCss.icons}>
    
    <Link to="/login_form"><div className='fas fa-user' id="login-btn"></div></Link>
</div>








</header>
</div>
</body>
</html>
  )
}

export default Navbar
