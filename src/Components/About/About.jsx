import './About.css';
import { useEffect, useState } from 'react';
import ContactCard from '../Contact us card/ContactCard';

const About = () => {
  const [showContact, setShowContact] = useState(false);

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showContact]);

  return (
    <div className="about-container">
      <div className="nav-buttons">
        <button>Sustainability</button>
        <button onClick={() => setShowContact(true)}>Contact us</button>
        <button>Join the team</button>
      </div>

      {showContact && (
        <div className="contact-card-overlay">
          <ContactCard onClose={() => setShowContact(false)} />
        </div>
      )}  



      {/* team vla div */}

      <div>
        
      </div>

     <div>
     <section className="hero-section">
        <h1>We give meaning to space through profound form and function</h1>
      </section>

      <section className="company-intro">
        <p className="intro-text">
          We are Powerhouse Company, an international architectural firm rooted in the heart of Rotterdam, the Netherlands, with offices in Oslo and Munich. Since our establishment in 2005, we’ve grown into a vibrant, multidisciplinary team of over 100 talented professionals.

       Founder Nanne de Ru is joined by an esteemed leadership team, including Paul Stavert, Stefan Prins, Sander Apperlo, Johanne Borthne, Albert Takashi Richters and Emma Scholten. Together, we are forging ahead into the future of architecture, driven by a shared passion for innovation and design excellence.

         Our portfolio consists of a diverse range of projects that reflect our dedication to timelessness, beauty, and the quality of life for the users of these projects. Our work includes transformation projects, villas, future-proof workspaces, residential complexes, custom interior designs, and impactful public projects. From awe-inspiring residences that seamlessly blend with nature to sustainable mixed-use developments that redefine cityscapes, we leave our mark by carefully shaping our projects into well-balanced designs through in-depth research into the historical and future context.
        </p>
      </section>

      <div className="video-section">
        <video />
      </div>

      <section className="mission-section">
        <h1>Our mission is to create meaningful spaces that enhance people's lives</h1>
        <p className="mission-text">
          Behind every iconic project is a talented team of international architects, designers, and thinkers. At Powerhouse Company, our multidisciplinary team is our enriching asset. Together we ensure that each creation stands as a testament to the full ownership we take of every project, from concept to construction supervision. Our approach to design is based on how we intertwine context, aesthetics, and function. The outcome is the human and serene clarity that people sense in all our projects. 

          At Powerhouse Company, we believe that the true essence of a project emerges through a collaborative journey with our clients. By actively engaging with them, understanding their social, economic, and sustainability goals, we coalesce their vision with our expertise. Our collaborative spirit extends beyond our own walls; we embrace the opportunity to co-create with other design practices, fostering a vibrant ecosystem of creativity. We actively engage by working hand in hand with fellow architects and designers in workshops and meaningful partnerships. We don’t merely build structures; we craft narratives, weaving together the aspirations of our clients with our passion for timeless, elegant, and purposeful design. With our clients we seek to transform a vision into reality to shape a future where architecture transcends the ordinary, taking them on a journey where architecture becomes a living testament to the delicate balance between constraints and opportunities. Shaping a future that transcends the ordinary.
        </p>
      </section>

      <section className="company-tagline">
        <h1>We are Powerhouse Company.<br/>We give meaning to space.</h1>
      </section>

      <section className="awards-section">
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
      </section>

      <section className="newsletter">
        <h1>Sign up for the latest Updates</h1>
        <div className="subscribe-form">
          <h4>Subscribe to our newsletter</h4>
          <input type="text" placeholder="Email Address"/>
          <button>Subscribe</button>
        </div>
      </section>

      <section className="featured-work">
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
      </section>
     </div>
      
    </div>
  );
};

export default About;