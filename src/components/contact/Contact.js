import './Contact.css';
import github from '../../img/github.svg';
import email from '../../img/email.png';
import linkedin from '../../img/linkedin.png';

function Contact() {
  return (
    <section className="section">
      <h2 aria-label="Contact" className="subtitle">Contact</h2>
      <div className="contact">
        <img src={linkedin} alt="Linkedin" aria-label="Linkedin" title="Linkedin" className="contact-logo"/>
        <img src={github} alt="Github" aria-label="Github" title="Github" className="contact-logo"/>
        <img src={email} alt="Email" aria-label="Email" title="Email" className="contact-logo"/>
      </div>
    </section>
  );
}

export default Contact;
