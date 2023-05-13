import styles from './SectionContainer.css';

const SectionContainer = (props) => {
    const classes = 'sectionContainer ' + props.className;

    return ( 

        <div className={classes}>
            {props.children}
        </div>

    )
}

export default SectionContainer;