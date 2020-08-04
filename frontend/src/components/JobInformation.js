import React, { useState } from 'react'

const JobInformation = ({ company }) => {

  // const [data, setData] = useState(info.ga)


  const info = {
    ga: {
      date: 'February 2020 - May 2020',
      company: 'General Assembly',
      position: ['Software Engineering Immersive'],
      locationDates: ['London']
    },
    innocent: {
      date: 'July 2016 - January 2020',
      company: 'Innocent Drinks',
      position: ['Industry Manager'],
      locationDates: ['London']
    },
    ifco: {
      date: 'August 2011 - July 2016, High Wycombe',
      company: 'IFCO Systems',
      position: ['Head of Operations', 'Logistics Manager', 'Customer Service and Logistics Coordinator'],
      locationDates: ['2014 - July 2016', 'September 2012 - January 2014', 'September 2011 - September 2012']
    },
    newcastle: {
      date: '2009 - 2011, Newcastle-Upon-Tyne',
      company: 'Newcastle University',
      position: ['Human Geography, Geo-Politics, Economics and Social Science'],
      locationDates: ['(Bachelor of Arts)']
    }
  }


  return (<>

    <div className="jobDescriptionDiv pad">
      <article className={`about ${company}`} id={company} >
        <p className="dates">{info[company].date}</p>
        <p className="company">{info[company].company}</p>
        {info[company].position.map((role, index) => {
          return <p key={index} className='position'>{role} <span> | {info[company].locationDates[index]} </span></p>
        })}



        {/* <article className="about ga" id='ga'>
        <p className="dates">February 2020 - May 2020</p>
        <p className="company">General Assembly</p>
        <p className="position">Software Engineering Immersive <span> | London</span></p>
      </article>
      <article className="about innocent hidden" id='innocent'>
        <p className="dates">July 2016 - January 2020</p>
        <p className="company">Innocent Drinks</p>
        <p className="position">Industry Manager <span> | London</span></p>
      </article>
      <article className="about ifco hidden" id='ifco'>
        <p className="dates">August 2011 - July 2016, High Wycombe</p>
        <p className="company">IFCO Systems</p>
        <p className="position">Head of Operations <span> | 2014 - July 2016</span></p>
        <p className="position">Logistics Manager <span> | September 2012 - January 2014</span></p>
        <p className="position"> Customer Service and Logistics Coordinator <span> | September 2011 - September 2012</span></p>
      </article>
      <article className="about newcastle hidden" id='newcastle'>
        <p className="dates">2009 - 2011, Newcastle-Upon-Tyne</p>
        <p className="company">Newcastle University</p>
        <p className="position">Human Geography, Geo-Politics, Economics and Social Science <span> | (Bachelor of Arts)</span></p> */}


      </article>
    </div>
  </>
  )
}

export default JobInformation

