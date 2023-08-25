import React from 'react';
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNpm,
  DiReact, 
  DiPython,
  DiTerminal,
  DiTrello,
  DiNodejsSmall,
  DiMysql,
  DiAndroid,
  DiGithubBadge,
  DiSass,
  DiJava

} from 'react-icons/di';

import './techstack.css';

const TeckStack: React.FC = () => {
  return (
    <div className="portfolio__techstack section__padding">
      <h1 className='gradient__text'>Tech Stack</h1>

      <div className='portfolio__techstack-list'>
        <a href='https://www.w3schools.com/html' style={{ color: '#0066CC'}}>
          <DiHtml5 />
        </a>
        <a href='https://www.w3schools.com/css/default.asp' style={{ color: '#FF3366' }}>
          <DiCss3 />
        </a>
        <a href='https://www.w3schools.com/sass/' style={{ color: 'blueviolet' }}>
        <DiSass />
        </a>
        <a href='https://www.w3schools.com/js/' style={{ color: 'gold' }}>
        <DiJsBadge />
        </a>
        <a href='https://reactjs.org/tutorial/tutorial.html' style={{ color: '#0066CC' }}>
        <DiReact />
        </a>
        <a href='https://docs.python.org/3/tutorial/' style={{ color: 'orange'}}>
        <DiPython />
        </a>
        <a href='https://docs.github.com/en/get-started/quickstart/hello-world' style={{ color: '#333366'}}>
        <DiGithubBadge />
        </a>
        <a href='https://www.mysqltutorial.org/' style={{ color: '#0066CC'}}>
        <DiMysql />
        </a>
        <a href='https://www.w3schools.com/nodejs/default.asp' style={{ color: 'green' }}>
        <DiNodejsSmall />
        </a>
        <a href='https://docs.npmjs.com/about-npm' style={{ color: 'red' }}>
        <DiNpm />
        </a>
        <a href='https://learn.microsoft.com/en-us/windows/terminal/' style={{ color: '#333366'}}>
        <DiTerminal />
        </a>
        <a href='https://trello.com/en/guide' style={{ color: '#0066CC'}}>
        <DiTrello />
        </a>
        <a href='https://developer.android.com/courses?gclid=Cj0KCQiAlKmeBhCkARIsAHy7WVvyKWgktMN7yiJsKulxj3a7Z8oFd0c4MaoqzrM41Zw_yq83lHN4DWcaAtMbEALw_wcB&gclsrc=aw.ds' style={{ color: 'green'}}>
        <DiAndroid />
        </a>
        
        <a href='https://www.w3schools.com/java/' style={{ color: 'purple' }}>
        <DiJava />
        </a>                      
      </div>          
    </div>
  )
}

export default TeckStack