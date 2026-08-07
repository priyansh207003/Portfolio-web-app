import React from 'react';
import './Mywork.css';
import myworkData from '../../assets/mywork_data.jsx';

const projects = [
  { 
    name: 'AI Smart Waste Segregation System', 
    category: 'Edge AI · Computer Vision', 
    tags: ['Jetson Nano', 'PyTorch', 'OpenCV', 'ESP32'],
    link: 'https://github.com/priyansh207003/Smart-Waste-Segregation-System',
    desc: 'Co-authored published research chapter (2026). Achieved 90% classification accuracy.'
  },
  { 
    name: 'Clinic-GO Flow Management', 
    category: 'Full-Stack · Smart Healthcare', 
    tags: ['FastAPI', 'IBM Watson', 'Python'],
    link: 'https://priyansh207003.github.io/Clinic-Go/index.html',
    desc: 'Built for IBM Granite Hackathon 2025 for automated clinic patient flow.'
  },
  { 
    name: 'Health-Bridge Platform', 
    category: 'Web App · REST APIs', 
    tags: ['React.js', 'Express.js', 'Node.js'],
    link: 'https://priyansh207003.github.io/Health-Bridge/',
    desc: 'Comprehensive web interface bridging patient data and remote healthcare analytics.'
  },
  { 
    name: 'Smart Accident Safety & Alert System', 
    category: 'Embedded IoT · Safety', 
    tags: ['ESP32', 'GSM', 'GPS', 'Impact Sensor'],
    link: 'https://github.com/priyansh207003/Smart-Human-Life-Safety-and-Alert-System-for-Vehicle-Accident-Victims',
    desc: 'Real-time vehicle crash telemetry and automated emergency alert dispatch.'
  },
  { 
    name: 'TinyML Food Spoilage Detection', 
    category: 'TinyML · Embedded AI', 
    tags: ['Arduino BLE 33', 'Edge Impulse', 'MIT App Inventor'],
    link: 'https://github.com/priyansh207003/Food-spoilage-detection-and-prediction-using-arduino-nano-ble-33-ml-kit',
    desc: 'On-device machine learning model with 85% accuracy and 40% latency reduction.'
  },
  { 
    name: 'Industrial IoT Machine Telemetry', 
    category: 'IIoT · Live Dashboards', 
    tags: ['Vicharak Axon', 'MQTT', 'WebSockets', 'React'],
    link: null,
    desc: 'Deployed across 5 production machines at ManaraLabs trimming fault-detection time.'
  },
];

const Mywork = () => (
  <section id="work" className="mywork">
    <div className="mywork-title">
      <h1>Selected Projects</h1>
      <p>Innovative hardware, full-stack, and edge AI engineering solutions.</p>
    </div>
    <div className="mywork-container">
      {myworkData.map((work, index) => {
        const project = projects[index];
        return (
          <article className="project-card" key={project.name}>
            <div className="project-img-wrapper">
              <img src={work.w_img} alt={project.name} />
              <div className="project-tag-pill">{project.category}</div>
            </div>
            
            <div className="project-content">
              <span className="project-num">0{index + 1}</span>
              <h2>{project.name}</h2>
              <p className="project-desc">{project.desc}</p>
              
              <div className="project-tech-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="project-tech-tag">{tag}</span>
                ))}
              </div>

              <div className="project-action">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="project-btn">
                    View Code & Demo ↗
                  </a>
                ) : (
                  <span className="project-link-pending">Industrial Deployment</span>
                )}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  </section>
);

export default Mywork;
