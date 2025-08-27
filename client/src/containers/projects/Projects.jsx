import React, { useEffect } from 'react';
import './projects.css';
import { AiFillPlaySquare, AiFillCode } from 'react-icons/ai';
import ref from '../../assets/ref.webp';
import racecar from '../../assets/racecar.webp';
import transformer from '../../assets/transformer.webp';
import refDemo from '../../assets/refDemo.mp4';
import racecarDemo from '../../assets/racecarDemo.mp4';
import transformerDemo from '../../assets/transformerDemo.gif';

function Projects() {
  useEffect(() => {
    if (window.innerWidth > 490) return undefined;
    const placards = document.querySelectorAll('.projectPlacard');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('activeMobile');
        } else {
          entry.target.classList.remove('activeMobile');
        }
      });
    }, {
      threshold: 0.65,
    });
    placards.forEach((p) => observer.observe(p));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="projectContainer" id="project">
      <div className="projectPlacard">
        <div className="projectContentContainer">
          <div className="projectImage">
            <img className="projectImageInternal" src={ref} />
          </div>
          <h1 className="projectTitle">Speech-To-Text Evaluator</h1>
          <p className="projectDescription">Program was written in C#, React, Python, PostgreSQL and connected to AWS.
            It was created for NASA scientists to evaluate which AI speech-to-text models worked best in given environments.
            The application allows users to manage groupings of audio files and examine current and previous performance of models on select audio.
          </p>
          <div className="projectButtonContainer">
            <p className="projectButtonLabel">Code:</p><a href="https://github.com/hmc-csm-clinic23/REFWebApp" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
            <p className="spacer">--</p>
            <p className="projectButtonLabel">Demo:</p><a href={refDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
          </div>
        </div>
      </div>
      <div className="projectPlacard">
        <div className="projectContentContainer">
          <div className="projectImage">
            <img className="projectImageInternal" src={racecar} />
          </div>
          <h1 className="projectTitle">Autonomous Racecar</h1>
          <p className="projectDescription">Program was written in Python using OpenCV and is integrated with a C#, Unity simulator.
            It directs a racecar to move autonomously through complex courses with varying types of obstacles via a state machine that utilizes environmental data.
            The data is derived from an emulated LIDAR, IMU, color camera, and depth sensor.
          </p>
        </div>
        <div className="projectButtonContainer">
          <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Autonomous-Racecar" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
          <p className="spacer">--</p>
          <p className="projectButtonLabel">Demo:</p><a href={racecarDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
        </div>
      </div>
      <div className="projectPlacard">
        <div className="projectContentContainer">
          <div className="projectImage">
            <img className="projectImageInternal" src={transformer} />
          </div>
          <h1 className="projectTitle">Decoder Transformer</h1>
          <p className="projectDescription">Program was written in PyTorch. It is a decoder transformer
            neural network model that mirrors the structure of GPT-4 and other popular large language models. It implements self-attention,
            word encoding, positional encoding, and feed-forward layers to generate writings in the style of its input text.
          </p>
          <div className="projectButtonContainer">
            <p className="projectButtonLabel">Code:</p><a href="https://github.com/dylancam812/Transformer-Decoder-Model" target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillCode /> </a>
            <p className="spacer">--</p>
            <p className="projectButtonLabel">Demo:</p><a href={transformerDemo} target="_blank" rel="noopener noreferrer" type="button" className="projectButton"> <AiFillPlaySquare /> </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
