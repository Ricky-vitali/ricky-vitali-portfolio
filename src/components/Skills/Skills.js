import styles from './Skills.css'
import { Link } from 'react-router-dom';
import SectionTitle from '../Global/SectionTitle';
import InnerSection from '../Global/InnerSection';
import React, { useState } from 'react';
import Technologies from './Technologies';
import ExperienceTimeline from './Experience/ExperienceTimeline';
import SectionContainer from '../Global/SectionContainer';

const Skills = (props) => {
    const [sectionOnDisplay, setSectionOnDisplay] = useState('Tech')

    function displayTechHandler (){
        setSectionOnDisplay("Tech")
    }

    function displayExperienceHandler (){
        setSectionOnDisplay("Experience")
    }

    
    return (

        <section className="container">

            <div className="innerContainer">
                <SectionTitle sectionName={'Skills'} />
                <SectionContainer className="skillsContainer">
                {/* <div className="skillsContainer"> */}
                    <div className='subSectionButtons'>
                        <button onClick={displayTechHandler} className={sectionOnDisplay === 'Tech' ? 'selectedButton' : ""}>{props.language ? ("Tecnologias"):("Technology")}</button>
                        <button onClick={displayExperienceHandler} className={sectionOnDisplay === 'Experience' ? 'selectedButton' : ""}>{props.language ? ("Experiencia") : ("Experience")}</button>
                    </div>
                    {sectionOnDisplay === 'Experience' ? ( 
                        <InnerSection>
                            <ExperienceTimeline experiences={props.mySkillsData.experiences} language={props.language} /> 
                        </InnerSection>
                            ):(
                        <InnerSection>
                                <Technologies technologies={props.mySkillsData.info[0].myInfo[1].technologies}/>
                        </InnerSection>
                        )   
                    }

              
                </SectionContainer>
            </div>

        </section>

    )
}


export default Skills;