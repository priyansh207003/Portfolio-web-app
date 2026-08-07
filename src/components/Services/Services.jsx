import React, { useState } from 'react';
import './Services.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import services_data from '../../assets/services_data.jsx';
import arrow_icon from '../../assets/arrow_icon.svg';

const Services = () => {
  const [expandedServices, setExpandedServices] = useState({});

  const toggleExpand = (s_no, e) => {
    e.stopPropagation();
    setExpandedServices(prev => ({
      ...prev,
      [s_no]: !prev[s_no]
    }));
  };

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <div className="services-container">
        {services_data.map((service) => {
          const isExpanded = !!expandedServices[service.s_no];

          return (
            <div 
              key={service.s_no} 
              className={`services-format ${isExpanded ? 'is-expanded' : ''}`}
              onMouseMove={handleMouseMove}
              onClick={(e) => toggleExpand(service.s_no, e)}
            >
              <div className="services-card-header">
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
              </div>
              
              <p className="services-short-desc">{service.s_desc}</p>

              {isExpanded && (
                <div className="services-expanded-content">
                  <div className="services-full-desc">
                    <p>{service.full_desc}</p>
                  </div>

                  {service.impact && (
                    <div className="services-impact-badge">
                      <span>{service.impact}</span>
                    </div>
                  )}

                  {service.highlights && service.highlights.length > 0 && (
                    <div className="services-highlights">
                      <h4>Resume Highlights & Achievements:</h4>
                      <ul>
                        {service.highlights.map((highlight, idx) => (
                          <li key={idx}>
                            <span className="bullet-icon">▸</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.technologies && service.technologies.length > 0 && (
                    <div className="services-tech-stack">
                      <h4>Technologies & Tools:</h4>
                      <div className="tech-tags">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div 
                className="services-readmore"
                onClick={(e) => toggleExpand(service.s_no, e)}
              >
                <p>{isExpanded ? 'Show Less' : 'Read More'}</p>
                <img 
                  src={arrow_icon} 
                  alt="Arrow icon" 
                  className={`arrow-img ${isExpanded ? 'rotated' : ''}`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
