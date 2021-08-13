import React from 'react'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Navbar from '../Navbar/Navbar';
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


const Home = () => {

    // $(window).scroll(function() {
    //     const $window = $(window),
    // })

    

    return (
        <div className="App">
        <Section1/>
        <Section2/>
        <Section3/>
        </div>
    )
}


export default Home;