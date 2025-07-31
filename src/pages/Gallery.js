import React from 'react';
import './Gallery.css';

import img1 from '../assets/gallery1.png';
import img2 from '../assets/gallery2.png';
import img3 from '../assets/gallery3.png';
//import img4 from '../assets/gallery4.png';


const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2>📸 My Gallery</h2>
      <p>Here are some snapshots of my academic, personal, and proud moments.</p>
      <div className="gallery-grid">
        {[img1, img2, img3].map((img, index) => (
          <img key={index} src={img} alt={`gallery-${index}`} className="gallery-image" />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
