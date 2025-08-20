import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { AiFillGithub, AiFillLinkedin, AiFillFileText } from 'react-icons/ai';
import navbarLogo from '../../assets/navbarLogo.webp';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeRoute, setActiveRoute] = useState('');
  const isHomePage = window.location.pathname === '/';

  const handleMenuClick = () => {
    setToggleMenu(true);
    setActiveRoute(window.location.pathname);
  };

  const handleRouteClick = (route) => {
    setActiveRoute(route);
    if (window.innerWidth <= 490) setToggleMenu(false);
  };

  const getNavLinkColor = (route) => (activeRoute === route ? '#0096FF' : 'white');

  return (
    <div className={`navbar ${isHomePage ? 'navbar-home' : ''}`}>
      <div className="navbarContainer">
        <div className="navbarLogo">
          <a href="https://github.com/dylancam812/Portfolio" target="_blank" rel="noopener noreferrer" aria-label="Logo">
            <img src={navbarLogo} alt="Logo" />
          </a>
        </div>
        <div className="navbarLinksContainer">
          <p><Link to="/">Home</Link></p>
          <p><Link to="/Projects">Projects</Link></p>
          <p><Link to="/About">About</Link></p>
          <p><Link to="/Contact">Contact</Link></p>
        </div>
      </div>
      <div className="navbarSocials">
        <p>
          <a className="navbarSocialsGitHub" href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github">
            <AiFillGithub />
          </a>
        </p>
        <p>
          <a className="navbarSocialsLinkedIn" href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
            <AiFillLinkedin />
          </a>
        </p>
        <p>
          <a className="navbarSocialsResume" href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <AiFillFileText />
          </a>
        </p>
      </div>
      <div className="navbarMenu">
        {toggleMenu ? (
          <RiCloseLine color="#fff" size={32} onClick={() => setToggleMenu(false)} />
        ) : (
          <RiMenu3Line color="#fff" size={32} onClick={handleMenuClick} />
        )}
        {toggleMenu && (
          <div className="navbarMenuContainer scaleUpCenter" onMouseLeave={() => setToggleMenu(false)}>
            <div className="navbarMenuLinksContainer">
              <p className="navbarMenuLinks">
                <Link
                  to="/"
                  style={{ color: getNavLinkColor('/') }}
                  onClick={() => handleRouteClick('/')}
                >
                  Home
                </Link>
              </p>
              <p className="navbarMenuLinks">
                <Link
                  to="/Projects"
                  style={{ color: getNavLinkColor('/Projects') }}
                  onClick={() => handleRouteClick('/Projects')}
                >
                  Projects
                </Link>
              </p>
              <p className="navbarMenuLinks">
                <Link
                  to="/About"
                  style={{ color: getNavLinkColor('/About') }}
                  onClick={() => handleRouteClick('/About')}
                >
                  About
                </Link>
              </p>
              <p className="navbarMenuLinks">
                <Link
                  to="/Contact"
                  style={{ color: getNavLinkColor('/Contact') }}
                  onClick={() => handleRouteClick('/Contact')}
                >
                  Contact
                </Link>
              </p>
            </div>
            <div className="navbarMenuSocials">
              <p className="navbarMenuLogo">
                <a className="navbarMenuGitHub" href="https://github.com/dylancam812" target="_blank" rel="noopener noreferrer" aria-label="Github">
                  <AiFillGithub />
                </a>
                <a className="navbarMenuLinkedIn" href="https://www.linkedin.com/in/dylan-camacho/" target="_blank" rel="noopener noreferrer" aria-label="Linkedin">
                  <AiFillLinkedin />
                </a>
                <a className="navbarMenuResume" href="../../Resume_Dylan_Camacho.pdf" target="_blank" rel="noopener noreferrer" aria-label="Resume">
                  <AiFillFileText />
                </a>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
