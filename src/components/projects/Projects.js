import './Projects.css';
import chattyTherapy from '../../img/chatty-learning.png';
import livingmap from '../../img/livingmap.png';
import medivet from '../../img/medivet.jpg';
import polestar from '../../img/polestar.png';
import runpath from '../../img/runpath.png';
import send from '../../img/send.jpeg';
import sensat from '../../img/sensat.svg';

function Projects() {
  return (
    <section className="section projects">
      <h2 aria-label="Projects" className="subtitle">Projects</h2>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://chatty-learning.com/" aria-label="Chatty Therapy website link" target="_blank" rel="noopener noreferrer">
            <img src={chattyTherapy} aria-label="Chatty Therapy logo" alt="Chatty Therapy" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Chatty therapy project" className="project-description">
          <div className="project-details">
            I have helped the team at Chatty Therapy on a few occasions. They needed my help to <span className="bold">implement</span> a game similar to the well known <span className="bold">Kim's game</span>.
            Three images chosen amongst a known set would be displayed randomly.
          </div>
          <div className="project-details">
            After the game has been started, one image would be hidden and three new images would then be displayed below the initial set.
            Out of these three images, the children would have to pick the correct one that had initially been displayed.
          </div>
          <div className="project-details">
            I was initially hired by Chatty Therapy as a <span className="bold">consultant</span> to give professional advice on how to <span className="bold">architecture their codebase efficiently</span>.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://send.technology/" aria-label="Send website link" target="_blank" rel="noopener noreferrer">
            <img src={send} alt="Send" aria-label="Send logo" className="logo-round project-logo"/>
          </a>
        </div>
        <div aria-label="Send project" className="project-description">
          <div className="project-details">
            My role as part of the Team at <span className="bold">Send</span>, was to help implement new features for their Workbench application directed to underwriters.
            I have worked on multiple <span className="bold">features</span> which are now part of their <span className="bold">core application</span>.
          </div>
          <div className="project-details">
            I have implemented a <span className="bold">submission process</span> to allow underwriters to <span className="bold">input and save data against a risk</span>.
          </div>
          <div className="project-details">
            One of my main focus was also to <span className="bold">extract data from PDF</span> documents to <span className="bold">inject into a form</span> in order for underwriters to amend this data.
          </div>
          <div className="project-details">
            One main feature of Send's application is to <span className="bold">input data in a form</span> and use it in many different ways.
          </div>
          <div className="project-details">
            To <span className="bold">avoid process redundancies</span> for developers, and extra back and forth from insurance companies, I implemented a <span className="bold">dynamic form generation tool</span>.
          </div>
          <div className="project-details">
            After <span className="bold">fetching a configuration file from the server</span>, the application would read it and <span className="bold">generate the different form inputs</span> on the page.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://www.medivet.co.uk/" aria-label="Medivet website link" target="_blank" rel="noopener noreferrer">
            <img src={medivet} alt="Medivet" aria-label="Medivet logo" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Medivet project" className="project-description">
          <div className="project-details">
            Medivet needed a Frontend Developer to join their team in order to <span className="bold">rewrite their whole desktop application</span> used by vets and vet nurses in clinics.
          </div>
          <div className="project-details">
            While working with Medivet, I rewrote the <span className="bold">pet details page</span> used by medical staff to <span className="bold">register a pet</span> in the system.
            I also rewrote the frontend for their <span className="bold">medication/medical supplies billing</span> functionality.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://www.runpath.com/" aria-label="Runpath website link" target="_blank" rel="noopener noreferrer">
            <img src={runpath} alt="Runpath" aria-label="Runpath logo" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Runpath project" className="project-description">
          <div className="project-details">
            While working at Runpath, I implemented a web application targeted to <span className="bold">small and medium companies</span>.
          </div>
          <div className="project-details">
            This application used <span className="bold">Open Banking</span> to retrieve the credit score for these companies, and the result was then displayed to them through an <span className="bold">animated SVG</span>.
          </div>
          <div className="project-details">
            I was also assigned to building an <span className="bold">internal web application</span>, allowing non tech staff to <span className="bold">enter and save data when onboarding clients</span>.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://www.sensat.co/" aria-label="Sensat website link" target="_blank" rel="noopener noreferrer">
            <img src={sensat} alt="Sensat" aria-label="Sensat logo" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Sensat project" className="project-description">
          <div className="project-details">
            Sensat hired me to <span className="bold">bring to life</span> the first version of their product: a <span className="bold">digital twin</span> of a construction site in London.
          </div>
          <div className="project-details">
            One of my responsibilities with the team was to <span className="bold">tutor junior developers</span>, and to introduce <span className="bold">coding standards and best practices</span>.
          </div>
          <div className="project-details">
            I also did some <span className="bold">Agile consulting</span> to help the team work with this methodology.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://www.polestarglobal.com/" aria-label="Polestar website link" target="_blank" rel="noopener noreferrer">
            <img src={polestar} alt="Polestar" aria-label="Polestar logo" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Polestar project" className="project-description">
          <div className="project-details">
            I joined the team at Polestar to <span className="bold">rewrite their codebase</span>: moving <span className="bold">from Backbone to Angular</span>.
            Their web application allowed <span className="bold">maritime companies to track</span> (amongst other things) their <span className="bold">ships at sea</span>.
          </div>
          <div className="project-details">
            Working in an Agile environment, I also rewrote some of the app's functionalities to be more <span className="bold">performant and user-friendly</span>.
          </div>
        </div>
      </div>
      <div className="project">
        <div className="project-logo__container">
          <a href="https://www.livingmap.com/" aria-label="Living Map website link" target="_blank" rel="noopener noreferrer">
            <img src={livingmap} alt="Living Map" aria-label="Living Map" className="project-logo"/>
          </a>
        </div>
        <div aria-label="Living Map project" className="project-description">
          <div className="project-details">
            Living Map hired me to work on their project for <span className="bold">Heathrow terminal 5</span>.
            The project was to create an <span className="bold">interactive map</span> that would be then used by passengers on <span className="bold">giant touch screens</span>.
          </div>
          <div className="project-details">
            Another project I worked on with them was to create an <span className="bold">interactive map of the Met museum in NYC</span>.
          </div>
          <div className="project-details">
            Each <span className="bold">gallery and room would be displayed</span>, and when interacted with, <span className="bold">animated elements</span> would show visitors information about that room at this date.
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;
