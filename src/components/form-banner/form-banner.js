import React from 'react'
import SocialMediaIcons from '../social-media-icons/social-media-icons'
import './form-banner.style.css'

function FormBanner () {
    return(
        <div className="formBanner">
        <div>
            <h2>Obrigado pela sua mensagem</h2>
            <div className="bannerContact">
                <SocialMediaIcons socialMedia="fa fa-instagram" text="editoramesquita" href="https://www.facebook.com/editoramesquita"/>
                <SocialMediaIcons socialMedia="fa fa-facebook" text="graficamesquita" href="https://www.instagram.com/graficamesquita"/>
                <SocialMediaIcons socialMedia="fa fa-whatsapp" text="73 8854-7320" href="api.whatsapp.com/send?phone=5573988808272"/>
            </div>
        </div>
    </div>
    )
}

export default FormBanner