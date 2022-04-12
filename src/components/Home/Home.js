import React from 'react'
import Socialmedia from './Socialmedia'
import FLATICON from './data'
import Tech from './Tech'
import Resume from '../../pdf/Harsha_resume.pdf'

const introStyle = {
  margin: 'auto',
    paddingLeft: "28px",
    justifyContent: "center",
    alignItems: "center",
    display: 'flex'
}

const Home = () => {
  // console.log(FLATICON)
  const iconCategorys = [...new Set(FLATICON.map(icon => icon.Category))]
  return (
    <>
      <div className="row">
        <div className="col-md-6 container">
          <img src="https://raw.githubusercontent.com/Harsha70/portfolio/main/images/webdev.png" className="rounded mx-auto d-block" style={{ height: "18rem", padding: "40px" }} alt="Photo"></img>
        </div>
        <div className="col-md-6" style={introStyle}>
          <div className='mx-auto'>
          <h1>
            Hi I am Harsha
          </h1>
          <p style={{ fontSize: "2rem", fontFamily: "monospace", color: "#df0f95" }}>
            A Software Developer
          </p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <a className="btn btn-primary" href={Resume} target="_blank">Resume</a>
            <a className="btn btn-primary">Hire Me</a>
          </div>
          {/* <Socialmedia /> */}
          </div>
        </div>
      </div>
      <div className='container' style={{ display: 'flex', flexDirection: "column", gap: "6rem", marginTop: "2rem" }}>
        {iconCategorys.map((iconCategory, index) => <Tech key={index} iconCategory={iconCategory} />)}
      </div>
    </>
  )
}

export default Home