import './App.css';
import downArrow from './img/down-arrow.svg';
import Profile from './components/profile/Profile';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Cécile Ferrier</h1>
        <h2 className="role">Frontend Developer</h2>
        <img src={downArrow} alt="Go to profile" className="down-arrow"/>
      </header>
      <Profile />
    </div>
  );
}

export default App;
