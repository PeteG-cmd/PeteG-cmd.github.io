import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const Projects = () => {

  const [selected, setSelected] = useState(1)

  const handleClick = (event) => {
    if (event.target.id === '-') {
      if (selected === 1) return
      return setSelected(selected - 1)
    }

    if (event.target.id === '+') {
      if (selected === 4) return
      return setSelected(selected + 1)
    }

    setSelected(parseInt(event.target.id))

  }

  return (

    <div className="projectsPage" id='projectsPage'>
      <h1 className='title has-text-centered'>Projects</h1>
      <div className="pageControl">

        <div className="level is-centered is-mobile">
          <div className="level-item pageNum">
            <a onClick={handleClick} id='-'>-</a>
          </div>
          <div className="level-item pageNum">
            <a onClick={handleClick} id='1'>1</a>
          </div>
          <div className="level-item pageNum">
            <a onClick={handleClick} id='2'>2</a>
          </div>
          <div className="level-item pageNum">
            <a onClick={handleClick} id='3'>3</a>
          </div>
          <div className="level-item pageNum">
            <a onClick={handleClick} id='4'>4</a>
          </div>
          <div className="level-item pageNum">
            <a onClick={handleClick} id='+'>+</a>
          </div>
        </div>
      </div>

      <ProjectDetails projectNum={selected} />

    </div>

  )
}

export default Projects

