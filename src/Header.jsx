import React from 'react'
import './header.css'

function Header({scroll,index,setIndex}) {
  const scrollToSection = (id, idx) => {
    setIndex(idx);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`header ${scroll ? 'header-scrolled' : ''}`}>
      <div className='header-content'>
      <button className='buttons' style={{backgroundColor:index===0?'#9ef01a':'transparent'}} onClick={()=>scrollToSection('home', 0)}>HOME</button>
      <button className='buttons' style={{backgroundColor:index===1?'#9ef01a':'transparent'}} onClick={()=>scrollToSection('about', 1)}>ABOUT ME</button>
      <button className='buttons' style={{backgroundColor:index===2?'#9ef01a':'transparent'}} onClick={()=>scrollToSection('skills', 2)}>SKILLS</button> 
      <button className='buttons' style={{backgroundColor:index===3?'#9ef01a':'transparent'}} onClick={()=>scrollToSection('projects', 3)}>PROJECTS</button>
      <button className='buttons' style={{backgroundColor:'#9ef01a'}} onClick={()=>{window.open('https://drive.google.com/file/d/1iQDdHhhfRrtLukKiZU7DHvVrZVhYEaLE/view?usp=sharing')}}>RESUME</button> 
      </div>
      </div>
  
  )
}

export default Header
