import './Contact.css';
import github from '../../img/github.svg';
import email from '../../img/email.png';
import linkedin from '../../img/linkedin.png';

function Contact() {
  return (
    <section className="section">
      <h2 aria-label="Contact" className="subtitle">Contact</h2>
      <div className="contact">
        <a href="https://www.linkedin.com/in/cecileferrier/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="Linkedin" aria-label="Linkedin" title="Linkedin" className="contact-logo"/>
        </a>
        <a href="https://github.com/cgmferrier" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="Github" aria-label="Github" title="Github" className="contact-logo"/>
        </a>
        <a href="mailto:cgmferrier@gmail.com">
          <img src={email} alt="Email" aria-label="Email" title="Email" className="contact-logo"/>
        </a>
      </div>
    </section>
  );
}

export default Contact;
