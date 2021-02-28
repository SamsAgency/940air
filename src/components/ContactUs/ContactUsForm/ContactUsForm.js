import React from 'react'
import './ContactUsForm.css'

const ContactUsForm = () => {
    return (
        <div className="contact-us-form">
            <div className="contact-us-form-banner">
                <h2 className="contact-us-form-banner-h2">
                    Let's Communicate
                </h2>
                <p className="contact-us-form-banner-p" >
                    Reach us for any enquiries or suggestion. 
                    We are always here for you
                </p>
            </div>

            <form className="the-contact-us-form">
                <div className="the-contact-us-form-elements">
                        <label className="the-contact-us-form-labels">First Name*</label>
                        <input className="the-contact-us-form-input" type="text" placeholder="Enter your first name here..." required/><br/>

                        <label className="the-contact-us-form-labels">Last name*</label>
                        <input className="the-contact-us-form-input" type="text" placeholder="Enter your last name here..." required/><br/>

                        <label className="the-contact-us-form-labels">Email*</label>
                        <input className="the-contact-us-form-input" type="email" placeholder="Enter your email name here..." required/><br/>

                        <label className="the-contact-us-form-labels">Telephone Number</label>
                        <input className="the-contact-us-form-input" type="text" placeholder="Enter your mobile number name here..."/><br/>

                        <label className="the-contact-us-form-labels">Your Message*</label>
                        <textarea  placeholder="Type your message here..." required/>
                    </div>
                

                <button type="submit" className="contact-us-form-button">Submit</button>
            </form>
        </div>
    )
}

export default ContactUsForm
