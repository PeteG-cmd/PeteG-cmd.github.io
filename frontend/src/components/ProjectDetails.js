
import React from 'react'

const ProjectDetails = ({ projectNum }) => {


  return (<>
    <div className={`projectPage pad ${projectNum === 1 ? '' : 'hidden'} `} id='1'>
      <div className="tile is-ancestor">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent is-6">
              <div className="tile is-child box">
                <div className="vCenterImage bookClubBlue">
                  <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460832/Home/House-share-logo_quev7r.png" alt="House Share Logo Image" className="mobileNone" />
                  <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460830/Home/House-share-logo-mobile_a0kncw.png" alt="House Share Logo Image" className="mobileShow" />
                </div>
              </div>
            </div>
            <div className="tile is-parent is-6">
              <div className="tile is-child box">
                <div className="projectInfo">
                  <h2>=> House-Share</h2>
                  <div className="projectLinks">
                    <a href="https://m-house-s.herokuapp.com">
                      <i className="fas fa-link fa-1x"></i>
                    </a>
                    <a href="https://github.com/PeteG-cmd/project-4">
                      <i className="fab fa-github fa-1x"></i>
                    </a>
                  </div>
                  <p className="heading">Task</p>
                  <p>Create a full stack application in one week</p>
                  <p>Working alone, I chose to build a Django app with a React front end and a PostgreSQL database. In
                  the app users are able to create house groups, which existing or new housemates are then able to
                  request access to. Once in the group expenses can then be entered along with additional
                  information and images, and users can mark expenses as paid, with this information available to all
                  group members</p>
                  <p className="heading">Technologies</p>
                  <p>DJANGO | REACT.JS | POSTGRESQL | HTML | SCSS | BULMA | HEROKU | JWT </p>
                </div>
              </div>
            </div>
          </div>
          <div className="tile is-parent">
            <div className="tile is-child box bookClubBlue vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460840/Home/House-Share_expense_detail_2_l3db22.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tile is-vertical">
          <div className="tile is-parent">
            <div className="tile is-child box bookClubBlue vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460836/Home/house-share-homepage_myrsn3.png" alt="" />
            </div>
          </div>
          <div className="tile">
            <div className="tile is-parent is-6">
              <div className="tile is-child box bookClubBlue vCenterImage">
                <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460832/Home/house-share-mobile-expense_split_ciijge.png" alt="" />
              </div>
            </div>
            <div className="tile is-parent is-6">
              <div className="tile is-child box bookClubBlue vCenterImage">
                <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460834/Home/house-share-mobile-home_ymyfvg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <div className="vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460833/Home/House-Share_signup_lwsttw.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tile is-parent is-3">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <div className="vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460833/Home/House-Share_user_detail_apggqa.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tile is-parent is-3">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <div className="vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460835/Home/house-share-expense_list_r9dn42.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tile is-parent is-3">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <div className="vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460832/Home/house-share-grouped_expense_hoin8q.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>



    <div className={`tile is-ancestor projectPage pad ${projectNum === 2 ? '' : 'hidden'}`} id='2'>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-6">
            <div className="tile is-child box bookClubBlue vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460825/Home/bookedup_-_logo_gq1svd.png" alt="Booked-Up Logo" className="mobileNone" />
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460822/Home/bookedup_-_logo-mobile_eaxxzg.png" alt="Booked-Up Logo" className='mobileShow' />
            </div>
          </div>
          <div className="tile is-parent is-6">
            <div className="tile is-child box">
              <div className="projectInfo">
                <h2>=> Booked-Up!</h2>
                <div className="projectLinks">
                  <a href="https://booked-up.herokuapp.com">
                    <i className="fas fa-link fa-1x"></i>
                  </a>
                  <a href="https://github.com/PeteG-cmd/project-3">
                    <i className="fab fa-github fa-1x"></i>
                  </a>
                </div>
                <p className="heading">Task</p>
                <p>Create a full stack application in one week</p>
                <p>Working in a group of three we created a React app which allowed users to find, store and comment
                on differant books. The app uses a MongoDB database and an Express.js back end. The app also allows
                users to create and host private chat rooms</p>
                <p className="heading">Technologies</p>
                <p>REACT.JS | EXPRESS.JS| MONGODB & MONGOOSE | HTML | SCSS | BULMA | HEROKU | JWT | NY TIMES API |
                GOOGLE BOOKS API </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460826/Home/booked-up-allBookClubs_nmhr7h.png" alt="" />
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box bookClubBlue vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460828/Home/booked-up-bookclub_xpbmpf.png" alt="" />
          </div>
        </div>
        <div className="tile">
          <div className="tile is-parent is-6">
            <div className="tile is-child box bookClubBlue vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460829/Home/Booked-Up_-_pLogin_xdplbc.png" alt="" />
            </div>
          </div>
          <div className="tile is-parent is-6">
            <div className="tile is-child box bookClubBlue vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460830/Home/Booked-up-home-p_l1rwro.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className={`tile is-ancestor projectPage pad ${projectNum === 3 ? '' : 'hidden'}`} id='3'>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-6">
            <div className="tile is-child box projectLogoDiv vCenterImage">
              <img className="tubeImage projectLogoImage" src="https://res.cloudinary.com/enemigos/image/upload/v1596460820/Home/tube-mapper-logo_wssezz.png" alt="Tube Time Logo" />
            </div>
          </div>
          <div className="tile is-parent is-6">
            <div className="tile is-child box">
              <div className="projectInfo">
                <h2>=> Tube Mapper</h2>
                <div className="projectLinks">
                  <a href="https://peter-gilbert.co.uk/project-2">
                    <i className="fas fa-link fa-1x"></i>
                  </a>
                  <a href="https://github.com/PeteG-cmd/project-2 ">
                    <i className="fab fa-github fa-1x"></i>
                  </a>
                </div>
                <p className="heading">Task</p>
                <p>In two days create a React app utilising a public API</p>
                <p>Working in a pair we created a front end React app that used the TFL API to provide users with
                station information and arrival times for every train and station on the TFL network</p>
                <p className="heading">Technologies</p>
                <p>REACT.JS | TFL API | HTML | CSS | BULMA | WEBPACK | GIT & GITHUB </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460822/Home/tubemap_-_facilities_vmos1e.png" alt="" />
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460822/Home/tubemap_-_station_list_gzhoju.png" alt="" />
          </div>
        </div>
        <div className="tile">
          <div className="tile is-parent is-6">
            <div className="tile is-child box vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460822/Home/tubemap_-_mobile_home_vkbvmq.png" alt="" />
            </div>
          </div>
          <div className="tile is-parent is-6">
            <div className="tile is-child box vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460821/Home/tubemap_-_mobile_arrivals_dvkich.png" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>

    <div className={`tile is-ancestor projectPage pad ${projectNum === 4 ? '' : 'hidden'}`} id='4'>
      <div className="tile is-vertical">
        <div className="tile">
          <div className="tile is-parent is-6">
            <div className="tile is-child box black vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460838/Home/pac-dude-game-start_oiqsgz.png" alt="PAC-DUDE Logo" className="mobileNone" />
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460838/Home/pac-dude-game-start-mobile_yabdtg.png" alt="PAC-DUDE Logo" className="mobileShow" />
            </div>
          </div>
          <div className="tile is-parent is-6">
            <div className="tile is-child box">
              <div className="projectInfo">
                <h2>=> PAC-DUDE</h2>
                <div className="projectLinks">
                  <a href="https://peter-gilbert.co.uk/project-1">
                    <i className="fas fa-link fa-1x"></i>
                  </a>
                  <a href="https://github.com/PeteG-cmd/project-1">
                    <i className="fab fa-github fa-1x"></i>
                  </a>
                </div>
                <p className="heading">Task</p>
                <p>To make a game to run in a browser using 'vanilla' JS, HTML & CSS only</p>
                <p>For this project I created a themed version of the classNameic PacMan game. The game has 5 levels which
                progressivly increase in difficulty, and uses a Bredth-first Search algorithm to controll the 'ghosts'.
                The game includes additional superfoods including allowing the user to collect and shoot missliles
              </p>
                <p className="heading">Technologies</p>
                <p>JAVASCRIPT | HTML | CSS | GIT & GITHUB </p>
              </div>
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box black vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460838/Home/pac-dude-missile-exp_tt1x3c.png" alt="" />
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box black vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460837/Home/pac-dude-frozen_kycxhy.png" alt="" />
          </div>
        </div>
      </div>
      <div className="tile is-vertical">
        <div className="tile is-parent">
          <div className="tile is-child box black vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460820/Home/pac-dude-start_mhszji.png" alt="" />
          </div>
        </div>
        <div className="tile">
          <div className="tile is-parent">
            <div className="tile is-child box black vCenterImage">
              <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460837/Home/pac-dude-eatable_xgswoi.png" alt="" />
            </div>
          </div>
        </div>
        <div className="tile is-parent">
          <div className="tile is-child box black vCenterImage">
            <img src="https://res.cloudinary.com/enemigos/image/upload/v1596460838/Home/pac-dude-home_n4dkex.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProjectDetails