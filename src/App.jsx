import { useEffect, useState } from 'react'
import './App.css'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Skills from './Skills'

function App() {

  const[scroll,onScroll]=useState(false);
  
  useEffect(()=>{
    let ticking = false;
    
    const scrolled=()=>{
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
          console.log('🔥 Scroll detected! Position:', scrollPosition);
          
          if(scrollPosition > 50){
            onScroll(true);
          }
          else{
            onScroll(false);
          }
          ticking = false;
        });
        ticking = true;
      }
    }
    
    // Initial check
    scrolled();
    
    window.addEventListener('scroll', scrolled, { passive: true });
    
    return ()=>{
      window.removeEventListener('scroll', scrolled);
    }
  },[])
  
  const[index,setIndex]=useState(0);

  console.log('Current scroll state:', scroll);

  return (
    <div style={{minHeight:'100vh',width:'100%',display:'flex',flexDirection:'column'}}>
      <Header scroll={scroll} index={index} setIndex={setIndex} />


      <div style={{width:'100%',margin:'0 auto'}}>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <footer className="signature-footer">
        <div className="signature-card">
          <div className="signature-title">Thanks for visiting my portfolio</div>
          <div className="signature-text">Designed & Developed by Praveen with Love <span className="signature-heart">♥</span></div>
        </div>
      </footer>
      </div>
    </div>
  )
}

export default App
