import { React, useState } from 'react';
import './skills.css';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Slider from 'react-slick';
import python from '../../assets/skillsImages/python.webp';
import cSharp from '../../assets/skillsImages/cSharp.webp';
import java from '../../assets/skillsImages/java.webp';
import cPlusPlus from '../../assets/skillsImages/c++.webp';
import c from '../../assets/skillsImages/c.webp';
import html from '../../assets/skillsImages/html.webp';
import css from '../../assets/skillsImages/css.webp';
import javaScript from '../../assets/skillsImages/javascript.webp';
import racket from '../../assets/skillsImages/racket.webp';
import sql from '../../assets/skillsImages/sql.webp';
import matLab from '../../assets/skillsImages/matlab.webp';
import r from '../../assets/skillsImages/r.webp';
import php from '../../assets/skillsImages/php.webp';
import prolog from '../../assets/skillsImages/prolog.webp';
import bash from '../../assets/skillsImages/bash.webp';
import assembly from '../../assets/skillsImages/assembly.webp';
import react from '../../assets/skillsImages/react.webp';
import vue from '../../assets/skillsImages/vue.webp';
import numPy from '../../assets/skillsImages/numpy.webp';
import tensorFlow from '../../assets/skillsImages/tensorflow.webp';
import net from '../../assets/skillsImages/net.webp';
import git from '../../assets/skillsImages/git.webp';
import docker from '../../assets/skillsImages/docker.webp';
import visualStudio from '../../assets/skillsImages/visualstudio.webp';
import excel from '../../assets/skillsImages/excel.webp';
import figma from '../../assets/skillsImages/figma.webp';
import unity from '../../assets/skillsImages/unity.webp';
import photoShop from '../../assets/skillsImages/photoshop.webp';
import arrow from '../../assets/arrow.webp';

const image1 = [python, cSharp, java, cPlusPlus, c, html, css, javaScript, racket, sql, matLab, r, php, prolog, bash, assembly];
const image2 = [react, vue, numPy, tensorFlow];
const image3 = [net, git, docker, visualStudio, excel, figma, unity, photoShop];

function Skills() {
  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      <img className="rightArrowImage" src={arrow} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      <img className="leftArrowImage" src={arrow} />
    </div>
  );

  const [imageIndex, setImageIndex] = useState(0);
  const [images, setImages] = useState(image1);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);

  const setImage1 = () => {
    setImages(image1);
    if (!isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive3) {
      setIsActive3((current) => !current);
    }
  };

  const setImage2 = () => {
    setImages(image2);
    if (!isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive3) {
      setIsActive3((current) => !current);
    }
  };

  const setImage3 = () => {
    setImages(image3);
    if (!isActive3) {
      setIsActive3((current) => !current);
    }
    if (isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive2) {
      setIsActive2((current) => !current);
    }
  };

  const settings = {
    infinite: true,
    lazyLoad: true,
    focusOnSelect: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  /* eslint-disable react/jsx-props-no-spreading */
  return (
    <div className="skillsContainer" id="skills">
      <div className="skillsTextContainer">
        <h1 className="skillsText">My Skills</h1>
        <div className="skillsMenu">
          {toggleMenu
            ? <AiOutlineMinus color="#ffff" size={27} onClick={() => setToggleMenu(false)} />
            : <AiOutlinePlus color="#ffff" size={27} onClick={() => setToggleMenu(true)} />}
          {toggleMenu && (
          <div className="skillsMenuContainer scaleUpCenter" onMouseLeave={() => setToggleMenu(false)}>
            <div className="skillsMenuButtonsContainer">
              <p><button className="skillsMenuButtons" type="button" style={{ color: isActive1 ? '#0096FF' : 'white' }} onClick={() => setImage1()}>Languages</button></p>
              <p><button className="skillsMenuButtons" type="button" style={{ color: isActive2 ? '#0096FF' : 'white' }} onClick={() => setImage2()}>Libraries/Frameworks</button></p>
              <p><button className="skillsMenuButtons" type="button" style={{ color: isActive3 ? '#0096FF' : 'white' }} onClick={() => setImage3()}>Softwares</button></p>
            </div>
          </div>
          )}
        </div>
      </div>
      <div className="skillsSlider">
        <Slider {...settings}>
          {images.map((img, idx) => (
            <div className={idx === imageIndex ? 'slide activeSlide' : 'slide'}>
              <img src={img} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
