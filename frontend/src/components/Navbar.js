
import React from 'react'

const Navbar = () => {

  return (<>

    <nav className='navbar'>
      <div className="links">
        <a href="#aboutPage">About</a>
        <a href="#skillsPage">Skills</a>
        <a href="#clientsPage">Freelance Work</a>
        <a href="#projectsPage">Projects</a>
        <a href="#footer">Contact</a>
      </div>
      <div className="rightAlign">
        <a href='mailto:peter.gilbert88@icloud.com'><i className="fas fa-envelope fa-2x"></i></a>
        <a href='https://www.linkedin.com/in/p-gilbert/'><i className="fab fa-linkedin fa-2x"></i></a>
        <a href='https://github.com/PeteG-cmd'><i className="fab fa-github fa-2x"></i></a>
      </div>
    </nav>
  </>
  )

}

export default Navbar
