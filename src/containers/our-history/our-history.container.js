import React, { useState } from 'react'
import DisplayImage from '../../components/diplay-image/display-image'
import IMAGE_DATA from '../../data/image-data/diplay-image-data'
import './our-history.style.css'


function OurHistory () {
    const [nextPhoto, setNextPhoto] = useState(0)
    const goLeftPhoto = () => setNextPhoto(nextPhoto + 100)
    const goRightPhoto = () => setNextPhoto(nextPhoto - 100)

    return(
        <div className="ourHistory" id="ourHistory">
            <div className="skewedTop">
            </div>
            <h2>Nossa Historia</h2>
            <div className="ourHistoryContent">
                <div style={{ transform: `translateX(${nextPhoto}%)`}}>
                    <DisplayImage src={IMAGE_DATA[1].imageUrl} alt={IMAGE_DATA[2].alt}/>
                    <DisplayImage src={IMAGE_DATA[2].imageUrl} alt={IMAGE_DATA[2].alt}/>
                    <DisplayImage src={IMAGE_DATA[0].imageUrl} alt=
                    {IMAGE_DATA[2].alt}/>
                </div>
                <i className="fas fa-chevron-left" onClick={ goLeftPhoto }/>
                <i className="fas fa-chevron-right" onClick= { goRightPhoto } />
            </div>
            <div className="skewedBotton">
            </div>
        </div>    
    )
}

export default OurHistory