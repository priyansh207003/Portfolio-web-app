import React from 'react';
import './About.css';
import Profile from '../../assets/developer.png';

const skills = [
  { name: 'ESP32 & Microcontrollers', level: '95%' },
  { name: 'React.js & Full-Stack Web', level: '90%' },
  { name: 'FastAPI, Node & REST APIs', level: '90%' },
  { name: 'MQTT, WebSockets & TCP/IP', level: '92%' },
  { name: 'TinyML & Edge AI Impulse', level: '85%' },
  { name: 'PyTorch & OpenCV Vision', level: '88%' },
  { name: 'MongoDB & PostgreSQL', level: '85%' },
  { name: 'Docker, AWS & Linux', level: '80%' },
];

const achievements = [
  ['01', 'Published Research Book Chapter', 'Co-authored a peer-reviewed research chapter on AI-enabled waste segregation and monitoring published in Advances in Electronics and Communication Systems (Volume 6, 2026).'],
  ['02', 'Best Project Award Winner', 'Won the Best Project Award at the National Science Day project exhibition for an AI- and IoT-based hardware-software solution.'],
  ['03', 'ManaraLabs IoT Engineer Intern', 'Designed IIoT solutions with ESP32 & Vicharak Axon across 5 production machines, cutting reporting time by 20% and fault detection time by 15%.'],
  ['04', 'TinyML Food Spoilage Edge AI', 'Prototyped on-device food spoilage detection model on Arduino Nano 33 BLE Sense with 85% inference accuracy and 40% lower latency.'],
  ['05', 'BSNL 5G Technology Certification', 'Completed hands-on certification training in 5G Communication Technology conducted by BSNL in Jabalpur.'],
  ['06', 'STEM Hardware & Software Mentor', 'Trained 50+ students & educators at STEM Learning in Arduino and robotics, boosting practical skill retention by 30%.'],
];

const About = () => (
  <section id="about" className="about">
    <div className="about-title">
      <h1>About Me</h1>
    </div>
    
    <div className="about-section">
      <div className="about-left">
        <img src={Profile} alt="Developer working on IoT and Full-Stack code" />
      </div>
      
      <div className="about-right">
        <div className="about-para">
          <p>
            I’m an Electronics and Communication Engineering graduate (B.Tech 2022–2026, CGPA 8.0/10) and IoT Implementation Engineer specializing in bridging hardware microcontrollers with scalable full-stack web platforms.
          </p>
          <p>
            My experience spans industrial IoT telemetry (ESP32, Vicharak Axon, Raspberry Pi), edge AI vision systems (Jetson Nano, TinyML), high-concurrency microservices (FastAPI, Fastify, Node.js), and modern responsive dashboards (React.js, WebSockets, REST APIs).
          </p>
        </div>

        <div className="about-skills">
          {skills.map((skill) => (
            <div className="about-skill" key={skill.name}>
              <div className="skill-info">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-pct">{skill.level}</span>
              </div>
              <div className="skill-bar-bg">
                <div className="skill-bar-fill" style={{ width: skill.level }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    <div className="about-achievements">
      {achievements.map(([number, title, description]) => (
        <article className="about-achievement" key={number}>
          <span className="achievement-number">{number}</span>
          <h1>{title}</h1>
          <p>{description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default About;
