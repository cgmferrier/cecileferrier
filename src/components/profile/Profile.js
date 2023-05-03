import './Profile.css';
import React from 'react';
import logo from '../../img/CF.svg';
import menuIcon from '../../img/burger-bar.png';
import close from '../../img/close.png';
import About from '../about/About';
import Contact from '../contact/Contact';
import Projects from '../projects/Projects';
import Skills from '../skills/Skills';
import scrollIntoView from "scroll-into-view";

class Profile extends React.Component {
  state;

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  scrollTo = (className) => {
    scrollIntoView(document.getElementsByClassName(className)[0]);
    this.toggleMenu();
  }

  toggleMenu = () => {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  render() {
    return (
      <section className="profile">
        <div className="profile-header">
          <div className="logo">
            <img src={logo} alt="Cecile Ferrier" className="nav-img" />
            <div className="nav-title">Cécile Ferrier</div>
          </div>
          <img src={menuIcon} alt="Menu" className="menu" onClick={this.toggleMenu}/>
        </div>
        <ul className={this.state.menuOpen ? "navbar open" : "navbar"} aria-label="Navigation">
          <li><img src={close} alt="Close menu" className="close" onClick={this.toggleMenu}/></li>
          <li aria-label="About" className="nav-item" onClick={() => this.scrollTo('profile-header')}>About</li>
          <li aria-label="Projects" className="nav-item" onClick={() => this.scrollTo('projects')}>Projects</li>
          <li aria-label="Skills" className="nav-item" onClick={() => this.scrollTo('skills')}>Skills</li>
          <li aria-label="Contact" className="nav-item" onClick={() => this.scrollTo('contact')}>Contact</li>
        </ul>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </section>
    );
  }
}

export default Profile;
