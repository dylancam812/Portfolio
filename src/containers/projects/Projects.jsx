import React from 'react';
import './projects.css';
import { AiFillPlaySquare, AiFillCode } from 'react-icons/ai';
import racecar from '../../assets/racecar.webp';
import hashSet from '../../assets/hashset.webp';
import webScraper from '../../assets/webscraper.webp';
import racecarDemo from '../../assets/racecarDemo.mp4';
import hashSetDemo from '../../assets/Demo Unavailable.webp';
import webScraperDemo from '../../assets/webScraperDemo.mp4';

const Projects = () => (
  <div className="projectContainer" id="project">
    <button type="button" className="projectPlacard">
      <div className="projectContentContainer">
        <img className="projectImage" src={racecar} />
        <h1 className="projectTitle">Autonomous Racecar</h1>
        <p className="projectDescription">Program was created using Python integrated with a C#, Unity simulator.
          It directed a racecar to move autonomously with a series of states that utilized environmental data.
          The data was derived from emulated LIDAR, IMU, color camera, and depth sensor scans.
        </p>
      </div>
      <div className="projectButtonContainer">
        <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Autonomous-Racecar" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
        <p className="spacer">--</p>
        <p className="projectButtonLabel">Demo:</p><a href={racecarDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
      </div>
    </button>
    <button type="button" className="projectPlacard">
      <div className="projectContentContainer">
        <img className="projectImage" src={hashSet} />
        <h1 className="projectTitle">Hash Data Structure</h1>
        <p className="projectDescription">Program was created using C++, maintained with Git, and contained in Docker.
          It emulated a hashset data structure by utilizing a wide variety of hash functions.
          Key-value pairs are formed in a manner that allows for an Θ(1) average for search, insertion, and deletion.
        </p>
        <div className="projectButtonContainer">
          <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Hash-Table" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
          <p className="spacer">--</p>
          <p className="projectButtonLabel">Demo:</p><a href={hashSetDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
        </div>
      </div>
    </button>
    <button type="button" className="projectPlacard">
      <div className="projectContentContainer">
        <img className="projectImage" src={webScraper} />
        <h1 className="projectTitle">HMC Web Scraper</h1>
        <p className="projectDescription">Program was created with Python using the Pandas, NumPy, and Beautiful Soup libraries.
          It parsed through a harvey mudd site of cs professors/administrators.
          Stored information in a csv format that is more easily accessible for use by department faculty/staff.
        </p>
        <div className="projectButtonContainer">
          <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Web-Scraper" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
          <p className="spacer">--</p>
          <p className="projectButtonLabel">Demo:</p><a href={webScraperDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
        </div>
      </div>
    </button>
  </div>
);

export default Projects;
