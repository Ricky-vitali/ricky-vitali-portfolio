import styles from './Experiences.css'


function Experiences(props) {

    const title = props.experience.title;
    const typeofExperiences = props.experience.typeofExperience
    const text = props.experience.text

    const titleEn = props.experience.titleEn;
    const typeofExperiencesEn = props.experience.typeofExperienceEn
    const textEn = props.experience.textEn

    return (

        <li >
            <div className='timelineContent'>
                <div>
                    <h3>{props.language ? (title) : (titleEn)}</h3>
                    <p>{props.language ? (typeofExperiences) : (typeofExperiencesEn)} | {props.experience.date}</p>
                </div>
                <div>
                    <p>{props.language ? (text) : (textEn)}</p>
                </div>
            </div>
        </li>

    )
}


export default Experiences;