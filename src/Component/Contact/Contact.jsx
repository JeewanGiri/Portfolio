import { useRef } from 'react';
import './contact.scss'
import emailjs from '@emailjs/browser'
import { useState } from 'react';
const Contact = () => {
  const form = useRef();
  const [done,setDone]= useState(false)
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_ighpit9', 'template_pfii9ll', form.current, {
      publicKey: 'GMUZZaj6h8bwVSNdK',})
    .then(
      () => {
        console.log('Success!!');
        setDone(true)
      },
      (error) => {
        console.log('Failed..', error.text);
      },
    );
};
  return (
    <>
    <div className="contact-form" id='contact'>
        <div className="w-left">
            <div className="awesome">
                <h1>Get in touch</h1>
                <h4>Contact me</h4>
            </div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='from_name' className='user' placeholder='Name' />
                <input type="email" name='user_email' className='user' placeholder='Email' />
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value="Send" className='button' />
                <span>{done && "Thanks for contacting Me!! 😊"}</span>
                <div className="blur c-blur1" style={{background:"purple"}}></div>
               <div className="blur s-blur" style={{background: "#ABF1FF94", left: "28rem",top:"20rem",width:"7rem"}}></div>

            </form>
        </div>
    </div>
    </>
  )
}

export default Contact
