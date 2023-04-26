import './Projects.css';
import chattyTherapy from '../../img/chatty-learning.png';
import send from '../../img/send.jpeg';
import medivet from '../../img/medivet.jpg';
import runpath from '../../img/runpath.png';

function Projects() {
  return (
    <section className="section">
      <h2 aria-label="Projects" className="subtitle">Projects</h2>
      <p>I have worked on numerous projects which you can find below.</p>
      <div className="project">
        <img src={chattyTherapy} alt="Chatty Therapy" className="project-logo"/>
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
        <img src={send} alt="Send" className="logo-round project-logo"/>
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
        <img src={medivet} alt="Medivet" className="project-logo"/>
        <div aria-label="Medivet project" className="project-description">
          <div className="project-details">
            Medivet needed a Frontend Developer to join their team in order to <span className="bold">rewrite their whole desktop application</span> used by vets and vet nurses in clinics.
          </div>
          <div className="project-details">
            While working with Medivet, I rewrote the <span className="bold">pet details page</span> used by medical staff to <span className="bold">register a pet</span> in the system.
            I also rewrote the frontend for <span className="bold">medication/medical supplies invoice</span> functionality.
          </div>
        </div>
      </div>
      <div className="project">
        <img src={runpath} alt="Runpath" className="project-logo"/>
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
        Sensat
      </div>
      <div className="project">
        Polestar
      </div>
      <div className="project">
        LivingMap
      </div>
    </section>
  )
}

export default Projects;
