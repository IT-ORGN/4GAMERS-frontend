import React from 'react'
import SiteCss from './Site.module.css';
import {Link} from 'react-router-dom'
function Footer() {
  return (
    <div>
         <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"></link>
        <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
      <section className={SiteCss.footer}>

<div className={SiteCss.box_container}>

    <div className={SiteCss.box}>
        <h3> 4GAMERS <i className='fas fa-gamepad'></i> </h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam, saepe.</p>
        <div className={SiteCss.share}>
            <a href="*" className='fab fa-facebook-f'></a>
            <a href="#" className='fab fa-twitter'></a>
            <a href="#" className='fab fa-instagram'></a>
            <a href="#" className='fab fa-linkedin'></a>
        </div>
    </div>

    <div className={SiteCss.box}>
        <h3>contact info</h3>
        <a href="*" className={SiteCss.links}> <i class='fas fa-phone'></i> +216 21 522 609</a>
        <a href="*" className={SiteCss.links}> <i class='fas fa-phone'></i> +216 28 088 369 </a>
        <a href="*" className={SiteCss.links}> <i class='fas fa-envelope'></i> achref.dhifaoui00@gmail.com </a>
        <a href="*" className={SiteCss.links}> <i class='fas fa-map-marker-alt'></i> iset sfax</a>
    </div>

    <div className={SiteCss.box}>
        <h3>quick links</h3>
            <Link  to="/app" className={SiteCss.links}><i className='fas fa-arrow-right'></i> home </Link>
            <Link  to="/products" className={SiteCss.links}><i className='fas fa-arrow-right'></i> products </Link>
            <Link  to="/categorie" className={SiteCss.links}> <i className='fas fa-arrow-right'></i> categories </Link>
            <Link  to="/contactUs" className={SiteCss.links}><i className='fas fa-arrow-right'></i> Contact Us </Link>
            <Link  to="/help" className={SiteCss.links}><i className='fas fa-arrow-right'></i> help </Link>
    </div>

    <div className={SiteCss.box}>
        <h3>newsletter</h3>
        <p>subscribe for latest updates</p>
        <input type="email" placeholder="your email" className={SiteCss.email}/>
        <input type="submit" value="subscribe" className={SiteCss.btn}/>
        <img src="image/payment.png" clasNames={SiteCss.payment_img} alt=""/>
    </div>

</div>

<div className={SiteCss.credit}> created by <span> AHMED && ACHREF</span> | all rights reserved </div>

</section>
    </div>
  )
}

export default Footer
