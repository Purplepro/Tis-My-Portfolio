import React from 'react'
import { PDFViewer } from '@react-pdf/renderer';
import MyResume from '../components/MyResume';
import resumeCapture from '../images/resumePic.png';
import Navbar from './Navbar/Navbar';
import DownloadLink from 'react-download-link';
import MyPDF from './PDF/MyResumeFile.pdf';
import '../components/Resume.css'



const Resume = () => {


    

        return (
            <div className="resume-comp">
                <Navbar/>
                <div className="resume-picture-container">
                    <h1 id="resume-page-title">My Resume <span><p id="resume-download-intructions">Click to download</p></span></h1>
                    
                <a href={MyPDF} download="SebastiansResume">
                    <div className="resume-img">
              
                    </div>
                </a>
                </div>
            </div>
        )



}


export default Resume;