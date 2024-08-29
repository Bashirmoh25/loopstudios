import { createContext, useState } from 'react'

import './App.css'
import Header from './components/header/Header.jsx'
import Creations from './components/creations/Creations'
import Footer from './components/footer/Footer.jsx'
import Main from './components/main/Main.jsx'
import { useMediaPredicate } from 'react-media-hook';
export  const screenSizeContext =createContext(null);
function App() {
  const lessThan540  = useMediaPredicate('(max-width:540px)');
  return (
    <>
      <screenSizeContext.Provider value={lessThan540}>
        <Header></Header>
        <Main></Main>
        <Creations></Creations>
        <Footer></Footer>
      </screenSizeContext.Provider>
    </>
  )
}

export default App
