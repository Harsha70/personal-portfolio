import React from 'react'
import { Link } from 'react-router-dom'
import './Contact.css'
const Contactlinks=[
  {
    media:'https://www.linkedin.com/in/harsha-manyam-2aab28133/',
    icon:'https://i.postimg.cc/m2mg2Hjm/linkedin.png',
    name:'linkedin'
  },
  {
    media:'https://github.com/Harsha70',
    icon:'https://i.postimg.cc/YCV2QBJg/github.png',
    name:'github'
  },
  {
    media:'',
    icon:'https://i.postimg.cc/W4Znvrry/codepen.png',
    name:'codepen'
  },
  {
    media:'',
    icon:'https://i.postimg.cc/NjLfyjPB/email.png',
    name:'email'
  },
]
const Contact = () => {
  const handlemedia = (media) => {
    window.open(media)
  }
  return (
    <div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className='contact-size'>CONTACT</h2>
            <div className="links">
              {Contactlinks.map((contact, index)=>{
                return <div map={index} className="eachlink">
                  {
                  contact.media ? 
                  <Link to='/contact' onClick={()=>handlemedia(contact.media)} ><img className='imgstyle' src={contact.icon} alt={contact.name} /></Link>
                  :
                  <Link to='/contact' ><img className='imgstyle' src={contact.icon} alt={contact.name} /></Link>
                  }
                
              </div>
              })}              
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form action='https://formspree.io/f/mdobwkpn' method='POST'>
              <div className="form-item">
                <input type="text" name="sender" required />
                <label>Name:</label>
              </div>
              <div className="form-item">
                <input type="text" name="email" required />
                <label>Email:</label>
              </div>
              <div className="form-item">
                <input type="text" name="subject" required />
                <label>Subject:</label>
              </div>
              <div className="form-item" id="editor-container">
                <textarea className="textarea" name="message" required></textarea>
                <label>Message:</label>
              </div>
              <button className="submit-btn">Send</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact