import styles from './Works.css'
import WorkCards from './WorkCards'
import SectionTitle from '../Global/SectionTitle';
import React, { useState, useEffect } from 'react';
import SectionContainer from '../Global/SectionContainer';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const Works = (props) => {

    const [alertBool, setAlertBool] = useState(false)
    const [open, setOpen] = React.useState(false);
    const [displayedModalImages, setDisplayedModalImages] = useState([''])

    const alertHandler = (alert) => {
        setAlertBool(true)
    
    }

    const modalHandler = (modal) => {
        setDisplayedModalImages(modal)
        setOpen(true)
    }

    useEffect(() => {
        setTimeout(() => {
            
            setAlertBool(false);
        }, 5000);
    }, []);

    return (

        <section className="container">
            {alertBool === true ?  (<div className='alertModal'>
                <p>{props.language === false ? ("We're sorry, but the code is not available to the public.") : ("Lo sentimos, pero el código no está disponible para el público.")}</p>
            </div>):("")}
   
            
                <Lightbox
                styles={{ container: { backgroundColor: "rgba(0, 0, 0, .75)" }, button: { width: "auto" } }}
                    open={open}
                    className={styles.lightbox}
                    close={() => setOpen(false)}
                    slides={displayedModalImages}
                />
       
            <div className="innerContainer">
                <SectionTitle sectionName={props.language === false ? ("Portfolio") : ("Portafolio")} />
                <SectionContainer className="portfolioContainer">
                    {props.works.map((work) => (
                        <WorkCards title={work.title}
                        titleEn={work.titleEn}
                        description={work.description}
                        descriptionEn={work.descriptionEn}
                        image={work.image}
                        modalImage={work.modalImage}
                        alertImage={work.alertImage}
                        technologies={work.technology}
                        links={[work.link,work.githubLink]}
                        language={props.language}
                        onDisplayAlert={alertHandler}
                        onOpenModal={modalHandler}
                        alert={alertBool}
                        />
                    ))}

                </SectionContainer>
                
            </div>
         
        </section>

    )
}


export default Works;