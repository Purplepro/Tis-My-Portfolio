import React, {Component} from 'react'




class Section2 extends Component {
    render() {
        return (
            <div className="Section_2 snap" id="sect_2">
               

                    <div className="birflow-picture container">
                        <div className="overlay">
                            <a className="project-link" href="https://bird-flow.herokuapp.com/"><button className="project-button">BirdFlow</button></a>
                            <p>Check out birdflow, a site for bird lovers who likes to create a bird journal. Add any bird you've seen in your area</p>
                        </div>
                    </div>
                    
                    
                    <div className="bluedale-picture container">
                        <div className="overlay">
                           <a className="project-link" href="https://bluedale.herokuapp.com/"> <button className="project-button">BlueDale</button></a>
                           <p>If your looking for an up and coming crypto or stock exchange website to research your investment of interest. Look no further because BlueDale is here.</p>
                        </div>
                    </div>


                    <div className="elomobile-picture container">
                        <div className="overlay">
                            <a className="project-link" href="https://elomobile-frontend.herokuapp.com/"><button className="project-button">EloMobile</button></a>
                            <p>Feast your experience with EloMobile. An attention grabbing UI and hopefully a soon needed app, EloMobile is an up and coming app for ev owners. </p>
                        </div>
                    </div>


            
                    <div className="orbitalgrounds-picture container">
                        <div className="overlay">
                         <a className="project-link" href="https://github.com/Purplepro/OrbitalGrounds"><button className="project-button">OrbitalGrounds</button></a>
                        </div>
                    </div>   
              
                
            </div>
        )
    }
}

export default Section2;