import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import { Route,Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Skills from './components/Skills/Skills';
import Works from './components/Works/Works';
import Contact from './components/Contact/Contact';
import About from './components/About/About';
import styles from './App.css'
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faVuejs } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faPhp } from '@fortawesome/free-brands-svg-icons'
import { faSass } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faFigma } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'

const WORKS_DATA = [
  {
    id: '1',
    title: 'Talentech Landing',
    titleEn:"Talentech Landing",
    description: "Landing page promocionando la Startup.",
    descriptionEn: "Landing page promoting the Startup.",
    image:"talentechImage.jpg",
    modalImage: false,
    link:"https://gettalentech.com/",
    githubLink: false,
    technology: {technologyName:["NextJs","React","SCSS","Typescript"]},
    date: '2023'
  },
  {
    id: '2',
    title: 'Museo Explora Salta',
    titleEn: "Explora Salta Museum",
    description: "Interactivos realizados junto al equipo de Proyecciones Digitales.",
    descriptionEn: "Interactives made together with Proyecciones Digitales team.",
    image: "exploraSaltaImage.jpg",
    modalImage: [{ src: "./images/modalImages/salta2.PNG" }, { src: "./images/modalImages/salta3.PNG" }, { src: "./images/modalImages/salta4.jpeg" }, { src: "./images/modalImages/salta5.jpeg" }, { src: "./images/modalImages/salta6.PNG" }],
    link: false,
    githubLink:false,
    technology: { technologyName: ["Javascript", "HTML", "CSS"] },
    date: '2020'
  },
  {
    id: '3',
    title: 'Centro Empresarial Raghsa',
    titleEn: "Raghsa Business Center",
    description: "Diseño y desarrollo de panel de administración para manipular videos a mostrar en frontdesk.",
    descriptionEn: "Design and development of administration panel to manipulate videos to be shown in frontdesk.",
    image: "raghsaImage.jpg",
    modalImage: [{ src: "./images/modalImages/raghsaFrontdesk.jpg" }, { src: "./images/modalImages/raghsaFrontdesk2.jpg" }, { src: "./images/modalImages/raghsaFrontdesk3.jpg" }, { src: "./images/modalImages/raghsaFrontdesk4.PNG" } ],
    link: 'https://centroempresariallibertador.com.ar/',
    githubLink:false,
    technology: {technologyName:["Javascript","HTML","CSS","Illustrator"]},
    date: '2020'
  },
  {
    id: '4',
    title: 'Reproductor Naranja X',
    titleEn: "Naranja X Player",
    description: "Sistema de reproducción de videos publicitarios para Naranja X.",
    descriptionEn: "Advertising video playback system for Naranja X.",
    image: "naranjaXImage.jpg",
    modalImage: [{ src: "./images/modalImages/naranjax1.PNG" }, { src: "./images/modalImages/naranjax2.png" }, { src: "./images/modalImages/naranjax3.png" }],
    link: false,
    githubLink: false,
    technology: { technologyName: ["Javascript", "HTML", "CSS"] },
    date: '2022'
  },
  {
    id: '5',
    title: 'Diseños para Gamegram',
    titleEn: "Designs for Gamegram",
    description: "Creación de assets y banners para Gamegram.",
    descriptionEn: "Creation of assets and banners for Gamegram.",
    image: "gamegramImage.jpg",
    modalImage: [{ src: "./images/modalImages/gamegramPost.jpg" }, { src: "./images/modalImages/gamegramPost2.jpg" }, { src: "./images/modalImages/gamegramPost3.jpg" }, { src: "./images/modalImages/gamegramPost4.png" }, { src: "./images/modalImages/gamegramPost5.png" }, { src: "./images/modalImages/gamegramPost6.png" }],
    link: "https://gamegram.ar/",
    githubLink: false,
    technology: { technologyName: ["Photoshop", "Illustrator", "Figma"] },
    date: '2020'
  },
  {
    id: '6',
    title: 'Highgarden',
    titleEn: "Highgarden",
    description: "Maquetación de parte del sitio web y funcionamiento de formulario de contacto.",
    descriptionEn: "Layout of part of the website and operation of the contact form.",
    image: "highgardenImage.jpg",
    modalImage: false,
    link: "https://www.highgarden.com.ar/",
    githubLink: false,
    technology: { technologyName: ["Php","Javascript","HTML", "CSS"] },
    date: '2022'
  },

  {
    id: '7',
    title: 'Chivilcoy Estaciona',
    titleEn: "Chivilcoy Estaciona",
    description: "Proyecto Final de la facultad de una aplicación de estacionamiento medido.",
    descriptionEn: "Final project of College of a metered parking application.",
    image: "chivilcoyEstaciona.jpg",
    modalImage: [{ src: "./images/modalImages/comingSoon.jpg" }],
    link: false,
    githubLink: false,
    technology: { technologyName: ["React", "MongoDB","HTML","SCSS"]},
    date: '2022'
  },
  {
    id: '8',
    title: 'Consumo de API',
    titleEn: "API consumption",
    description: "Trabajo práctico de la materia Clientes Web Mobile para la Facultad",
    descriptionEn: "Assignment for the subject Web Mobile Clients for the College",
    image: "apiCine.jpg",
    modalImage: false,
    link:"https://www.google.com",
    githubLink:"https://github.com/Ricky-vitali/tp2-clientes-web-Mobile-Vitali",
    technology: {technologyName:["Javascript","HTML","CSS"]},
    date: '2022'
  },
  {
    id: '9',
    title: 'Red Social',
    titleEn: "Social Network",
    description: "Proyecto de red social para la facultad.",
    descriptionEn: "Social network project for College",
    image: "redSocialImage.jpg",
    modalImage: [{ src: "./images/modalImages/redSocial.PNG" }, { src:"./images/modalImages/redSocial2.PNG" }],
    link: false,
    githubLink:"https://github.com/Ricky-vitali/red-social-vue",
    technology: {technologyName:["Vue","Php","HTML","SCSS"]},
    date: '2022'
  },
  {
    id: '10',
    title: 'Ecommerce Thor',
    titleEn: "Ecommerce Thor",
    description: "Mi primera aplicación mobile de Ecommerce simulado para la Facultad. Posee Landing page.",
    descriptionEn: "My first simulated Ecommerce Mobile Application for the Faculty. It also has Landing page.",
    image: "ecommerceImage.jpg",
    modalImage: [{ src: "./images/modalImages/thor.png" }, { src: "./images/modalImages/thor1.png" }, { src: "./images/modalImages/thor2.png" }],
    link: false,
    githubLink: "https://github.com/Ricky-vitali/app_thor",
    technology: { technologyName: ["Javascript", "HTML", "CSS"] },
    date: '2022'
  },


];

const MY_INFO = {
  experiences: [
    {
      title:'Talentech',
      typeofExperience:"Freelancer",
      text: 'Recientemente he estado trabajando para otra Startup llamada Talentech la cual consiste en un sistema semi-cerrado de reclutamiento para desarrolladores. Aquí he participado en la creación del proyecto desde cero desarrollando su landing page y el propio sitio en sí.',
      titleEn:"Talentech",
      typeofExperienceEn: "Freelancer",
      textEn:"I've recently been working for another Startup called Talentech which is a semi-closed developer recruitment system. Here I have participated in the creation of the project from scratch developing its landing page and the site itself.",
      date: '2022-2023'
    },
    {
      title:'Proyecciones Digitales',
      typeofExperience:"Fulltime",
      text: 'Trabajé como Desarrollador Front-End para la empresa Proyecciones Digitales la cual se dedica a la programación e instalación de interactivos audiovisuales. Aquí formé parte de varios proyectos, algunos de ellos siendo Museo Explora Salta, Frontdesk del Centro Empresarial Raghsa e Interactivos de Naranja X.',
      titleEn: "Proyecciones Digitales",
      typeofExperienceEn: "Fulltime",
      textEn: "I worked as a Front-End Developer for the company Proyecciones Digitales which is dedicated to the programming and installation of interactive audiovisuals. Here I was part of several projects, some of them being Museo Explora Salta, Frontdesk of the Raghsa Business Center and Interactivos de Naranja X.",
      date: '2021-2022'
    },
    {
      title:'Gamegram',
      typeofExperience:"Pasantia",
      text: 'Aquí hice una pasantía como diseñador para una StartUp de videojuegos llamada Gamegram. Tuve que diseñar assets para el sitio web y banners publicitarios para utilizar en Instagram y Ads.',
      titleEn: "Gamegram",
      typeofExperienceEn: "Internship",
      textEn: "Here I did an internship as a designer for a video game startup called Gamegram. I had to design assets for the website and banner ads to be used on Instagram.",
      date: '2020-2021'
    },
    {
      title:'Highgarden',
      typeofExperience:"Freelancer",
      text: 'Mi primera experiencia laboral como desarrollador fue con una empresa de jardinería llamada Highgarden. Mi trabajo fue Maquetar parte del sitio web y volver funcional el formulario de contacto.',
      titleEn: "Highgarden",
      typeofExperienceEn: "Freelancer",
      textEn: "My first work experience as a developer was with a landscaping company called Highgarden. My job was Layout part of the website and make the contact form functional.",
      date: '2019-2020'
    },
    {
      title:'Bachiller en Ciencias Sociales',
      typeofExperience:"Graduación Secundaria",
      text: 'Me gradué del secundario en el Colegio Nuestra Señora de la Misericordia, Chivilcoy Provincia de Buenos Aires.',
      titleEn: "Bachelor in Social Sciences",
      typeofExperienceEn: "High School Graduation",
      textEn: "I graduated from high school at the Colegio Nuestra Señora de la Misericordia, Chivilcoy Province of Buenos Aires.",
      date: '2017'
    }
  ],
  info: [
    {myInfo:[
      {
        personalInfo:[
          { infoType:"Telefono",infoText: "+54 9 2346 615830", icon: faMobileScreen },
          { infoType:"Email",infoText: "ricky.vitali28@gmail.com", icon: faEnvelope },
          { infoType:"Linkedin",infoText: "Ricky Vitali", icon: faLinkedin },
          { infoType:"Github",infoText: "Ricky-vitali", icon: faGithub },
        ]
      },
      {technologies:[
        { technologyName: "React", icon: faReact },
        { technologyName: "Vue", icon: faVuejs },
        { technologyName: "Javascript", icon: faJs },
        { technologyName: "Php", icon: faPhp },
        { technologyName: "SQL", icon: faDatabase },
        { technologyName: "HTML", icon: faHtml5 },
        {technologyName:"SCSS", icon: faSass},
        { technologyName: "Wordpress", icon: faWordpress },
        { technologyName: "Ux Design", icon: faHtml5 },
        { technologyName: "Illustrator", icon: faHtml5 },
        { technologyName: "Photoshop", icon: faHtml5 },
        { technologyName: "Figma", icon: faFigma }
      ]}
    ]}
  ]
}



const App = () => {
  /* This hook was created in order to be able to modify the data in the future */
  const [works, setWorks] = useState(WORKS_DATA)
  const [languageBool, setLanguageBool] = useState(false)

  const languageHandler = (language) => {
    
    setLanguageBool(!language)
    console.log("El bool es:",languageBool)
    return languageBool
  }
 

  return (
    <>
    <div className='container'>
        <Navbar onChangeLanguague={languageHandler} language={languageBool} />
      <Routes>
          <Route path="/" element={<Home myInfo={MY_INFO} language={languageBool}/>}/>
          <Route path="/about" element={<About myInfo={MY_INFO} language={languageBool}/>}/>
          <Route path="/skills" element={<Skills mySkillsData={MY_INFO} language={languageBool} />} />
          <Route path="/works" element={<Works works={works} language={languageBool} />} />
          <Route path="/contact" element={<Contact contactData={MY_INFO} language={languageBool}/>}/>
      </Routes>
      </div>
    </>
  );
}

export default App;
