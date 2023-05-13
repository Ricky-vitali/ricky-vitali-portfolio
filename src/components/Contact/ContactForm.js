import CustomButton from '../Global/CustomButton';
import styles from './ContactForm.css'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';



const ContactForm = (props) => {

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gjgxdto', 'template_7ko6zno', e.target, 'GSO-aiDXfwDOs0Ww-')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
            e.target.reset()
    }

    const [formName, setFormName] = useState('');
    const [formSurName, setFormSurName] = useState('');
    const [formEmail, setFormEmail] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [formText, setFormText] = useState('');
    const [formTextEn, setFormTextEn] = useState('');

    const formNameHandler = (e) => {
        setFormName(e.target.value.trim())
    }

    const formSurNameHandler = (e) => {
        setFormSurName(e.target.value.trim())
    }
    const formEmailHandler = (e) => {
        setFormEmail(e.target.value.trim())
    }
    const formMessageHandler = (e) => {
        setFormMessage(e.target.value.trim())
    }
    
    const formValidatorHandler = (e) => {
        e.preventDefault();
        console.log("Lets validate first", formName, formSurName, formEmail, formMessage)
        if (!formName || !formSurName || !formEmail || !formMessage || formName.match(/[0-9]/g) || formSurName.match(/[0-9]/g)) {
            setFormText("Los campos no pueden estar vacios. El nombre y apellido tampoco pueden tener numeros.")
            setFormTextEn("The fields cannot be empty. The first and last name cannot have numbers either.")
        }else{
            setFormText("Enviado con Éxito")
            setFormTextEn("Sent Successfully")
            sendEmail(e)
        }
    }

    return (

    <div className="formContainer">
        <form onSubmit={formValidatorHandler}>
            <div className="firstInnerContainer">
                <label for="name">Nombre</label>
                    <input type="text" id="name" name="name" placeholder={props.language ? ("Nombre") : ("Name")} required onChange={formNameHandler} />
                <label for="surname">Apellido</label>
                    <input type="text" id="surname" name="surname" placeholder={props.language ? ("Apellido") : ("Last Name")} required onChange={formSurNameHandler} />
            </div>
            <div className='secondInnerContainer'>
                <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required onChange={formEmailHandler} />
                <label for="message">Mensaje</label>
                    <textarea id="message" name="message" placeholder={props.language ? ("Mensaje") : ("Message")} required onChange={formMessageHandler} />
                    <p className={formText === 'Enviado con Éxito' ? ("formStatusGood") : ("formStatusError")}>{props.language ? (formText) : (formTextEn)}</p>
            </div>
            <div className="submitContainer">
                
                    <CustomButton type="submit" text={props.language ? ("Enviar") : ("Send")} value="Enviar" className="submitButton" id="submitButton" />       
            </div>
        </form>
    </div>

    )
}


export default ContactForm;