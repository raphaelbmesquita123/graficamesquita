import React, { useState } from 'react'
import './image-box.style.css'

function ImageBox ({ url, alt, item, size, print, paper, quantity, productionTime }) {

    const [showDisplay, setDisplay] = useState(false)
    let imageBoxDisplay

    if(showDisplay){
        imageBoxDisplay =
            <div className="imageBoxDisplay" onClick={() => setDisplay(!showDisplay)}>            
                <div className="boxDisplayContent" >
                    <div>
                        <img alt={ alt } src={url}></img>
                    </div>
                    <div>
                        <h3>{ item }</h3>
                        <small>Tamanho: { size }</small>
                        <small>Impressao: { print }</small>
                        <small>Papel: { paper }</small>
                        <small>Quantidade: { quantity }</small>
                        <small>Tempo de producao: { productionTime }</small>
                    </div>
                </div>
            </div>
    }

    return (
        <div className="imageBox">
            <img alt={ alt } src={url} className="mainImage" onClick={() => setDisplay(!showDisplay)}></img>
            {
                imageBoxDisplay
            }
            
        </div>
    )
}

export default ImageBox