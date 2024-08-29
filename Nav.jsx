import React from 'react'
import navStyles from './Nav.module.css';
import { screenSizeContext } from '../../App';
import { useContext } from 'react';
const Nav = (place) => {
  const screenSize = useContext(screenSizeContext);
 
  const placeIsHeader=place.place=="header";
  return (
    
    <nav className={screenSize?placeIsHeader?navStyles.mobNavHeader:navStyles.mobNavFooter:placeIsHeader?navStyles.navDesktopHeader: navStyles.navDesktop} >
        <ul >
            <li><a href="#">About</a></li>
            <li><a href="#"> Careers</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Prodducts</a></li>
            <li><a href="#">Support</a></li>
        </ul>
    </nav>
  )
}

export default Nav