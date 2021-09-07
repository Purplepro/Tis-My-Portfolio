import React, {useEffect} from 'react';
import OutsidePic from '../../images/OutsidePic.jpeg';
import { motion } from 'framer-motion'
import Aos from 'aos';
import 'aos/dist/aos';

const aboutSection1 = () => {



    return (
        <div 
        className="Asection_1 snap"
        exit={{opacity: 0}}
        animate={{opacity: 1}}
        initial={{opacity: 0}}
        >
            <h1 className="aboutMe">About.</h1>
            {/* <svg className="blobs" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F0E378" d="M61.6,-18.9C67.7,-1.2,52.2,24.6,31.2,38.9C10.2,53.2,-16.2,55.9,-31.2,44.7C-46.2,33.4,-49.7,8,-42.6,-11C-35.5,-30,-17.8,-42.7,5,-44.3C27.7,-46,55.5,-36.5,61.6,-18.9Z" transform="translate(100 100)" />
            </svg> */}
            <div className="Asection1-grid">
            <div data-aos="fade-up">
            <img src={ OutsidePic } className="OutsidePic" alt="Sebastian outside in nature"/>
            </div>
            <div className="sect1-p" data-aos="fade-down">
                <div id="about-me-bio">
                    <h1 id="bio-header">   My name is Sebastian Gayle and I am a software engineer and designer! </h1>
                    <p id="bio-paragraph">
                        Operating in the two wonderful worlds of logic and creativity, I love taking things from an idea and developing a working solution from that idea so in other words I like to make applications functional.
                        While I believe that making websites functional is an important and big part of my job as a software engineer, Im creative at heart and creativity is something that I love to do. 
                        Whether its making My websites responive with animations or searching for color schemes to really grasp the users attention. When I think of frontend I think of the user and what will keep their eyes gravitated toward the screen because they see is beauty in a website. 
                        Born in Richmond Virginia and growing along with the city while seeing many things being built around me, I picked up the trait of being innovative and thinking of solutions to solving world problems but software engineering wasn't where I toom my innovative thought just yet. My first innovative project was when I was 11 years of age. 
                        sketching out the architecture of a bike that hops when I click a button. I didn't realize it at first but what I was doing as drew this thing to never be was in essence psuedo coding or in other words creating my plan of action. what would make this bike jump, where would this piece of technology be on the bike, and will this of course be fun. I was always a drawer, bringing my imagination about through a number two pencil and a peice of paper. 
                        I then decided in 2017 to take my art digital and learned the skill of graphic design at the age of 18. I improved on this skill and was able to make it a side gig in which I created logos for clients. I then wanted longed for going further into this rapidly changing digital world and decided I wanted to be a programmer and I have to say I am very happy with my decision. Its very interesting how one skill can lead into another don't you think?

                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}




// <p className="Asect-1-paragraph"> 
//<span><h2>I am a software engineer</h2></span>
 //and designer. I have an eye for creativity putting it at the forefront of every project I develop.
//</p> 
// I am a software engineer and Designer. I love taking things from an idea and developing a working solution from that idea so in other words I like to make websites functional.
//                  While I believe that making websites functional is an important and big part of my job as a software engineer, Im creative at heart and creativity is something that I love to do. 
//                  Whether its making My websites responive with animations or searching for color schemes to really grasp the users attention. When I think of frontend I think of the user and what will keep their eyes gravitated toward the screen because they see is beauty in a website. 
//                  Born in Richmond Virginia and growing along with the city while seeing many things being built around me, I picked up the trait of being innovative and thinking of solutions to solving world problems but software engineering wasn't where I toom my innovative thought just yet. My first innovative project was when I was 11 years of age. 
//                  sketching out the architecture of a bike that hops when I click a button. I didn't realize it at first but what I was doing as drew this thing to never be was in essence psuedo coding or in other words creating my plan of action. what would make this bike jump, where would this piece of technology be on the bike, and will this of course be fun. I was always a drawer, bringing my imagination about through a number two pencil and a peice of paper. 
//                  I then decided in 2017 to take my art digital and learned the skill of graphic design at the age of 18. I improved on this skill and was able to make it a side gig in which I created logos for clients. I then wanted longed for going further into this rapidly changing digital world and decided I wanted to be a programmer and I have to say I am very happy with my decision. Its very interesting how one skill can lead into another don't you think?

export default aboutSection1;