import React, { useEffect, useState } from "react"
import { CLIENT_IMAGE_DATA } from '../../data/image-data/diplay-image-data'
import './clients.style.css'

function Clients () {
    const [ slideImage, setSlideImage ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() =>{
            setSlideImage(slide => slide + 0.1)

        }, 20)
        return () => clearInterval(interval)
    }, [])

    if(slideImage > 100){
        setSlideImage(0)
    }

    return(
        <div className="clients" id="clients">
            <div style={{ right: `${slideImage}%` }}>
                {
                    CLIENT_IMAGE_DATA.map(client => {
                        return(
                            <img key={client.id} src={client.imageUrl} alt={client.alt}/>
                        )
                    })
                }
            </div>

            <div style={{ right: `${slideImage -100}%` }}>
                {
                    CLIENT_IMAGE_DATA.map(client => {
                        return(
                            <img key={client.id} src={client.imageUrl} alt={client.alt}/>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Clients