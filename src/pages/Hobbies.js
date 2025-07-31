import React from 'react';
import './Hobbies.css';

const hobbies = [
  {
    title: "💃 Dancing",
    description: "I enjoy expressing myself through dance — it's a blend of rhythm, creativity, and joy.",
  },
  {
    title: "✏️ Sketching",
    description: "Sketching allows me to unwind and express imagination through lines and shades.",
  },
  {
    title: "📚 Reading Books",
    description: "I love reading inspirational and educational books that help me grow personally.",
  },
  {
    title: "💻 Exploring Technology",
    description: "I'm passionate about discovering new tools, platforms, and trends in tech.",
  }
];

const Hobbies = () => {
  return (
    <div className="hobbies-container">
      <h2 className="hobbies-title">🧩 My Hobbies</h2>
      <div className="hobby-grid">
        {hobbies.map((hobby, index) => (
          <div key={index} className="hobby-card">
            <h3>{hobby.title}</h3>
            <p>{hobby.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hobbies;
