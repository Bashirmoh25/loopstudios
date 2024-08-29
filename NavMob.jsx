import React from 'react'
import close from '../../../assets/images/icon-close.svg';
import NavMobStyle from './NavMob.module.css';
import logo from '../../../assets/images/logo.svg';
import Nav from '../Nav';
const NavMob = ({props,menuState}) => {
  let place= "header";
  return (
    <div  className={
        menuState?NavMobStyle.none:NavMobStyle.block
    }>
        <header>
            <img src={logo} alt="logo"  />
            <img src={close} alt="close" onClick={props}/>
        </header>
        <Nav place={place} />
    </div>

  )
}

export default NavMob