import React, { useState } from 'react';
import './Projects.css';
import ProjectModal from '../components/ProjectModal';

// Import project images
import mealmingleImage from '../assets/mealmingle1.png';
import fleetmgmtImage from '../assets/fleetmgmt1.png';
import salonmgmtImage from '../assets/salonmgmt1.png';
import vendorbidImage from '../assets/vendorbid1.png';
import inventoryImage from '../assets/inventory1.png'; // replace with actual image

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "MealMingle",
      image: mealmingleImage,
      summary: "AI powered recipe generator",
      details: "MealMingle generates recipes based on user-inputted ingredients using Google Generative Language API, helping reduce food waste and simplifying meal planning.",
      tech: "React.js, Python, Flask, CSS, Google Generative Language API",
      features: [
        "Ingredient-based AI recipe generation",
        "Recipe details with name, ingredients, instructions, calories",
        "Interactive chatbot for cooking assistance",
        "Responsive UI"
      ],
      github: "https://github.com/Mamatha286/mealminge"
    },
    {
      title: "Prayaan Vihar – Fleet Management System",
      image: fleetmgmtImage,
      summary: "Full stack fleet management app",
      details: "A comprehensive Fleet Management System with role-based dashboards, live tracking, and automated trip, fare, and payout management for vendors, drivers, admins, and clients.",
      tech: "React.js, Node.js, Express.js, MySQL, Google Maps API",
      features: [
        "Role-based user authentication (Admin, Vendor, Driver, Client)",
        "Vehicle and driver management",
        "Client trip booking with dynamic fare calculation",
        "Automated trip assignments and driver payouts",
        "Live GPS tracking",
        "Alerts and notifications",
        "Reports and dashboards"
      ],
      github: "https://github.com/Mamatha286/fleet-management"
    },
    {
      title: "Men Salon Management System",
      image: salonmgmtImage,
      summary: "Salon booking and management app",
      details: "Web app for men salons enabling user appointments, reviews, and full salon management with admin dashboards, invoices, and service listings.",
      tech: "PHP, MySQL, HTML, CSS, Apache2",
      features: [
        "Admin dashboard with customer, appointment, and sales reports",
        "Manage salon services and pages",
        "Approve/reject user appointments",
        "Generate invoices and view reports",
        "User registration, login, booking, cancellation, and history"
      ],
      github: "https://github.com/Mamatha286/salon-management"
    },
    {
      title: "Vendor Management & Tender Bidding System",
      image: vendorbidImage,
      summary: "Tender bidding and vendor management",
      details: "Web application for organizations to manage vendors, post tenders, and handle bids with automated evaluation, notifications, and secure access control.",
      tech: "Java, JSP, Servlets, MySQL, Apache Tomcat",
      features: [
        "Vendor registration with document uploads",
        "Tender creation, categorization, and posting",
        "Online bid submission with document attachments",
        "Automated bid evaluation",
        "Notification system for updates and results",
        "Secure access controls and encryption"
      ],
      github: "https://github.com/Mamatha286/vendor-bidding"
    },
    {
      title: "Inventory Management System",
      image: inventoryImage,
      summary: "Departmental store inventory app",
      details: "Multi-module inventory system for departmental stores with admin, inventory manager, sales person, and sales manager functionalities for billing, stock management, and reporting.",
      tech: "Java, JSP, Servlets, Oracle 10g, Apache Tomcat",
      features: [
        "Admin management of users, items, prices, and categories",
        "Inventory manager module for status, reports, and graphs",
        "Sales person module for search, billing, and cancellations",
        "Sales manager module for daily transactions, returns, summaries",
        "Secure login with password change functionality"
      ],
      github: "https://github.com/Mamatha286/inventory-system"
    }
  ];

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.summary}</p>
            <button className="details-button" onClick={() => openModal(project)}>View Details</button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal project={selectedProject} closeModal={closeModal} />
      )}
    </div>
  );
};

export default Projects;
