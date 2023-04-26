import './About.css';

function About() {
  return (
    <section className="section">
      <h2 aria-label="About" className="subtitle">About</h2>
      <p className="justify">
        I am a Frontend Developer with <span className="bold">over 10 years experience</span>. I love my job and more specifically the fact that I can work in any industry and help lots of companies achieve their goals.
      </p>
      <p className="justify">
        I have worked with numerous companies, each of them in their own industry: from <span className="bold">wayfinding</span>,
        to <span className="bold">maritime</span> as well as <span className="bold">finance</span> and <span className="bold">medical</span>.
        No matter the industry your company is in, let's have a chat and I'll help you get to where you want your <span className="bold">web application</span> to be.
      </p>
    </section>
  )
}

export default About;
