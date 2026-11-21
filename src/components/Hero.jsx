function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot"></span>
          Available for opportunities
        </div>

        <h1>
          Hi, I'm <span>Revathi</span>
          <br />
          Frontend Developer
        </h1>

        <p className="hero-description">
          I build clean, responsive and user-friendly web experiences
          using modern frontend technologies. Passionate about turning
          ideas into beautiful digital products.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects ↗
          </a>

          <a href="#contact" className="secondary-btn">
            Contact Me
          </a>
        </div>

        <div className="social-links">
          <a href="https://github.com/revathiarchunan" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>

          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="code-card">
          <div className="code-header">
            <span className="code-dot red"></span>
            <span className="code-dot yellow"></span>
            <span className="code-dot green"></span>
            <span className="code-title">developer.js</span>
          </div>

          <div className="code-body">
            <p><span className="code-purple">const</span> developer = {"{"}</p>
            <p className="indent">name: <span className="code-green">'Revathi'</span>,</p>
            <p className="indent">role: <span className="code-green">'Frontend Developer'</span>,</p>
            <p className="indent">skills: [<span className="code-green">'React'</span>, <span className="code-green">'JS'</span>],</p>
            <p className="indent">passion: <span className="code-green">'Building web'</span></p>
            <p>{"}"}</p>
          </div>

          <div className="code-footer">
            <span>●</span> Ready to build something great
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;