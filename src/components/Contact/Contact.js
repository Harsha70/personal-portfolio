import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <section id="contact">
        <div className="contact-box">
          <div className="contact-links">
            <h2 className='contact-size'>CONTACT</h2>
            <div className="links">
              <div className="eachlink">
                <a href='https://www.linkedin.com/in/harsha-manyam-2aab28133/'><img className='imgstyle' src="https://i.postimg.cc/m2mg2Hjm/linkedin.png" alt="linkedin" /></a>
              </div>
              <div className="eachlink">
                <a href='https://github.com/Harsha70'><img className='imgstyle' src="https://i.postimg.cc/YCV2QBJg/github.png" alt="github" /></a>
              </div>
              <div className="eachlink">
                <a href='https://codepen.io/'><img className='imgstyle' src="https://i.postimg.cc/W4Znvrry/codepen.png" alt="codepen" /></a>
              </div>
              <div className="eachlink">
                <a href=''><img className='imgstyle' src="https://i.postimg.cc/NjLfyjPB/email.png" alt="email" /></a>
              </div>
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