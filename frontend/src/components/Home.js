import React from 'react'
// import { Spinner } from './common/Spinner'
import Footer from './Footer'
import Navbar from './Navbar'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Clients from './Clients'



const Home = () => {

  return (<>

    <div className="namePage">
      <div className="columns growHeight">
        <div className="column growHeight has-text-centered">
          <div className="nameBox">
            <p className="name">Peter Gilbert</p>
            <p className="devPosition">Junior Full-Stack Developer</p>
          </div>
        </div>
      </div>
    </div>

    <Navbar />

    <About />

    <Skills />

    <Clients />

    <Projects />

    <Footer />

  </>
  )
}

export default Home