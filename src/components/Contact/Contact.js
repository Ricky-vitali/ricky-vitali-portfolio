import styles from './Contact.css'
import SectionTitle from '../Global/SectionTitle';
import React, { useState } from 'react';
import ContactForm from './ContactForm';
import ContactCard from './ContactCard';
import SectionContainer from '../Global/SectionContainer';


const Contact = (props) =>{

    return (

        <section className="container">

            <div className="innerContainer">
                <SectionTitle sectionName={props.language === false ? ("Contact") : ("Contacto")} />
                <SectionContainer className="contactContainer">
                {/* <div className="contactContainer"> */}
                   
                   <div className="cardContainer">
                        <ContactCard myInfo={props.contactData.info[0].myInfo[0]}/>
                    </div>
                    <ContactForm language={props.language} />
 
                
                </SectionContainer>
            </div>

        </section>

    )
}


export default Contact;