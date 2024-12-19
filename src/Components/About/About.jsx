import './About.css';
import { useEffect, useState } from 'react';
import ContactCard from '../Contact us card/ContactCard';

const About = () => {
  const [showContact, setShowContact] = useState(false);
  const [isTeamExpanded, setIsTeamExpanded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (employeeId) => {
    console.log(`Clicked employee ${employeeId}`);
  };

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden';
      document.body.style.backgroundColor = 'rgb(33, 45, 142)';
    } else {
      document.body.style.overflow = 'unset';
      document.body.style.backgroundColor = '';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.backgroundColor = '';
    };
  }, [showContact]);

  useEffect(() => {
    if (isTeamExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isTeamExpanded]);

  return (
    <div className="about-container">
      <div className="nav-buttons">
        <button className='nav-button'>Sustainability</button>
        <button onClick={() => setShowContact(true)}>Contact us</button>
        <button>Join the team</button>
      </div>

      {showContact && (
        <>
          <div 
            className="contact-overlay"
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgb(33, 45, 142)',
              zIndex: 998
            }}
          />
          <div className="contact-card-overlay" style={{ zIndex: 999, position: 'relative' }}>
            <ContactCard onClose={() => setShowContact(false)} />
          </div>
        </>
      )}  

      <div 
        className={`team-container ${isTeamExpanded ? 'expanded' : ''}`}
        onClick={() => !isTeamExpanded && setIsTeamExpanded(true)}
        style={{ backgroundColor: !isTeamExpanded ? '#c4aa8d' : 'white' }}
      >
        <div className="team-header"> 
          <p className='team-header-text'>Our Team</p>
          <p className='team-header-text-2'>Latest Updates</p>
        </div>
        <div className="search-section">
          <div className="search-box">
          <span className="search-icon">🔍</span>
            <input 
              type="text"
              placeholder="Search team members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            
          </div>
          
          <div className='team-grid'>
            <div className='employee-card'>
              <div className='employee-image'>
                <img src="" alt="Employee"/>
              </div>
              <div className='employee-info'>
                <h3>Employee Name</h3>
                <p>Position</p>
            </div>
          </div>
          </div>
        </div>
        <button className="join-team-btn">Join the team</button>
      </div>

      <div 
        className={`main-content ${isTeamExpanded ? 'shifted' : ''}`}
        onClick={() => isTeamExpanded && setIsTeamExpanded(false)}
        style={{ 
          backgroundColor: isTeamExpanded ? '#c4aa8d' : 'white',
          transform: isTeamExpanded ? 'translateX(-10%)' : 'translateX(0)',
          transition: 'transform 0.3s ease-in-out'
        }}
      >
        <section className="hero-section">
          We give meaning to space through profound form and function
        </section>

        <div className="company-intro">
          <div className="intro-text-blank">
          </div>
          <div className="intro-text-container">
            <p className="intro-text">
            We are Powerhouse Company, an international architectural firm rooted in the heart of Rotterdam, the Netherlands, with offices in Oslo and Munich. Since our establishment in 2005, we’ve grown into a vibrant, multidisciplinary team of over 100 talented professionals.
          </p>
              <p className="intro-text" >Founder Nanne de Ru is joined by an esteemed leadership team, including Paul Stavert, Stefan Prins, Sander Apperlo, Johanne Borthne, Albert Takashi Richters and Emma Scholten. Together, we are forging ahead into the future of architecture, driven by a shared passion for innovation and design excellence.</p>
              <p className="intro-text">Our portfolio consists of a diverse range of projects that reflect our dedication to timelessness, beauty, and the quality of life for the users of these projects. Our work includes transformation projects, villas, future-proof workspaces, residential complexes, custom interior designs, and impactful public projects. From awe-inspiring residences that seamlessly blend with nature to sustainable mixed-use developments that redefine cityscapes, we leave our mark by carefully shaping our projects into well-balanced designs through in-depth research into the historical and future context.</p>
            </div>
        </div>

        <div className="video-section">
          <video />
        </div>

        <h2 className="mission-title">Our mission is to create meaningful <br/>spaces that enhance people's lives</h2>

        <div className="mission-section">
          <div className="mission-content">
            <p className="mission-text">
            Behind every iconic project is a talented team of international architects, designers, and thinkers. At Powerhouse Company, our multidisciplinary team is our enriching asset. Together we ensure that each creation stands as a testament to the full ownership we take of every project, from concept to construction supervision. Our approach to design is based on how we intertwine context, aesthetics, and function. The outcome is the human and serene clarity that people sense in all our projects.
            </p>
            <p className="mission-text">
            At Powerhouse Company, our multidisciplinary team is our enriching asset. Together we ensure that each creation stands as a testament to the full ownership we take of every project, from concept to construction supervision. Our approach to design is based on how we intertwine context, aesthetics, and function. The outcome is the human and serene clarity that people sense in all our projects.
            </p>
          </div>
          <div className="mission-empty"></div>
        </div>

      <section className="company-tagline">
        <p>We are Powerhouse Company.<br/>We give meaning to space.</p>
      </section>

      {/* <section className="awards-section">
        <h3>We're Proud that along the way we have won a number of prizes for our projects</h3>
        <div className="awards-grid">
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
          <h3>BNA</h3> <h6>2023, identity and icon value</h6>
        </div>
        <div className="publications">
          <h5>With Publications:</h5>
          <div className="publication-years">
            <h4>2023</h4>
            <h4>2023</h4>
            <h4>2023</h4>
            <h4>2023</h4>
            <h4>2023</h4>
            <h4>2023</h4>
          </div>
        </div>
      </section> */}

      <div className="newsletter">
        <section className='newsletter-section'>
          <div className="newsletter-content">
            <h2 className='newsletter-title'>Sign up for the latest Updates</h2>
            <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
              <h4>Subscribe to our newsletter</h4>
              <div className="input-group">
                <input type="email" placeholder="Email Address" required/>
                <button type="submit">Subscribe</button>
              </div>
            </form>
          </div>
        </section>
      </div>

        {/* <section className="featured-work">
          <h1>Featured Work</h1>
          <div className="project-grid">
            <div className="project-card">
              <img src="" alt=""/>
              <h3>Project Name</h3>
            </div>
            <div className="project-card">
              <img src="" alt=""/>
              <h3>Project Name</h3>
            </div>
          </div>
        </section> */}
      </div>
    </div>
  );
};

export default About;