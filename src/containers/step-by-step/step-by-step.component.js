import React from 'react';
import './step-by-step.style.css'
import emailAnimation from './emailAnimation.json'
import downloadAnimation from './downloadAnimation.json'
import gearAnimation from './gearAnimation.json'
import deliveryAnimation from './deliveryAnimation.json'
import { Player } from '@lottiefiles/react-lottie-player';


function StepByStep () {
    return(
        <div className="stepByStep">
            <h2>Processo de producao</h2>
            <div className="stepByStepIcons">
                <div>
                    <h3>Etapa 1</h3>
                    <Player
                        autoplay
                        loop
                        src={emailAnimation}
                        style={{ height: '150px', width: '150px' }}
                        >
                    </Player>
                    <small>Receba seu Orcamento por email</small>
                </div>
                <div>
                    <h3>Etapa 2</h3>
                    <Player
                        autoplay
                        loop
                        src={downloadAnimation}
                        style={{ height: '150px', width: '200px' }}
                        >
                    </Player>
                    <small>Orcamento aprovado, <br></br>nos envie o arquivo</small>
                </div>
                <div>
                    <h3>Etapa 3</h3>
                    <Player
                        autoplay
                        loop
                        src={gearAnimation}
                        style={{ height: '150px', width: '150px' }}
                        >
                    </Player>
                    <small>Aqruivo enviado para producao</small>
                </div>
                <div>
                    <h3>Etapa 4</h3>
                    <Player
                        autoplay
                        loop
                        src={deliveryAnimation}
                        style={{ height: '150px', width: '200px' }}
                        >
                    </Player>
                    <small>Aguarde o recebimento</small>
                </div>
            </div>
            
        </div>
    )
}
export default StepByStep

