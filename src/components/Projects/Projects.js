import React from 'react'
import './Projects.css';

import projects from './projectdata';

const Projects = () => {
  return (
    <div className='container'>
      <h1 style={{ textAlign: 'center' }}>See My Work</h1>
      <div className="container">
        {
          projects.map((project, index) => {
            return (<div className='project' key={project.title}>
              <img className='imgStyle' alt='' src={project.image} />

              <div className="project-over">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className='source-link'>
                  <a className="link link-primary" style={{ color: 'white' }} href={project.link} rel="noreferrer" target="_blank">Try it</a>
                  <a className="link link-secondary" style={{ color: `rgb(201 37 91)` }} href={project.source} rel="noreferrer" target="_blank">View Source</a>
                </div>
              </div>
  <h2>{project.title}</h2>
            </div>)
          })
        }
      </div>
    </div >
  )
}

export default Projects
