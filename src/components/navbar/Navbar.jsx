import React, { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
 
  const switchTheme = (e) =>{
    if(e.target.checked) {
      document.querySelector('body').setAttribute('data-theme', 'dark')
    }
    else{
      document.querySelector('body').setAttribute('data-theme', 'light')
    }
  }

  return (
    <>
      <nav>

        <h1 className='logo'>
           <a href="/">MyFolio</a>
        </h1>

        <div>
          <ul id='navbar' className={clicked ? 'active' : ''}>
            <li className='menu-item'><Link to="/about">About</Link></li>
            <li className='menu-item'><Link to="/resume">Resume</Link></li>
            <li className='menu-item'><Link to="/projects" >Projects</Link></li>
            <li className='menu-item'><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

      <div className='mobile_toggle'>
         {/* toggle switch */}
         <input type="checkbox" id="checkbox" onChange={switchTheme} />

         <div id="mobile" onClick={handleClick}>
            <i
            id='bars'
            className={clicked ? 'ri-close-fill' : 'ri-menu-3-fill'}
            onClick={() => setClicked(!clicked)}
            >
            </i>
        </div>
      </div>  

      </nav> 
    </>
  )
}

export default Navbar
