import React from 'react';
import { Project } from '../../components'
import {blog01, blog02, blog03} from "./imports"
import './blog.css';



const project: React.FC = () => {
  return (
      <div className="portfolio__project section__padding" id="projects">
        <div className="portfolio__project-heading">
          <h1 className="gradient__text">
            Projects.
          </h1>
      </div>
      <div className="portfolio__project-container">          
        <div className="portfolio__project-container_groupB">
          
          <a href='https://project01.andresfhm.net' target='blank' rel='noopener noreferrer'>
            <Project
              imgUrl={blog01}
              title="E-commerce application"
              description="Presenting an exquisite restaurant e-commerce application, born from 
              the inspiration of a meticulously crafted Figma project. Immerse yourself in the 
              culmination of my ingenuity, where dynamic functionality and seamless mobile responsiveness 
              seamlessly intertwine. Step into a realm where culinary delights meet cutting-edge technology, 
              all beautifully woven together in this captivating creation."
            />
            </a>  
          
          <a href='https://project02.andresfhm.net' target='blank' rel='noopener noreferrer'>
            <Project
              imgUrl={blog02}
              title="Online banking application"
              description="Unveil a captivating online banking experience that seamlessly merges 
              visionary design with technological finesse. Behold an interactive single-page 
              masterpiece, born from the innovation ignited by Figma's creative spark. Powered by 
              the dynamic synergy of Vite and React, this digital haven redefines online banking 
              through an enthralling visual display. Immerse yourself in a world where aesthetics 
              and functionality dance harmoniously, promising a banking journey like no other."
            />
          </a>

          <a href='https://project03.andresfhm.net' target='blank' rel='noopener noreferrer'>    
            <Project
              imgUrl={blog03}
              title="Video Sharing Platform"
              description="Introducing an electrifying YouTube-inspired platform that promises to 
              ignite your digital voyage like never before. Brace yourself for a tantalizing 
              adventure through a captivating landscape, where simplicity meets ingenuity. This 
              YouTube clone, fueled by the formidable YouTube-31 from RapidAPI, unveils a world of 
              endless possibilities. Get ready to unravel an experience that will leave you on the 
              edge of your seat, as you dive headfirst into a realm where entertainment and 
              innovation converge in glorious harmony. Don't miss the chance to witness the 
              future of online video unfold before your very eyes. Your wait is over – the revolution 
              begins now."
            />
          </a>  
          
          </div>
      </div>  
    </div>
  )
}

export default project