import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import MyResume from '../components/MyResume';
import resumeCapture from '../images/resumePic.png';
import Navbar from './Navbar/Navbar';
import DownloadLink from 'react-download-link';
import MyPDF from './PDF/MyResumeFile.pdf';
import '../components/Resume.css'
import { motion } from 'framer-motion';



const Resume = () => {


    

        return (
            <motion.div 
            className="resume-comp"
            exit={{opacity: 0}}
            animate={{opacity: 1, y: 0}}
            initial={{opacity: 0}}
            >
                <Navbar/>
                <div className="resume-picture-container">
                    <h1 id="resume-page-title">My Resume <span><p id="resume-download-intructions">Click to download</p></span></h1>
                    
                <a href={MyPDF} download="SebastiansResume">
                    <div className="resume-img">
              
                    </div>
                </a>
                </div>
            </motion.div>
        )



}


export default Resume;