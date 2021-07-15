import React, {Component} from 'react'
import elomobile from '../../images/elopic.png';
import birdflow from '../../images/birdflowpic.png';
import bluedale from '../../images/bluedalepic.png';



class Section2 extends Component {
    render() {
        return (
            <div className="Section_2 snap" id="sect_2">
                {/* <div className="portfolio-weblinks"> */}

                    <div className="birflow-picture container">
                        <div className="overlay">
                            <a className="project-link" href="https://bird-flow.herokuapp.com/"><button className="project-button">BirdFlow</button></a>
                        </div>
                    </div>
                    
                    
                    <div className="bluedale-picture container">
                        <div className="overlay">
                           <a className="project-link" href="https://bluedale.herokuapp.com/"> <button className="project-button">BlueDale</button></a>
                        </div>
                    </div>


                    <div className="elomobile-picture container">
                        <div className="overlay">
                            <a className="project-link" href="https://elomobile-frontend.herokuapp.com/"><button className="project-button">EloMobile</button></a>
                        </div>
                    </div>


            
                    <div className="orbitalgrounds-picture container">
                        <div className="overlay">
                         <button className="project-button"><a className="project-link" href="https://github.com/Purplepro/OrbitalGrounds">OrbitalGrounds</a></button>
                    </div>
                        
                    {/* </div> */}
                </div>
            </div>
        )
    }
}

export default Section2;