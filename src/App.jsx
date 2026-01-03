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
    const scrolled=()=>{
      if(window.scrollY>10){
        onScroll(true);
      }
      else{
        onScroll(false);
      }
    }
    window.addEventListener('scroll',scrolled);
    return ()=>{
      window.removeEventListener('scroll',scrolled);
    }
  },[])
  const[index,setIndex]=useState(0);

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
