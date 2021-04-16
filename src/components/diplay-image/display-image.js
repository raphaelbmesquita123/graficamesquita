import React, { useState }from 'react'
import './display-image.style.css'
import IMAGE_DATA from './display-image-data/diplay-image-data'

function DisplayImage () {

    const [nextPhoto, setNextPhoto] = useState(0)
    const goLeftPhoto = () => setNextPhoto(nextPhoto + 100)
    const goRightPhoto = () => setNextPhoto(nextPhoto - 100)


    return(
        <div className="displayImage">
            <div className="imageData" style={{ transform: `translateX(${nextPhoto}%)` }}>
                <img src={IMAGE_DATA[2].imageUrl} alt="nada" />  
                <img src={IMAGE_DATA[2].imageUrl} alt="nada" />    
                <img src={IMAGE_DATA[2].imageUrl} alt="nada" />    
            </div>
            
            <div className="imageText">
                <div>
                    <h3>{IMAGE_DATA[0].year}</h3>
                    <small>{IMAGE_DATA[0].text}</small>
                </div>    
                  
            </div>
                <i className="fas fa-chevron-left" onClick={ goLeftPhoto }/>
                <i className="fas fa-chevron-right" onClick={ goRightPhoto }/>
        </div>
        
    )
}

export default DisplayImage