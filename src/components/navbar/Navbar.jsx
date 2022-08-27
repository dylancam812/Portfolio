import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import navbarLogo from '../../assets/navbarLogo.webp';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const setColor1 = () => {
    if (!isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive3) {
      setIsActive3((current) => !current);
    }
    if (isActive4) {
      setIsActive4((current) => !current);
    }
  };

  const setColor2 = () => {
    if (!isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive3) {
      setIsActive3((current) => !current);
    }
    if (isActive4) {
      setIsActive4((current) => !current);
    }
  };

  const setColor3 = () => {
    if (!isActive3) {
      setIsActive3((current) => !current);
    }
    if (isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive4) {
      setIsActive4((current) => !current);
    }
  };

  const setColor4 = () => {
    if (!isActive4) {
      setIsActive4((current) => !current);
    }
    if (isActive1) {
      setIsActive1((current) => !current);
    }
    if (isActive2) {
      setIsActive2((current) => !current);
    }
    if (isActive3) {
      setIsActive3((current) => !current);
    }
  };

  return (
    <div className="navbar">
      <div className="navbarContainer">
        <div className="navbarLogo">
          <a href="https://github.com/dylancam812/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Logo"><img src={navbarLogo} /></a>
        </div>
        <div className="navbarLinksContainer">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Projects">Projects</Link></p>
          <p><Link to="/Skills">Skills</Link></p>
          <p><Link to="/Contact">Contact</Link></p>
        </div>
      </div>
      <div className="navbarSocials">
        <p><a href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github"><AiFillGithub /></a></p>
        <p><a href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><AiFillLinkedin /></a></p>
      </div>
      <div className="navbarMenu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} />
          : <RiMenu3Line color="#fff" size={27} onMouseEnter={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbarMenuContainer scaleUpCenter" onMouseLeave={() => setToggleMenu(false)}>
          <div className="navbarMenuLinksContainer">
            <p className="navbarMenuLinks"><Link to="/" style={{ color: isActive1 ? '#0096FF' : 'white' }} onClick={() => setColor1()}>Home</Link></p>
            <p className="navbarMenuLinks"><Link to="/Projects" style={{ color: isActive2 ? '#0096FF' : 'white' }} onClick={() => setColor2()}>Projects</Link></p>
            <p className="navbarMenuLinks"><Link to="/Skills" style={{ color: isActive3 ? '#0096FF' : 'white' }} onClick={() => setColor3()}>Skills</Link></p>
            <p className="navbarMenuLinks"><Link to="/Contact" style={{ color: isActive4 ? '#0096FF' : 'white' }} onClick={() => setColor4()}>Contact</Link></p>
          </div>
          <div className="navbarMenuSocials">
            <p className="navbarMenuLogo"><a href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github"><AiFillGithub /></a></p>
            <p className="navbarMenuLogo"><a href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><AiFillLinkedin /></a></p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
