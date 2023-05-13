import styles from './ExperienceTimeline.css';
import Experiences from './Experiences';

function ExperienceTimeline(props) {

    return (

        <div className="timeline">
            <ul>
                {props.experiences.map((experience) => (
                    <Experiences experience={experience} language={props.language} />
          
                ))}

            </ul>
        </div>

    )
}


export default ExperienceTimeline;