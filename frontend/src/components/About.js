
import React, { useState } from 'react'
import JobInformation from './JobInformation'

const About = () => {

  const [data, setData] = useState('ga')

  const handleHover = (event) => {
    setData(event.target.id)
  }

  return (<>

    <div className="aboutPage" id='aboutPage'>
      <div className="columns growHeight">
        <div className="column is-7 pad">
          <p className="title">About</p>
          <p>I am a Software Developer based in London.</p>

          <p>A highly-motivated person with a strong belief that improvement is always possible. </p>
          <br></br>
          <p>My background is in global supply chains and analytics, and I have always had a passion for coding. This
          year I decided to follow this passion and enroled in the Software Engineering Immersive course with General
          Assembley to improve my skills. I am now looking for an opportunity to put these skills to good use working
       as a Full-Stack Developer. </p>
          <br></br>

          <p>Below you can see my current skills and samples of my projects.</p>
        </div>
        <div className="column is-5">

        </div>
      </div>

      <div className="experienceMain pad">
        <div className="experienceLogosDiv">

          <div className='logoDiv straightRBorder' id='ga' onMouseEnter={handleHover}>
            <div className={`arrowLBorder ${data === 'ga' ? '' : 'hidden'} `} id='ga'></div>
            <figure className="logoContainer" id='ga'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460820/Home/GA-logo-vector_gqpu8e.png" alt="GA Logo" className="logoImage" id='ga' />
            </figure>
          </div>

          <div className='logoDiv straightRBorder' id='innocent' onMouseEnter={handleHover} >
            <div className={`arrowLBorder ${data === 'innocent' ? '' : 'hidden'} `} id='innocent'></div>
            <figure className="logoContainer" id='innocent'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460836/Home/innocent-logo-vector_v2nk4k.png" alt="Innocnet Drinks Logo" className="logoImage" id='innocent' />
            </figure>
          </div>

          <div className='logoDiv straightRBorder' id='ifco' onMouseEnter={handleHover}>
            <div className={`arrowLBorder ${data === 'ifco' ? '' : 'hidden'} `} id='ifco'></div>
            <figure className="logoContainer" id='ifco'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460836/Home/ifco-logo_nafjke.svg" alt="Ifco Logo" className="logoImage" id='ifco' />
            </figure>
          </div>

          <div className='logoDiv straightRBorder' id='newcastle' onMouseEnter={handleHover}>
            <div className={`arrowLBorder ${data === 'newcastle' ? '' : 'hidden'} `} id='newcastle'></div>
            <figure className="logoContainer" id='newcastle'>
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460836/Home/newcastle-uk-logo-vector_o4hnpm.png" alt="Newcastle university Logo" className="logoImage"
                id='newcastle' />
            </figure>
          </div>
        </div>
      </div>

      <JobInformation company={data} />

    </div>

  </>)
}

export default About




