import React from 'react'
import './hero.css'
import ava from "./assets/iva.png"
import emailjs from '@emailjs/browser'
export default function Hero() {
  const handleEmailClick = async (e) => {
    const sid = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const tid = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const pk = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    if (!sid || !tid || !pk) {
      return
    }
    e.preventDefault()
    try {
      await emailjs.send(sid, tid, { message: 'Portfolio contact' }, { publicKey: pk })
    } catch {
      window.location.href = 'mailto:ipraveen982005@gmail.com'
    }
  }
  return (
    <section className="hero" id="home">
      <div className="hero-content">

        {/* LANYARD */}
        <div className="lanyard-wrapper">
          <div className="lanyard-strap"></div>
          <div className="lanyard-clip">
            <div className="lanyard-clip-inner"></div>
          </div>

          <div className="lanyard-card">
            {/* IMAGE PLACEHOLDER */}
            <div className="lanyard-image-placeholder">
              <img style={{width:'90%',height:'90%',borderRadius:'20px'}} src={ava} alt="Praveen Karuppusamy" />
            </div>

            <div className="lanyard-text">
              <span className="lanyard-role">CROSS-PLATFORM</span>
              <h3>FULL-STACK<br />DEVELOPER</h3>
            </div>
          </div>
        </div>
        <p className="hero-subtitle">Hello, I’m Praveen Karuppusamy</p>
        <p className="hero-title">PRAVEEN KARUPPUSAMY</p>

        <div className='social_div'>
          <div className='social_icons'>
          <button className='buttonsocial' onClick={()=>window.open('https://github.com/praveenkaruppusamy2005')}><img className="social-icon" src={'https://images.icon-icons.com/1673/PNG/512/githuboutline_110889.png'} alt="GitHub"></img></button>
          <button className='buttonsocial' onClick={()=>window.open('https://www.linkedin.com/in/praveen-karuppusamy/')}><img className="social-icon" src={'https://images.icon-icons.com/791/PNG/512/LINKEDIN_icon-icons.com_65488.png'} alt="LinkedIn"></img></button>
          <a className='buttonsocial' href="mailto:ipraveen982005@gmail.com" onClick={handleEmailClick}>
            <img className="social-icon" src="https://images.icon-icons.com/1769/PNG/512/4092561-email-envelope-mail-message-mobile-ui-ui-website_114031.png" alt="Email" />
          </a>
          <button className='buttonsocial' onClick={()=>window.open('https://www.instagram.com/iprvn1/')}><img className="social-icon" src={'https://images.icon-icons.com/726/PNG/512/instagram_f_icon-icons.com_62685.png'} alt="Instagram"></img></button>
        </div>
        </div>
      </div>
    </section>
  )
}
