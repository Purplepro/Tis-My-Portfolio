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
                        <div className="overlay">
                            <div>
                            <a className="project-link" href="https://bird-flow.herokuapp.com/"> <p className="project-description">A birdjournal for bird lovers built with ReactJS, NodeJS, MongoDb, and REST</p></a>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div data-aos="fade-right" className="bluedale-picture container">
                        <div className="overlay">                    
                           <div>
                           <a className="project-link" href="https://bluedale.herokuapp.com/">
                           <p className="project-description">A crypto currency research app built with NodeJS, EJS, Postgres SQL, Sequelize, and REST.</p>
                           </a>
                           </div>
                           
                        </div>
                    </div>


                    <div data-aos="fade-right" className="elomobile-picture container">
                        <div className="overlay">
                            <div>
                            <a className="project-link" href="https://elomobile-frontend.herokuapp.com/"> <p className="project-description">A Innovative app keeping clean energy in mind. This app was built with ReactJS, NodeJS, MongoDB, ChartJS, and REST</p></a>
                            </div>
                        </div>
                    </div>


            
                    <div data-aos="fade-right" className="orbitalgrounds-picture container">
                        <div className="overlay">
                            <div className="project-b-div">
                            <a className="project-link" href="https://github.com/Purplepro/OrbitalGrounds"><p className="project-description">OrbitalGrounds is a space game that was built using Vanilla Javascript, CSS, Html, and Html canvas.</p></a>
                         </div>
                        </div>
                    </div>   
              
                     

            </motion.div>
        )
    
}

export default Section2;