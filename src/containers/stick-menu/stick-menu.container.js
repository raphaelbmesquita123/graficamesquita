import React from 'react'
import HamburguerButton from '../../components/hamburger-button/hamburguer-button'
import MenuButtons from '../../components/menu-buttons/menu-buttons'
import GraficaLogo from '../../image-data/imagens/grafica-mesquita-logo.png'

import './stick-menu.style.css'

const StickyMenu = () => {
  return (
    <div className='stickMenu'>
      <img alt='grafica-mesquita-logo' src={GraficaLogo}></img>
      <HamburguerButton />
      <div className='stickMenuItens'>
        <MenuButtons color='black' text='HOME' id='#' />
        <MenuButtons color='black' text='SERVICOS' id='#jobs' />
        <MenuButtons color='black' text='NOSSA HISTORIA' id='#ourHistory' />
        <MenuButtons color='black' text='CLIENTES' id='#clients' />
        <MenuButtons color='black' text='CONTATO' id='#contactForm' />
      </div>
    </div>
  )
}

export default StickyMenu
