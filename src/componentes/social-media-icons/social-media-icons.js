import React from 'react'
import './social-media-icons.style.css'


const SocialMediaIcons = ( { socialMedia, text, href } ) => {
    return (
        <div>
            <a className="socialMediaIcons" href={ href }>
                <i className={ socialMedia }></i>
                <small>{ text }</small>
            </a>
            
        </div>
    )
}

export default SocialMediaIcons