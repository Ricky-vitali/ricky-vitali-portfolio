import styles from './WorkCards.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faImage } from '@fortawesome/free-solid-svg-icons'


const WorkCards = (props) => {
    const titles = props.title;
    const titleEn = props.titleEn
    const description = props.description
    const descriptionEn = props.descriptionEn
    const image = props.image

    let imageStyle = {
        backgroundImage: `url('../images/cardFrontImage/${image}')`,
    };


    const onDisplayAlert = () => {
        if (props.links[1] === false) {
        props.onDisplayAlert(props.modal)
        }
    }

    const onOpenModal = () => {
        props.onOpenModal(props.modalImage) 
    }

    return (

            <div className="flip-card">
                <div className="flip-card-inner">
                <div className="flip-card-front" style={imageStyle}>
                       
                    </div>
                    <div className="flip-card-back">
                        <div className='iconsContainer'>
                            <div className='iconsContainerLeft'>
                            <a href={props.links[1]} {...props.links[1] === false ? (`target="_blank"`):("")}>
                                    <FontAwesomeIcon color='#00FFFF' icon={faFolder} onClick={onDisplayAlert} />
                                </a>
                            </div>
                            <div className='iconsContainerRight'>
                            {props.modalImage === false ? ("") : (<FontAwesomeIcon icon={faImage} onClick={onOpenModal} />)}           
                                {props.links[0] === false ? (""): (<a href={props.links[0]} target="_blank">
                                    <FontAwesomeIcon icon={faArrowUpRightFromSquare}  />
                                </a>)}
                            </div>
                        </div>

                        <div>
                            <h3>{props.language ? (titles) : (titleEn)}</h3>
                            <p>{props.language ? (description) : (descriptionEn)}</p>
                        </div>

                        <div>
                        {props.technologies.technologyName.map((technology) => (
                                <p>{technology}</p>

                            ))}  
                        </div> 
                    </div>
                </div>
            </div>
    )
}


export default WorkCards;