import React, { useState } from 'react'
import { PROMO_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './auto-image-container.style.css'




const AutoImageContainer = () => {
    const [translateX, setTranslateX] = useState(0)

    setInterval(() =>{
        setTranslateX(translateX - 100)
    },5000)

    if(translateX < -200){
        setTranslateX(0)
    }
    
    return (
        <div className="autoImageContainer">
            <div className="autoPlayContainer" >
            {   
                PROMO_IMAGE_DATA.map(item => 
                <img key={item.id} src={item.imageUrl} alt={item.alt} style={{ transform: `translateX(${translateX}%)`}}/> 
                )
            }
            </div>

        </div>
    )
}

export default AutoImageContainer
