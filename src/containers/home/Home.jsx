import React from 'react';
import { AiFillFileText } from 'react-icons/ai';
import homeImage from '../../assets/homeImage.webp';
import './home.css';

const Home = () => (
  <div className="home sectionPadding" id="home">
    <div className="homeContent">
      <h1 className="homeText">
        <span className="text1">H</span>
        <span className="text2">i</span>
        <span className="text3">, </span>
        <span className="text4">m</span>
        <span className="text5">y</span>
      </h1>
      <h1 className="homeText2">
        <span className="text6">n</span>
        <span className="text7">a</span>
        <span className="text8">m</span>
        <span className="text9">e </span>
        <span className="text10">i</span>
        <span className="text11">s </span>
        <span className="text12">D</span>
        <span className="text13">y</span>
        <span className="text14">l</span>
        <span className="text15">a</span>
        <span className="text16">n</span>
      </h1>
      <p>Full-stack software engineer</p>
      <div className="resume">
        <a href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" type="button">Resume<span className="spacer">_</span>  <AiFillFileText /></a>
      </div>
    </div>
    <div className="homeImage">
      <img src={homeImage} />
    </div>
  </div>
);

export default Home;
