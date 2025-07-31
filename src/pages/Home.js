import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import profileImage from '../assets/profile.jpg';
import bgImage from '../assets/bg-home.png'; // ✅ Import background image

const Home = () => {
  return (
    <div
      className="home-container"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 71, 161, 0.7), rgba(13, 71, 161, 0.7)), url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '60px 20px',
        textAlign: 'center'
      }}
    >
      <img src={profileImage} alt="Mamatha H" className="profile-photo" />
      <h1>Hi, I'm Mamatha H</h1>
      <p className="home-tagline">
        Software Developer Intern @Sherpa Vector | MCA '25 | Full Stack Developer (Python, Java, React.js, Node.js, MySQL) | AWS & Azure Certified | Cloud Enthusiast
      </p>
      <Link to="/projects" className="home-button">View My Projects</Link>
    </div>
  );
};

export default Home;
