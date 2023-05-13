import styles from './Technologies.css'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Technologies =(props)=> {

   
    return (

        <>
            {props.technologies.map((technology) => (
                <div className={"techCard " + technology.technologyName}>
                          <FontAwesomeIcon icon={technology.icon} />
                             <p>{technology.technologyName} </p>
                 </div>
            ))}
        </>

    )
}


export default Technologies;