import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import './navbar.css';

const Menu: React.FC = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#projects">Projects</a></p>
    <p><a href="#contact">Contact</a></p>
  </>
);

const Navbar: React.FC = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="portfolio__navbar">
      <div className="portfolio__navbar-links">
        <div className="portfolio__navbar-links_logo">
          ANDRES HERNANDEZ
        </div>
        <div className='portfolio__navbar-links_wide'>
          <Menu />
        </div>
      </div>

      <div className="portfolio__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu  && (
          <div className="portfolio__navbar-menu_container scale-up-center">
            <div className="portfolio__navbar-menu_container-links">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
