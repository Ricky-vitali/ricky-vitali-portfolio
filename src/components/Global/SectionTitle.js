import styles from './SectionTitle.css'

function SectionTitle(props) {
    return (

        <div className="sectionTitleContainer">
            <h2>{props.sectionName}</h2>
            <hr />
        </div>
    )
}


export default SectionTitle;