import React from 'react'
import mainStyles from './Main.module.css';
import interactive from '../../assets/images/desktop/image-interactive.jpg';
import interactiveMob from '../../assets/images/mobile/image-interactive.jpg';
import { screenSizeContext } from '../../App';
import { useContext } from 'react';
const Main = () => {
  const screenSize= useContext(screenSizeContext); 
  return (

    <main className={screenSize?mainStyles.mainMob:mainStyles.main}>
        <div className={screenSize?mainStyles.interactiveImgDivMob: mainStyles.interactiveImgDiv}>
        {screenSize&&<img src={screenSize?interactiveMob:interactive} alt="interactive" />}
        </div>
        <div className={
          screenSize?
                      mainStyles.mainTextMob :mainStyles.mainTextDesktop
        }>
            <h1 className={mainStyles.headingMob}>
                The leader in interactive VR
            </h1>
            <p className={screenSize?mainStyles.paraMob:null}> 
                Founded in 2011, Loopstudios has been producing world-class virtual reality 
                projects for some of the best companies around the globe. Our award-winning 
                creations have transformed businesses through digital experiences that bind 
                to their brand.
            </p>
        </div>
    </main>
  )
}

export default Main