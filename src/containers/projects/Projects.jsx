import React from 'react';
import './projects.css';
import { AiFillPlaySquare, AiFillCode } from 'react-icons/ai';
import racecar from '../../assets/racecar.webp';
import hashSet from '../../assets/hashset1.webp';
import transformer from '../../assets/transformer.webp';
import racecarDemo from '../../assets/racecarDemo.mp4';
import hashSetDemo from '../../assets/hashsetdemo.gif';
import transformerDemo from '../../assets/transformerDemo.gif';

const Projects = () => (
  <div className="projectContainer" id="project">
    <button type="button" className="projectPlacard">
      <div className="projectContentContainer">
        <div className="projectImage">
          <img className="projectImageInternal" src={racecar} />
        </div>
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
        <div className="projectImage">
          <img className="projectImageInternal" src={transformer} />
        </div>
        <h1 className="projectTitle">Transformer Model</h1>
        <p className="projectDescription">Program was created with PyTorch. It is a decoder transformer
          neural network model which mirrors the structure of GPT-4 and other popular LLMs. It implements self-attention,
          word/positional encoding, and feed forward layers to generate writings in the style of its input text.
        </p>
        <div className="projectButtonContainer">
          <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Transformer-Decoder-Model" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
          <p className="spacer">--</p>
          <p className="projectButtonLabel">Demo:</p><a href={transformerDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
        </div>
      </div>
    </button>
    <button type="button" className="projectPlacard">
      <div className="projectContentContainer">
        <div className="projectImage">
          <img className="projectImageInternal" src={hashSet} />
        </div>
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
  </div>
);

export default Projects;
