import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import homeImage from '../../assets/homeImage.webp';
import lightBulb from '../../assets/lightBulb.png';
import './home.css';

const Home = () => (
  <div className="home sectionPadding" id="home">
    <div className="homeContent">
      <h1 className="homeText">
        <span className="text1">H</span>
        <span className="text2">e</span>
        <span className="text3">l</span>
        <span className="text4">l</span>
        <span className="text5">o</span>
        <span className="text6">, </span>
        <span className="text7">m</span>
        <span className="text8">y</span>
        <span className="textSpacer">.</span>
      </h1>
      <h1 className="homeText2">
        <span className="text9">n</span>
        <span className="text10">a</span>
        <span className="text11">m</span>
        <span className="text12">e </span>
        <span className="text13">i</span>
        <span className="text14">s </span>
        <span className="text15">D</span>
        <span className="text16">y</span>
        <span className="text17">l</span>
        <span className="text18">a</span>
        <span className="text19">n</span>
      </h1>
      <p>Full-Stack Software Engineer</p>
      <div className="resume">
        <a href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" type="button">Resume<span className="resumeSpacer">_</span>  <AiFillFileText /></a>
      </div>
    </div>
    <div className="homeImage">
      <div className="imageContainer">
        <img src={homeImage} className="mainImage" />
        <div className="maskContainer">
          <img src={lightBulb} alt="lightbulb" className="lightbulb" />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
