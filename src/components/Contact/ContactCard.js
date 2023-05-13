import styles from './ContactCard.css';
import SectionTitle from '../Global/SectionTitle';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactForm from './ContactForm';


const ContactCard =(props)=> {
    const [sectionName, setSectionName] = useState('Contacto')

    return (
          <>
            {props.myInfo.personalInfo.map((card) => (
                <div className='contactCard'>
                    <FontAwesomeIcon icon={card.icon} />
                    <p>{card.infoText}</p>
                </div>
            ))} 

        </>
    )
}


export default ContactCard;