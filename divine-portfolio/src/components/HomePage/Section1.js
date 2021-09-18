import React from 'react';
import Navbar from '../Navbar/Navbar';
import Character from '../../images/ui-character.png';
import { motion } from 'framer-motion'


const Section1 = () => {
   



    
        return (
            <motion.div 
            className="Section_1 snap" 
            id="sect_1"
            exit={{opacity: 0}}
            animate={{opacity: 1}}
            initial={{opacity: 0}}
            >
                <Navbar/>
                <div className="ladingpage-div-grid">
                    <div data-aos="fade-right" className="Entrence-quote section-1-child">
                            <h1 className="section1-header">Hello! <span>I'm Sebastian Gayle,</span></h1>
                            <span><h2 className="job-title">a Software engineer and Designer.</h2></span>
                        <span><h3 className="welcome-paragraph">Welcome to my world and don't hesitate to explore the attempted creativity. Scroll down to know more about me.</h3></span>
                    </div>
                    <div data-aos="fade-left" className="image-wrapper section-1-child">
                            <img className="svg-image" src={Character} alt="sebastians character illustration"/>
                    </div>
                </div>
            </motion.div>
        )
    
}

export default Section1;