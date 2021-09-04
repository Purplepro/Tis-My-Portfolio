import React, {useRef} from 'react'
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import ASection1 from '../AboutPage/Asection1';
import Navbar from '../Navbar/Navbar';
import {gsap} from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import {useIntersection} from 'react-use';
import Footer from '../Footer/Footer';
import aboutSection2 from '../AboutPage/Asection2';



const Home = () => {

    const sectionRef = useRef(null);

    // const intersection = useIntersection(sectionRef, {
    //     root: null,
    //     rootMargin: '400px',
    //     threshold: 1
    // });

    // const fadeIn = element => {
    //     gsap.to(element, 1, {
    //         opacity: 1,
    //         y: -60,
    //         ease: 'power4.out',
    //         stagger: {
    //             amount: 0.3
    //         } 
    //     });
    // }

    // const fadeOut = element => {
    //     gsap.to(element, 1, {
    //         opacity: 0,
    //         y: -30,
    //         ease: 'power4.out'
    //     })
    // }

    // intersection && intersection.intersectionRatio < 0.2
    //     ? fadeOut('.fadeIn')
    //     : fadeIn('.fadeIn');



    // (window).scroll(function() {
    //     const window = (Window),
    //     app = ('.App'),
    //     panel = ('.panel');


    // const scroll = window.scrollTop() + window.height() / 3;


    // panel.forEach(function () {
    //     const myRef = React.createRef()
    // })

    // })



    

    return (
        <div className="App">
        <Section1 ref={sectionRef} className="panel"/>
        <ASection1 ref={sectionRef}/>
        <Section2 ref={sectionRef} className="panel"/>
        <Section3 ref={sectionRef} className="panel"/>
        </div>
    )
}


export default Home;