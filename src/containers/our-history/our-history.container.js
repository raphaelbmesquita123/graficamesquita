import React from 'react'
import DisplayImage from '../../components/diplay-image/display-image'
import './our-history.style.css'


function OurHistory () {
    return(
        <div className="ourHistory" id="ourHistory">
            <h2>Nossa Historia</h2>
            <div className="ourHistoryContent">
                <div>
                    <DisplayImage />
                </div>
            </div>

            <div className="skewed">
                
            </div>
        </div>    
    )
}

export default OurHistory