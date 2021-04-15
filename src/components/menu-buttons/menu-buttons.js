import React from 'react'
import './menu-buttons.style.css'

const MenuButtons = ( {text, id, color } ) => {
    return(
        <div>
            <a className="menuButtons" style={{ color: color }} href={ id }> { text } </a>
        </div>
    )
}

export default MenuButtons