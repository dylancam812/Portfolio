import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import navbarLogo from '../../assets/navbarLogo.webp';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  const setColor = () => {
    const { href } = window.location;
    setToggleMenu(true);
    if (href === 'https://dylancamacho.com/') {
      setIsActive2(() => false);
      setIsActive3(() => false);
      setIsActive4(() => false);
      setIsActive1(() => true);
    }
    if (href === 'https://dylancamacho.com/Projects') {
      setIsActive1(() => false);
      setIsActive3(() => false);
      setIsActive4(() => false);
      setIsActive2(() => true);
    }
    if (href === 'https://dylancamacho.com/Skills') {
      setIsActive1(() => false);
      setIsActive2(() => false);
      setIsActive4(() => false);
      setIsActive3(() => true);
    }
    if (href === 'https://dylancamacho.com/Contact') {
      setIsActive1(() => false);
      setIsActive2(() => false);
      setIsActive3(() => false);
      setIsActive4(() => true);
    }
  };
  const setTrue = (setIsActive) => {
    setIsActive1(() => false);
    setIsActive2(() => false);
    setIsActive3(() => false);
    setIsActive4(() => false);
    setIsActive(() => true);
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
        <p><a className="navbarSocialsGitHub" href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github"><AiFillGithub /></a></p>
        <p><a className="navbarSocialsLinkedIn" href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><AiFillLinkedin /></a></p>
        <p><a className="navbarSocialsResume" href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume"><AiFillFileText /></a></p>
      </div>
      <div className="navbarMenu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={32} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={32} onClick={() => setColor()} />}
        {toggleMenu && (
        <div className="navbarMenuContainer scaleUpCenter" onMouseLeave={() => setToggleMenu(false)}>
          <div className="navbarMenuLinksContainer">
            <p className="navbarMenuLinks"><Link to="/" style={{ color: isActive1 ? '#0096FF' : 'white' }} onClick={() => setTrue(setIsActive1)}>Home</Link></p>
            <p className="navbarMenuLinks"><Link to="/Projects" style={{ color: isActive2 ? '#0096FF' : 'white' }} onClick={() => setTrue(setIsActive2)}>Projects</Link></p>
            <p className="navbarMenuLinks"><Link to="/Skills" style={{ color: isActive3 ? '#0096FF' : 'white' }} onClick={() => setTrue(setIsActive3)}>Skills</Link></p>
            <p className="navbarMenuLinks"><Link to="/Contact" style={{ color: isActive4 ? '#0096FF' : 'white' }} onClick={() => setTrue(setIsActive4)}>Contact</Link></p>
          </div>
          <div className="navbarMenuSocials">
            <p className="navbarMenuLogo">
              <a className="navbarMenuGitHub" href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github"><AiFillGithub /></a>
              <a className="navbarMenuLinkedIn" href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin"><AiFillLinkedin /></a>
              <a className="navbarMenuResume" href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume"><AiFillFileText /></a>
            </p>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
