import styles from './Home.css'
import { Link } from 'react-router-dom';
import About from '../About/About';
import SectionContainer from '../Global/SectionContainer';
import Contact from '../Contact/Contact';

const Home = (props) => {
    return (
        <> 
        <section className="container">

            <div className="homeInnerContainer">
                <svg className="rectangle1"/>    
                <svg className="rectangle2"/>
                  

    
                 <div className="homeContainer"> 
                    <div>
                        <h2>RICKY</h2> 
                    </div>
                        <p><strong>{props.language ? ("Desarrollador Web") : ("Web Developer")}</strong></p>
                
                </div>
                                                
            </div>
            

        </section>
        <section className="container homeInnerSection">
                <About myInfo={props.myInfo} language={props.language} /> 
        </section>
        <section className="container homeInnerSection">
                <Contact contactData={props.myInfo} language={props.language} /> 
        </section>
        </>
            
    )
}


export default Home;

