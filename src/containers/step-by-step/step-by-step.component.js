import React from 'react';
import './step-by-step.style.css'
import emailAnimation from './json-files/emailAnimation.json'
import downloadAnimation from './json-files/downloadAnimation.json'
import gearAnimation from './json-files/gearAnimation.json'
import deliveryAnimation from './json-files/deliveryAnimation.json'
import { Player } from '@lottiefiles/react-lottie-player';


function StepByStep () {
    return(
        <div className="stepByStep">
            <h2>Processo de produção</h2>
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
                    <small>Orcamento aprovado, nos envie o arquivo</small>
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
                    <small>Aguarde a entrega</small>
                </div>
            </div>
            
        </div>
    )
}
export default StepByStep

