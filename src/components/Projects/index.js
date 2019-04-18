import React, { Component } from 'react';
import { UserCard, RepoCard } from 'react-github-cards';
import { Carousel } from 'react-responsive-carousel';
import NoogleLogo from '../../assets/media/newGoogle.png'
import MeemzIO from '../../assets/projects-assets/MeemzIO.png'
import { Link } from 'react-router-dom';
import 'react-github-cards/dist/default.css';
import GPACalculator from '../../assets/projects-assets/gpa-calculator.png'
import RubricCalculator from '../../assets/projects-assets/Rubric-Calculator.png'
import Chess from '../Chess/index.js'
import Noogle from '../../assets/projects-assets/noogle.png'
import BlockChain from '../../assets/projects-assets/blockchainub.png'
import BlockChainCrypto from '../../assets/projects-assets/backyard-crypto.png'
import SketchItLogo from '../../assets/hackathon-pics/sketchit.png'
import WhipLogo from '../../assets/hackathon-pics/whipLogo.png'
import CodeComp from '../../assets/projects-assets/codecomp.png'
import OneDentalMatch from '../../assets/projects-assets/odm.png'
import BarTabs from '../../assets/projects-assets/bar-tabs.png'
import MeemzIOGame from '../../assets/projects-assets/meemz-io-game.png'
import SketchItGame from '../../assets/projects-assets/sketch-it-game.png'

class Projects extends Component {

  render() {
    return (
      <div className='projectsContainer'>


        <div className='githubProjectsDiv'>
          <div className='projectsColumn' id='projectsColumn1'>
            <RepoCard username="white105" repo="DandyHacks" className='githubRepo' />
            <RepoCard username="white105" repo="Rubric-Calculator" className='githubRepo' />
          </div>
          <div className='projectsColumn' id='projectsColumn2'>
            <RepoCard username="white105" repo="white105.github.io" className='githubRepo' />
            <RepoCard username="white105" repo="react-gpa" className='githubRepo' />
          </div>
        </div>

        <div id="projectsBackground">
        <div className='projectRow'>
          <div className='projectDiv'>
            <h2 className='turtlebotHeader'>codecomp</h2>
            <a href=''><img src={CodeComp} id="MeemzIO"></img></a>
          </div>

          <div className='mobileProjectRow'>
            <div className='mobileProjectDiv'>
              <h2 className='turtlebotHeader'>One Dental Match</h2>
              <img src={OneDentalMatch} id="OneDentalMatch"></img>
            </div>

            <div className='mobileProjectDiv'>
              <h2 className='turtlebotHeader'>Bar Tabs</h2>
              <img src={BarTabs} id="OneDentalMatch"></img>
            </div>

          </div>


        </div>

        <div className='projectRow'>
          <div className='projectDiv'>
            <h2 className='turtlebotHeader'>Backyard Crypto - Freelance</h2>
            <a href='https://backyardcrypto.com/'><img src={BlockChainCrypto} id="MeemzIO"></img></a>
          </div>

          <div className='projectDiv'>
            <h2 className='turtlebotHeader'>Meemz.io</h2>
           <a href='https://meemz-io.herokuapp.com/'><img src={MeemzIOGame} id="MeemzIO"></img></a>
          </div>
        </div>

        <div className='projectRow'>
          <div className='projectDiv'>
            <h2 className='turtlebotHeader'>UB Blockchain Buildathon Website</h2>
           <a href='https://www.hackbuf.com/'><img src={BlockChain} id="MeemzIO"></img></a>
          </div>

          <div className='projectDiv'>
            <h2 className='turtlebotHeader'>Canisius College Grading Software</h2>
           <a href='https://rubric-calculator.herokuapp.com/'><img src={RubricCalculator} id="MeemzIO"></img></a>
          </div>
        </div>




        <div className='projectRow'>
          <div className='projectDiv'>
            <h3 className='turtlebotHeader'>UB Hacking 2018</h3>
            <a href='https://ubhacking2018.herokuapp.com'><img src={SketchItGame} id="Sketchit"></img></a>
          </div>

          <div className='projectDiv'>
            <h3 className='turtlebotHeader'>Dandy Hacks 2018</h3>
            <a href='https://dandy-hacks.herokuapp.com/'><img src={WhipLogo} id="Whip"></img></a>
          </div>
        </div>


         <div className='projectRow'>
           <div className='projectDiv'>
             <h2 className='turtlebotHeader'>Noogle</h2>
             <a href='https://noogle-app.herokuapp.com/'><img src={Noogle} id="MeemzIO"></img></a>
           </div>

           <div className='projectDiv'>
            <h2 className='turtlebotHeader'>GPA Calculator</h2>
            <Link to='/projects/gpa-calculator'><img src={GPACalculator} id="MeemzIO"></img></Link>
           </div>
         </div>


        </div>




        <h2 className='turtlebotHeader'>Turtlebot Robotics 2017</h2>

        <video width = "500" height = "300" controls preload='preload' className='turtlebotVideo'>
         <source src = {require('../../assets/videos/turtlebot.mp4')} type = "video/mp4"></source>
         This browser doesn't support video tag.
         </video>

         <p className="projectsParagraph">During the Fall semester of 2017 I worked as a student researcher implementing turtlebot autonomy with ROS and Linux</p>

         <p className='projectsParagraph'><u>Contributions</u></p>
         <p className='projectsParagraph'>I helped assemble the original hardware and software including the asus camera, raspberry pi, and installation of Linux.
         I then worked through ROS tutorials and implemented mapping and navigation. Our research team consisted of four people and including myself, my classmate,
         and two professors.</p>


      </div>
    );
  }
}

export default Projects;
