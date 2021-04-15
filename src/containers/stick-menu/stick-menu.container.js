import React from 'react'
import HamburguerButton from '../../components/hamburger-button/hamburguer-button'
import './stick-menu.style.css'
import MenuButtons from '../../components/menu-buttons/menu-buttons'
import GraficaLogo from '../../imagens/grafica-mesquita-logo.png'

const StickMenu = () => {
    
    return (
        <div className="stickMenu">
            <img alt="grafica-mesquita-logo" src={ GraficaLogo }></img>
            <HamburguerButton/>            
            <div className="stickMenuItens">
                <MenuButtons color="black" text="HOME" id="#" />
                <MenuButtons color="black" text="SERVICOS" id="#jobs" />
                <MenuButtons color="black" text="NOSSA HISTORIA" id="#"/>
                <MenuButtons color="black" text="CLIENTES" id="#"/>
                <MenuButtons color="black" text="CONTATO" id="#contactForm"/>
            </div>
        </div>
    )
}

export default StickMenu