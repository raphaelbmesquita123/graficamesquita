import React from 'react'
import DisplayImage from '../../components/diplay-image/display-image'
import { PROMO_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './auto-image-container.style.css'




const AutoImageContainer = () => {
    function autoPlay () {
        let translateX = 100

        setInterval( () => {
            translateX += -100
            console.log(translateX)
        }, 1000)
        return translateX
    }

    return (
        <div className="autoImageContainer">
            <div className="autoPlayContainer" >
            {   
                PROMO_IMAGE_DATA.map(item => 
                <DisplayImage key={item.id} src={item.imageUrl} alt={item.alt} style={{ transform: `translateX(${0}%)`}}/> 
                )
            }
            </div>

        </div>
    )
}

export default AutoImageContainer
