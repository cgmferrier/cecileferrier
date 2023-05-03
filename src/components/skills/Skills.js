import './Skills.css';
import angular from '../../img/angular.png';
import javascript from '../../img/javascript.png';
import ngrx from '../../img/ngrx.png';
import react from '../../img/react.svg';
import redux from '../../img/redux.svg';
import rxjs from '../../img/rxjs.png';
import sass from '../../img/sass.svg';
import typescript from '../../img/typescript.png';

function Skills() {
  return (
    <section className="section skills">
      <h2 aria-label="Skills" className="subtitle">Skills</h2>
      <div className="skillset">
        <div className="skill-col">
          <div className="skill-cell">
            <img src={javascript} alt="Javascript" aria-label="Javascript" title="Javascript" className="skill-logo"/>
            Javascript
          </div>
          <div className="skill-cell">
            <img src={typescript} alt="TypeScript" aria-label="TypeScript" title="TypeScript" className="skill-logo"/>
            TypeScript
          </div>
          <div className="skill-cell">
            <img src={angular} alt="Angular" aria-label="Angular" title="Angular" className="skill-logo"/>
            Angular
          </div>
          <div className="skill-cell">
            <img src={react} alt="React" aria-label="React" title="React" className="skill-logo react"/>
            React
          </div>
        </div>
        <div className="skill-col">
          <div className="skill-cell">
            <img src={ngrx} alt="NgRx" aria-label="NgRx" title="NgRx" className="skill-logo"/>
            NgRx
          </div>
          <div className="skill-cell">
            <img src={redux} alt="Redux" aria-label="Redux" title="Redux" className="skill-logo"/>
            Redux
          </div>
          <div className="skill-cell">
            <img src={rxjs} alt="RxJS" aria-label="RxJS" title="RxJS" className="skill-logo"/>
            RxJS
          </div>
          <div className="skill-cell">
            <img src={sass} alt="Sass" aria-label="Sass" title="Sass" className="skill-logo"/>
            Sass
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills;
