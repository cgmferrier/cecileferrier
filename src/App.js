import './App.css';
import downArrow from './img/down-arrow.svg';
import Profile from './components/profile/Profile';
import scrollIntoView from 'scroll-into-view';
import React from "react";

class App extends React.Component {
  scrollToProfile = () => {
    scrollIntoView(document.getElementsByClassName('profile')[0])
  }

  render() {
    return (
      <div className="app">
        <header className="header">
          <h1 className="title">Cécile Ferrier</h1>
          <h2 className="role">Frontend Developer</h2>
          <img src={downArrow} alt="Go to profile" className="down-arrow" onClick={this.scrollToProfile}/>
        </header>
        <Profile />
      </div>
    );
  }
}

export default App;
