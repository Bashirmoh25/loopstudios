import React from 'react'
import logo from '../../assets/images/logo.svg';
import facebook from '../../assets/images/icon-facebook.svg';
import instagram from '../../assets/images/icon-instagram.svg';
import pinterest from '../../assets/images/icon-pinterest.svg';
import twitter from '../../assets/images/icon-twitter.svg';
import Nav from '../nav/Nav';
import styles from './Footer.module.css';
import { screenSizeContext } from '../../App';
import { useContext } from 'react';

const Footer = () => {
    const screenSize= useContext(screenSizeContext);
    let place="footer";
  return (
    <footer className={screenSize? styles.footer:styles.footerGrid}>
        <div className={styles.flexItemsCol}>
            <img src={logo} alt="logo of loopstudios" className={styles.logo}/>
            <Nav place={place} className=''></Nav>
        </div>
        <div className={styles.flexItemsCol}>
        <div aria-description='social media links'>
                <ul className={styles.socialLinks}>
                    <li>
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={pinterest} alt="pinterest" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </li>
                </ul>
            </div>
               
                <p >
                &copy;2021 Loopstudios. All rights reserved.
                </p>
            </div>

    </footer>
  )
}

export default Footer