import React, { useState ,useContext} from 'react'
import { images } from './importImages'
import { imagesMob } from './importMobImages';
import {v4 as uuidv4} from 'uuid'
import creationsStyles from './Creations.module.css';
import { screenSizeContext } from '../../App';

const SeeAllBtn =()=>{
  return(
    <button className={creationsStyles.seeAllBtn}>SEE ALL</button>
  )
}
const Creations = () => {
  const screenSize =useContext(screenSizeContext);
  const renderImg =(img)=>{
    {/**make images as background-image in all divs */}
    return(
      <div key={uuidv4()} style={{backgroundImage:`url(${img.src}) `,backgroundSize:"cover"}} className={screenSize?creationsStyles.imgDivMob:creationsStyles.imgDivDesktop}>
        {img.alt}
      </div>
    )
  }
  
  return (
    <section className={screenSize?creationsStyles.flex:creationsStyles.section}>
      <header className={creationsStyles.header}>
        <h2 className={screenSize&&creationsStyles.h2}>
          OUR CREATIONS
        </h2>
        {!screenSize&&<SeeAllBtn></SeeAllBtn>}
      </header>
      <div className={screenSize?creationsStyles.flex:creationsStyles.grid}>
        {screenSize?imagesMob.map(renderImg):images.map(renderImg)}
      </div>
      {screenSize&&<SeeAllBtn></SeeAllBtn>}
    </section>
  )
}

export default Creations