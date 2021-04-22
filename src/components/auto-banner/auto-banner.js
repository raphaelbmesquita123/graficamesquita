import React, { useEffect, useState } from "react"
import { PROMO_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './auto-banner.style.css'


function AutoPlayBanner () {
    const [translateX, setTranslateX] = useState(0)

    useEffect(() => {
    const interval = setInterval(() => {
        setTranslateX(translate => translate - 100);
    }, 3500);
    
    return () => clearInterval(interval);
    }, []);

    if(translateX < -200){
        setTranslateX(0)
    }


    return(
        <div className="autoPlayBanner" >
            {   
                PROMO_IMAGE_DATA.map(item => 
                <img key={item.id} src={item.imageUrl} alt={item.alt} style={{ transform: `translateY(${translateX}%)`}}/> 
                )
            }
        </div>
    )
} 

export default AutoPlayBanner