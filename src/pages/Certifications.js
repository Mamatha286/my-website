import React from 'react';
import './Certifications.css';
import aws from '../assets/aws.png';
import magicbus from '../assets/magicbus.png';
import python from '../assets/python.png';
import ibm from '../assets/ibm.png';

const certifications = [
  {
    title: 'AWS Academy Cloud Foundations',
    platform: 'AWS / Kristu Jayanti College',
    date: 'August 2024',
    img: aws,
    link: ''
  },
  {
    title: 'Magic Bus: Connect with Work Program',
    platform: 'Magic Bus Foundation',
    date: 'June 2023',
    img: magicbus,
    link: ''
  },
  {
    title: 'Python for Beginners',
    platform: 'Infosys Springboard',
    date: 'February 2024',
    img: python,
    link: 'https://verify.onwingspan.com/'
  },
  {
    title: 'Prompt Engineering for Everyone',
    platform: 'IBM Skills Network',
    date: 'October 2024',
    img: ibm,
    link: 'https://courses.cognitiveclass.ai/certificates/a54888272d3a4b868acf663d24e151e1'
  }
];

const Certifications = () => {
  return (
    <div className="certifications-container">
      <h2>My Certifications</h2>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.img} alt={cert.title} className="cert-image" />
            <h3>{cert.title}</h3>
            <p>{cert.platform} • {cert.date}</p>
            {cert.link && (
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
