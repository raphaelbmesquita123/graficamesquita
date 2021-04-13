import React from 'react'
import SocialMediaIcons from '../../componentes/social-media-icons/social-media-icons'
import './fixed-top.style.css'

const FixedTop = () => {
    return (
        <div className="fixedTop">
            <SocialMediaIcons socialMedia="fa fa-instagram" text="editoramesquita" href="https://www.facebook.com/editoramesquita"/>
            <SocialMediaIcons socialMedia="fa fa-facebook" text="graficamesquita" href="https://www.instagram.com/graficamesquita"/>
            <SocialMediaIcons socialMedia="fa fa-whatsapp" text="73 8854-7320" href="http://api.whatsapp.com/557388547320"/>
        </div>
    )
}

export default FixedTop