import React, {useEffect} from 'react';
import Navbar from '../Navbar/Navbar';
import Character from '../../images/ui-character.png';
import Aos from 'aos';



const Section1 = () => {
    useEffect(() => {
        Aos.init({duration: 2000});
    }, [])



    
        return (
            <div className="Section_1 snap" id="sect_1">
                <Navbar/>
                <div className="ladingpage-div-grid">
                    <div data-aos="fade-right" className="Entrence-quote section-1-child">
                            <h1 className="section1-header">Hello! <span>I'm Sebastian Gayle,</span></h1>
                            <span><h2 className="job-title">a Software engineer and Designer.</h2></span>
                        <span><h3>Welcome to my world and don't hesitate to explore the attempted creativity.</h3></span>
                    </div>
                    <div data-aos="fade-left" className="svg-image section-1-child">
                
                    </div>
                </div>
            </div>
        )
    
}

export default Section1;