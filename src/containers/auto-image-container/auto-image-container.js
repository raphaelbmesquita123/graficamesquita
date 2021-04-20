import React, { useState, useEffect } from 'react'
import { PROMO_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './auto-image-container.style.css'


const AutoImageContainer = () => {
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

    return (
        <div className="autoImageContainer"> 
            <div className="topAutoImage"> 
                <div>
                    <h2>Gráfica e Editora Mesquita</h2>
                    <span>QUALIDADE, CONFIANÇA E INOVAÇÃO</span>
                    <small>sempre buscando o que há de mais novo no mercado para lhe atender</small>
                </div>
            </div>       
            <div className="autoPlayContainer" >
            {   
                PROMO_IMAGE_DATA.map(item => 
                <img key={item.id} src={item.imageUrl} alt={item.alt} style={{ transform: `translateY(${translateX}%)`}}/> 
                )
            }
            </div>

        </div>
    )
}

export default AutoImageContainer

