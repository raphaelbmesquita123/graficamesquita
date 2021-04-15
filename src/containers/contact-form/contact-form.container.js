import React, { useState } from 'react'
import FormBanner from '../../components/form-banner/form-banner'
import emailjs from 'emailjs-com';

import './contact-form.style.css'

function ContactForm () {
    const [showBanner, setShowBanner] = useState(false)

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_xfskimn', 'template_a3j93kc', e.target, 'user_b3vLK4nmsJDCovCRtPpoB')
          .then((result) => {
            setShowBanner(true)
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }


    return(
        <div className="contactForm" >
            <form className="formInputs" onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="name" required/>

                <label>Email</label>
                <input type="text" name="email" required/>

                <label>Numero de Celular</label>
                <input type="text" name="phoneNumber" required/>

                <div>
                    <input type="radio" id="phone" name="contactPreference" value="phone"/>
                    <label>Ligacao</label>
                
                    <input type="radio" id="email" name="contactPreference" value="email"/>
                    <label>Email</label>

                    <input type="radio" id="whatsapp" name="contactPreference" value="whatsapp"/>
                    <label>WhatsApp</label>
                </div>

                <label>Nos deixe uma mensagem</label>
                <textarea name="message" className="formTextArea" required/>

                <input type="submit" value="Enviar"/>
            </form>
            {
                showBanner? <div onClick={() => setShowBanner(false)}> <FormBanner/> </div> : undefined
            }
        </div>
    )
}

export default ContactForm