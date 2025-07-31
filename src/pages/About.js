import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-header">
        <h2>About Me</h2>
        <p>
          I'm a passionate <strong>Full Stack Developer</strong> skilled in <strong>Java, React.js, Node.js, and MySQL</strong>. 
          I have hands-on experience developing scalable web applications, RESTful APIs, and deploying them on cloud platforms 
          like <strong>AWS & Azure</strong>. I'm driven by problem-solving, building clean UI, and turning ideas into code.
        </p>
      </section>

      <section className="education-section">
        <h3>🎓 Education</h3>
        <ul>
          <li><strong>MCA</strong> – Kristu Jayanti College (2025) – CGPA: 8.06/10</li>
          <li><strong>BCA</strong> – Vagdevi Vilas College – CGPA: 8.35/10</li>
          <li><strong>PUC</strong> – Whitefield Global PU College – 61.83%</li>
          <li><strong>SSLC</strong> – Govt. High School Immadihalli – 85.12%</li>
        </ul>
      </section>

      <section className="skills-section">
        <h3>🛠️ Technical Skills</h3>
        <div className="skill-tags">
          <span>Java</span>
          <span>Python</span>
          <span>React.js</span>
          <span>Node.js</span>
          <span>Express.js</span>
          <span>MySQL</span>
          <span>MongoDB</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </section>

      <section className="tools-section">
        <h3>🔧 Tools & Platforms</h3>
        <div className="skill-tags">
          <span>GitHub</span>
          <span>VS Code</span>
          <span>Postman</span>
          <span>Figma</span>
          <span>AWS</span>
          <span>Azure</span>
          <span>Firebase</span>
        </div>
      </section>
    </div>
  );
};

export default About;
