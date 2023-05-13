import './InnerSection.css';

const InnerSection = (props) => {
    const classes = 'innerSectionContainer ' + props.className;

    return <div className={classes}>{props.children}</div>;
};

export default InnerSection;