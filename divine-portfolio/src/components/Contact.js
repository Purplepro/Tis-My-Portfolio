
import React,{ useState } from 'react'
import '../components/ContactStyle.css'
import Artvid from '../videos/artvid.mp4';
import Navbar from './Navbar/Navbar';


const Contact = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
 

    const onNameChange = (e) => {
        setName(e.target.value)
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        
    }


    return (
        <div className="Contact">
            <Navbar/>
            <h1 className="contact-header">Contact Me</h1>
            <div className="form-container">
                <div className="grid-div-1">
                    
            <form className="contact-form" onSubmit={handleSubmit} method="POST">
    <div className="form-group">
        <input type="text" className="form-control" value={name} onChange={onNameChange} placeholder="Name"/>
    </div>
    <div className="form-group">
        
        <input type="email" className="form-control" aria-describedby="emailHelp" value={email} onChange={onEmailChange} placeholder="Email address"/>
    </div>
    <div className="form-group">
        <textarea className="form-control" id="textarea"rows="5" value={message}onChange={handleSubmit} placeholder="Message me"/>
    </div>
    <button type="submit" className="contact-button" >Submit</button>
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