import React from 'react';
import { motion } from 'framer-motion'

const Section2 = () => {




   
        return (
            <motion.div className="Section_2 snap" id="sect_2">
               


                    <div 
                    data-aos="fade-right" 
                    className="birflow-picture container"
                    exit={{opacity: 0}}
                    animate={{opacity: 1}}
                    initial={{opacity: 0}}
                    >
                         <a className="project-link" href="https://bird-flow.herokuapp.com/">
                        <div className="overlay">

                            <div className="text-area">
                            <h1>Bird flow.</h1>
                           <p className="project-description">A birdjournal for bird lovers built with ReactJS, NodeJS, MongoDb, and REST</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    
                    
                    <div data-aos="fade-right" className="bluedale-picture container">
                    <a className="project-link" href="https://bluedale.herokuapp.com/">
                        <div className="overlay">                    
                        <div className="text-area">
                            <h1>Blue Dale.</h1>
                           <p className="project-description">A crypto currency research app built with NodeJS, EJS, Postgres SQL, Sequelize, and REST.</p>
                           
                           </div>
                           
                        </div>
                    </a>
                    </div>


                    <div data-aos="fade-right" className="elomobile-picture container">
                    <a className="project-link" href="https://elomobile-frontend.herokuapp.com/">
                        <div className="overlay">
                        <div className="text-area">
                            <h1>Elo Mobile.</h1>
                            <p className="project-description">A Innovative app keeping clean energy in mind. This app was built with ReactJS, NodeJS, MongoDB, ChartJS, and REST</p>
                            </div>
                        </div>
                        </a>
                    </div>


            
                    <div data-aos="fade-right" className="orbitalgrounds-picture container">
                    <a className="project-link" href="https://github.com/Purplepro/OrbitalGrounds">
                        <div className="overlay">
                        <div className="text-area">
                            <h1>Orbital Grounds.</h1>
                           <p className="project-description">OrbitalGrounds is a space game that was built using Vanilla Javascript, CSS, Html, and Html canvas.</p>
                         </div>
                        </div>
                        </a>
                    </div>   
              
                     

            </motion.div>
        )
    
}

export default Section2;