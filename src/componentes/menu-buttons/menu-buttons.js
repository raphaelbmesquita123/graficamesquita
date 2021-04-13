import React from 'react'
import './menu-buttons.style.css'

const MenuButtons = ( {text, id } ) => {
    return(
        <div>
            <a className="menuButtons" href={ id }> { text } </a>
        </div>
    )
}

export default MenuButtons