import styles from './Navbar.css'
import logo from '../../logo.png'
import React, { useState } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function ReactiveLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    
    return (
        <li>
            <Link to={to} {...props} className={isActive ? 'active' : ""} >{children}</Link>
        </li>
    )
}

const Navbar =(props)=> {

    const onChangeLanguague = (language)=> {
        /* ACA LE MANDO DEVUELTA LA PROP */
        props.onChangeLanguague(props.language)
    }

return (
    <>
        <input type="checkbox" id="check"/>
        <label for="check" class="checkbuton">
            <span class="icon-navicon"><FontAwesomeIcon icon={faBars} /></span>
        </label>
    <nav className="nav">

        <div>

            <h1>
                Ricky Vitali Portfolio
                <img src={logo} className="navLogo" alt="My logo"/>
            </h1>
        </div>
        <div className='navList'>
            <ul>

                    <ReactiveLink to="/">{props.language === false ? ("Home") : ("Inicio")}</ReactiveLink>
                    <ReactiveLink to="/about">{props.language === false ? ("About") : ("Sobre Mí")}</ReactiveLink>
                    <ReactiveLink to="/skills">Skills</ReactiveLink>
                    <ReactiveLink to="/works">{props.language === false ? ("Portfolio") : ("Portafolio")}</ReactiveLink>
                    <ReactiveLink to="/contact">{props.language === false ? ("Contact") : ("Contacto")}</ReactiveLink>
            </ul>
        </div>
        
        <footer>

                <button onClick={onChangeLanguague}>{props.language === false ? ("Language") : ("Idioma")}</button>
             <hr /> 
            <ul>
                <li><a href="https://www.linkedin.com/in/ricky-vitali-79a7871ba/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="https://www.instagram.com/ricky_vitali_/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="https://github.com/Ricky-vitali" target="_blank"><FontAwesomeIcon icon={faGithub} /></a></li>       
            </ul>
            
        </footer>

    </nav>
    </>
)
}




export default Navbar;