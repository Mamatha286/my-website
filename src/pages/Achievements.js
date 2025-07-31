import React from 'react';
import './Achievements.css';

const Achievements = () => {
  return (
    <div className="achievements-container">
      <h2>🏆 Achievements</h2>

      <div className="achievement-section">
        <h3>🎓 Academic & College Awards</h3>
        <ul>
          <li>2nd Prize – PPT Presentation (2022–23)</li>
          <li>2nd Prize – Science Quiz (2015)</li>
          <li>2nd Prize – Inter-College Coding & Debugging (BCA)</li>
        </ul>
      </div>

      <div className="achievement-section">
        <h3>💡 Personal & Technical Achievements</h3>
        <ul>
          <li>Built a full-stack <strong>Fleet Management System</strong> using MERN stack.</li>
          <li>Created professional <strong>Portfolio Website</strong> using React.js & Tailwind.</li>
          <li>Completed certification in <strong>AWS & Azure Cloud</strong> Fundamentals.</li>
        </ul>
      </div>

      <div className="achievement-section">
        <h3>🌐 GitHub Contributions</h3>
        <ul>
          <li>Active contributor with multiple full-stack projects hosted on <a href="https://github.com/Mamatha286" target="_blank" rel="noreferrer">GitHub</a>.</li>
          <li>Worked on open-source features & issue fixes across 4+ repositories.</li>
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
