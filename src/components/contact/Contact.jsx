import React from 'react'
import "./Contact.css"
import {HiOutlineMail} from "react-icons/Hi"
import {RiMessengerLine} from "react-icons/Ri"
import {CiFacebook} from "react-icons/Ci"

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <HiOutlineMail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>kekelom88@gmail.com</h5>
            <a href="mailto:kekelom88@gmail.com">Send a message</a>
          </article>
          <article className='contact_option'>
            <CiFacebook className='contact_option-icon'/>
            <h4>Messenger</h4>
            <h5>kekelom88@gmail.com</h5>
            <a href="https://www.facebook.com/exequiel84" target='_blank'>Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+3547451551</h5>
            <a href="https://api.whatsapp.com/send?phone+5493547451551" target='_blank'>Send a message</a>
          </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder='Your full name' required />
          <input type="email" name='email' placeholder='Your mail' required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact