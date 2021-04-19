import React, { useState } from 'react'
import DisplayImage from '../../components/diplay-image/display-image'
import { IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './our-history.style.css'


function OurHistory () {
    const [nextPhoto, setNextPhoto] = useState(0)
    const goLeftPhoto = () => setNextPhoto(nextPhoto + 100)
    const goRightPhoto = () => setNextPhoto(nextPhoto - 100)

    return(
        <div className="ourHistory" id="ourHistory">
            <div className="skewedTop"></div>
            <h2>Nossa Historia</h2>

            <div className="ourHistoryContent">
                <div className="slideDisplay" style={{ transform: `translateX(${nextPhoto}%)`}}>
                    {   
 
                        IMAGE_DATA.map(item => 
                        <DisplayImage key={item.id} src={item.imageUrl} alt={item.alt}/> 
                        )
                    }
                </div>
                <i className="fas fa-chevron-left" onClick={ goLeftPhoto }/>
                <i className="fas fa-chevron-right" onClick= { goRightPhoto } />
            
            </div>

                <div className="ourHistoryText">
                    <div className="textext">
                        <h3>diqwd</h3>
                        <small>odajwb woaudb oawbv doawd abo awbdoi abvo</small>
                    </div>
                    
                    
                    {/* {   
                        IMAGE_DATA.map(item => 
                               
                                <div key={item.id}  className="textext">
                                    <h3>{item.year}</h3>
                                    <small>{item.text}</small>
                                </div>
                            
                        )
                    } */}
                </div>

            <div className="skewedBotton"></div>
        </div>    
    )
}

export default OurHistory