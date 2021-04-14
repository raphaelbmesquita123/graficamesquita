import React from 'react'
import './jobs.style.css'
import ImageBox from '../../componentes/image-box/image-box'

function Jobs () {
    return (
        <div className="jobs" id="jobs">
           <div className="jobsImagens">
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/>
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/>
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/>   
           </div>
           <div className="jobsImagens">
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/>
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/>
                <ImageBox alt="panfleto" url="https://www.petz.com.br/blog/wp-content/uploads/2021/03/piercing-para-cachorro-2.jpg" item="Panfleto" size="A5" print="Frente e Verso" paper="Couche 115g" quantity="5000" productionTime="2 dias uteis"/> 
           </div>
        </div>
    )
}

export default Jobs