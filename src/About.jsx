import React from 'react'
import './about.css'
import { Fade } from 'react-awesome-reveal'

export default function About()
{
    return(
        <div className='about' id="about">
            <Fade direction="up" cascade damping={0.1}>
                <p className='about-desc'>I’m a software developer with a strong focus on building performant, real-world applications across mobile, web, and desktop platforms.</p>
                <p className='about-des'>Computer Science undergraduate at Sri Krishna College of Engineering and Technology (SKCET), Coimbatore.</p>
            </Fade>
        </div>
    )
}