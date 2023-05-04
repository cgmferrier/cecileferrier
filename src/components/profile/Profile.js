import './Profile.css';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import close from '../../img/close.png';
import logo from '../../img/CF.svg';
import info from '../../img/info.png';
import menuIcon from '../../img/burger-bar.png';
import projects from '../../img/projects.png';
import skills from '../../img/skills.png';
import contact from '../../img/contact.png';
import scrollIntoView from 'scroll-into-view';
import { cl } from 'dynamic-class-list';
import { useEffect, useState } from 'react';

const Profile = () => {

  const [ menuOpen, setMenuOpen ] = useState(false);
  const [ sticky, setSticky ] = useState(false);

  const handleStickyNavbar = () => {
    const screenHeight = window.innerHeight;
    const scrollPosition = window.scrollY;

    setSticky(scrollPosition > screenHeight);
  }

  const scrollTo = (className) => {
    scrollIntoView(document.getElementsByClassName(className)[0], { align: { topOffset: 93 }});
    toggleMenu();
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleStickyNavbar);

    return () => {
      window.removeEventListener('scroll', handleStickyNavbar);
    }
  }, [sticky]);

  return (
    <section className="profile">
      <div className={cl({ 'profile-header': true, sticky }) }>
        <div className="logo">
          <img src={logo} alt="Cecile Ferrier" className="nav-img" />
          <div className="nav-title">Cécile Ferrier</div>
        </div>
        <img src={menuIcon} alt="Menu" className="menu" onClick={toggleMenu}/>
      </div>
      <ul className={cl({ navbar: true, open: menuOpen, sticky })} aria-label="Navigation">
        <li><img src={close} alt="Close menu" className="close" onClick={toggleMenu}/></li>
        <li aria-label="About" className="nav-item" onClick={() => scrollTo('profile-header')}>
          <img src={info} alt="Info icon" className="nav-logo"/>
          About
        </li>
        <li aria-label="Projects" className="nav-item" onClick={() => scrollTo('projects')}>
          <img src={projects} alt="Projects icon" className="nav-logo"/>
          Projects
        </li>
        <li aria-label="Skills" className="nav-item" onClick={() => scrollTo('skills')}>
          <img src={skills} alt="Skills icon" className="nav-logo"/>
          Skills
        </li>
        <li aria-label="Contact" className="nav-item" onClick={() => scrollTo('contact')}>
          <img src={contact} alt="Contact icon" className="nav-logo"/>
          Contact
        </li>
      </ul>
      <About sticky={sticky} />
      <Projects />
      <Skills />
      <Contact />
    </section>
  );
}

export default Profile;
