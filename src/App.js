import './App.css';
import downArrow from './img/down-arrow.svg';
import Profile from './components/profile/Profile';
import scrollIntoView from 'scroll-into-view';
import React from "react";

class App extends React.Component {
  state;

  constructor(props) {
    super(props);
    this.state = {
      scroll: true
    };
  }

  scrollToProfile = () => {
    scrollIntoView(document.getElementsByClassName('profile')[0]);
  }

  toggleScroll = (menuOpen) => {
    this.setState({ scroll: !menuOpen });
  }

  render() {
    return (
      <div className={this.state.scroll ? "app" : "app noscroll"}>
        <header className="header">
          <h1 className="title">Cécile Ferrier</h1>
          <h2 className="role">Frontend Developer</h2>
          <img src={downArrow} alt="Go to profile" className="down-arrow" onClick={this.scrollToProfile}/>
        </header>
        <Profile menuOpen={(menuOpen) => this.toggleScroll(menuOpen)}/>
      </div>
    );
  }
}

export default App;
