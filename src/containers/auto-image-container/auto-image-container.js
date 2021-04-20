import React from 'react'
import { PROMO_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './auto-image-container.style.css'




const AutoImageContainer = () => {
    
    return (
        <div className="autoImageContainer">
            <div className="autoPlayContainer" >
            {   
                PROMO_IMAGE_DATA.map(item => 
                <img key={item.id} src={item.imageUrl} alt={item.alt} style={{ transform: `translateX(${0}%)`}}/> 
                )
            }
            </div>

        </div>
    )
}

export default AutoImageContainer
