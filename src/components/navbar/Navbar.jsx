import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import navbarLogo from '../../assets/navbarLogo.webp';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="navbarMenuContainer scaleUpCenter">
          <div className="navbarMenuLinksContainer">
            <p className="navbarMenuLinks"><Link to="/">Home</Link></p>
            <p className="navbarMenuLinks"><Link to="/Projects">Projects</Link></p>
            <p className="navbarMenuLinks"><Link to="/Skills">Skills</Link></p>
            <p className="navbarMenuLinks"><Link to="/Contact">Contact</Link></p>
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
