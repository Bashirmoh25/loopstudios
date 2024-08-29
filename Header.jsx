import React, { useState } from 'react'
import styles from './Header.module.css';
import Nav from '../nav/Nav.jsx';
import logo from '../../assets/images/logo.svg';
import hamburgerIcon from "../../assets/images/icon-hamburger.svg";
import NavMob from '../nav/NacMob/NavMob.jsx';
import { useContext } from 'react';
import { screenSizeContext } from '../../App.jsx';

const Header = () => {
    const screenSize =useContext(screenSizeContext);
    {/**use place variale to style Nav component according to the place where it used */}
    let place="header"
    const [menuState,setMenuState]= useState(true);
    let handleMenu=()=>{
        setMenuState(!menuState);
        console.log(menuState);
    }
       
  return (
    <header className={screenSize?styles.headerMob:styles.header}>
            <div className={styles.navUl}>
             <img src={logo} alt="loopstudios logo" />
                {
                    screenSize?menuState?<img src={hamburgerIcon} onClick={handleMenu} alt='hamburgerIcon'/>:<NavMob props={handleMenu}/>:<Nav place={place}/>
                }
            </div>

        <div >
            
               <p className={screenSize?styles.impressiveMob: styles.impressive}> impressive experiences that deliver</p>
            
        </div>
    </header>
  )
}

export default Header