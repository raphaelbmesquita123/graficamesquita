import React from 'react'
import './display-image.style.css'


function DisplayImage ({ src, alt }) {
    return(
        <img className="diplayImage" src={ src } alt ={ alt }/>        
    )
}

export default DisplayImage