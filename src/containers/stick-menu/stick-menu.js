import React from 'react'
import MenuButtons from '../../componentes/menu-buttons/menu-buttons'
import HamburguerButton from '../../componentes/hamburger-button/hamburguer-button'
import './stick-menu.style.css'
import GraficaLogo from '../../imagens/grafica-mesquita-logo.png'

const StickMenu = () => {
    return (
        <div className="stickMenu">
            <img alt="grafica-mesquita-logo" src={ GraficaLogo }></img>
                <HamburguerButton />
            <div className="stickMenuButtons">
                <MenuButtons text="HOME" id="#"/>
                <MenuButtons text="SERVICOS" id="#"/>
                <MenuButtons text="NOSSA HISTORIA" id="#"/>
                <MenuButtons text="CLIENTES" id="#"/>
                <MenuButtons text="CONTATO" id="#"/>
            </div>
        </div>
    )
}

export default StickMenu