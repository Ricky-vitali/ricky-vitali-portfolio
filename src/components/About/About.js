import styles from './About.css'
import { Link } from 'react-router-dom';
import SectionTitle from '../Global/SectionTitle';
import React, { useState } from 'react';
import AboutList from './AboutList';
import CustomButton from '../Global/CustomButton';
import SectionContainer from '../Global/SectionContainer';

const About = (props) => {
   
    return (        

        <section className="container">

            <div className="innerContainer">
                <SectionTitle sectionName={props.language === false ? ("About Me"):("Sobre Mí")} />
                <SectionContainer className="aboutContainer">
                {/* <div className="aboutContainer"> */}
                    <div className="leftContainer">  
                        <h3>{props.language === false ? ("I'm"):("Soy")} <strong>Ricardo Vitali</strong></h3>
                        <p>Web developer</p>
                       
                        <p>{props.language ? ("Estoy interesado en el amplio alcance del diseño y desarrollo web, pero me gustaría trabajar principalmente como desarrollador front-end. Soy cooperativo, adaptable y siempre con muchas ganas de aprender. La gente me considera creativo y paciente.") :("I am interested in the broad scope of web design and development but would like to work mainly as a front-end developer. I am cooperative, adaptable and always eager to learn. People consider me to be creative and pacient.")}</p>
                        <AboutList listInfo={props.myInfo.info} language={props.language} />

                        <a href='../../CV_Ricardo_Vitali_Español.pdf' download className='aboutButton downloadButton'>{props.language === false ? ("Download CV") : ("Descargar CV")}</a>
                       
        
                    </div>
                    <div className="rightContainer">
                        <img src='./images/fotoPerfil.jpg' alt='Foto de Ricky'/>
                    </div>
                </SectionContainer>
            </div>

        </section>

    )
}


export default About;