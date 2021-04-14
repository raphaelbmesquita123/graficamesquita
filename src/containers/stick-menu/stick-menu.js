import React from 'react'
import HamburguerButton from '../../componentes/hamburger-button/hamburguer-button'
import './stick-menu.style.css'
import GraficaLogo from '../../imagens/grafica-mesquita-logo.png'

const StickMenu = () => {
    
    return (
        <div className="stickMenu">
           <HamburguerButton />            
            <img alt="grafica-mesquita-logo" src={ GraficaLogo }></img>
        </div>
    )
}

export default StickMenu