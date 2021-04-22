import React, { useState } from 'react'
import MenuButtons from '../menu-buttons/menu-buttons'
import './hamburguer-button.style.css'


function HamburguerButton() {

    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)
          

    return(
        <div className="oi">
            <div className="burguerClose" onClick={ showSidebar }>
                <span></span>
                <span></span>
                <span></span>
            </div> 
            <div>
                <div className={sidebar ? 'hamburguerMenuVisble' : 'hamburguerMenu'}>
                <div className="burguerOpen" onClick={ showSidebar }>
                    <span></span>
                    <span></span>
                </div>
                    <div onClick={ showSidebar }> 
                        <MenuButtons text="HOME" id="#" />
                    </div> 
                    <div onClick={ showSidebar }> 
                        <MenuButtons text="SERVICOS" id="#jobs" />
                    </div> 
                    <div onClick={ showSidebar }> 
                        <MenuButtons text="NOSSA HISTORIA" id="#ourHistory"/>
                    </div> 
                    <div onClick={ showSidebar }> 
                        <MenuButtons text="CLIENTES" id="#clients"/>
                    </div> 
                    <div onClick={ showSidebar }> 
                        <MenuButtons text="CONTATO" id="#contactForm"/>
                    </div> 
                </div>
            </div>
        </div>
        
    )
}
   

export default HamburguerButton

