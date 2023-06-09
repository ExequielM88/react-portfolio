import React from 'react'
import "./experience.css"


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experience_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>JavaScrit</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>React</h4>
                <small className='text-light'>Experience</small>
              </div>
            </article>
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>Github</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience_detail'>
              <i className='bx bxs-badge-check experience_detail-icon'></i>
              <div>
                <h4>BootStrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Backend Experience</h3>
          <div className="experience_content">
              <article className='experience_detail'>
                <i className='bx bxs-badge-check experience_detail-icon'></i>
                <div>
                  <h4>Python</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>
              <article className='experience_detail'>
                <i className='bx bxs-badge-check experience_detail-icon'></i>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='experience_detail'>
                <i className='bx bxs-badge-check experience_detail-icon'></i>
                <div>
                  <h4>MongoDB</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>
              <article className='experience_detail'>
                <i className='bx bxs-badge-check experience_detail-icon'></i>
                <div>
                  <h4>JavaAcript</h4>
                  <small className='text-light'>Experience</small>
                </div>
              </article>
              <article className='experience_detail'>
                <i className='bx bxs-badge-check experience_detail-icon'></i>
                <div>
                  <h4>PHP</h4>
                  <small className='text-light'>Intermediate</small>
                </div>
              </article>
              
            </div> 
        </div>
      </div>
    </section>
  )
}

export default Experience