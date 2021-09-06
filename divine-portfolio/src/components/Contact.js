
import React from 'react'
import '../components/ContactStyle.css'
import Artvid from '../videos/artvid.mp4';
import Navbar from './Navbar/Navbar';
import emailjs from 'emailjs-com';



const Contact = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_cvjdv9i', 'contactme_ne6b3hn', e.target, 'user_RQw2FMGaPCKoBFVMccgRS')  
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
    }




    return (
        <div className="Contact">
            <Navbar/>
            <h1 className="contact-header">Contact Me.</h1>
            <div className="form-container">
                <div className="grid-div-1">
                    
            <form className="contact-form" onSubmit={sendEmail}>

    <div className="form-group">
        <input type="text" className="form-control"  placeholder="Name" name="name"/>
    </div>

    <div className="form-group">
        <input type="text" className="form-control"  placeholder="Subject" name="subject"/>
    </div>

    <div className="form-group">
        
        <input type="email" className="form-control" placeholder="Your Email address" name="email"/>
    </div>

    <div className="form-group">
        <textarea type="text" className="form-control" id="textarea" cols="30" rows="5"  placeholder="Message me" name="message"/>
    </div>

    <input type="submit" className="contact-button" value="Send"/>

</form>
                </div>
                <div className="grid-div-2">
                    <video src={Artvid} type="video/mp4" autoPlay loop muted className="video">
                        <div id="gridDiv-2-text">
                        <h1>Contact Information</h1>
                        <p>You can send me a email via the form to your left</p>
                        <ul>
                            <li>Phone Number </li>
                        </ul>
                        </div>
                        
                    </video>
                </div>
            </div>
        </div>
    )
}


export default Contact;