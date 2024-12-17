import './Contact.css'

const ContactCard = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {  // Only close if clicking the overlay, not the card
      onClose();
    }
  };

  return (
    <div className="contact-overlay" onClick={handleOverlayClick}>
      <div className="contact-card">
        <div>
        <h4 className='contact-heading'>Contact</h4>
        <hr className='gray-line' />
        </div>
        <div className='Link Container'>
        <div className='link-container-inner'><a href=''>Email</a></div>
        <div className='link-container-inner'><a href=''>Press</a></div>
        <div className='link-container-inner'><a href=''>LinkedIn</a></div>
        <div className='link-container-inner'><a href=''>Instagram</a></div>
        </div>
        <div className='contact-heading-container'>
        <h4 className='contact-heading'>Our Offices</h4>
        <hr className='gray-line' />
        </div>
        <div className='office-container'>
          <div>
            <div>
            <a href=''>
            <div style={{paddingBottom: '100%'}}>
            <div className='office-image' >
            <div className='office-image-inner' style={{backgroundImage: '../../../public/images/pexels-tomas-malik-793526-26690662.jpg'}}>
            </div>
            </div>
            </div>
            </a>
            </div>
            <div className='office-details'>
            <h6 className='office-details-content'>Rotterdam</h6>
            <h5 className='office-details-content'>mail ID</h5>
            <h5 className='office-details-content'> Number</h5>
            <h5 className='office-details-content'>Location</h5></div>
          </div>
            
        </div>
        <div className='gray-line'></div>
        <div className='Footer-container'>
          <div className='footer-container-inner'>
            <div className='footer-container-inner-inner'>Powerhouse Company international B.V., G.N de Ru</div>
          </div>
          <div className='footer-container-inner'>
            <div className='footer-container-inner-two'>
            <h5 className='footer-container-anchor'>Mail ID</h5>
            <h5 className='footer-container-anchor' >Number</h5>
            </div>
            <div className='footer-container-inner-two'>
              <h5 className='footer-container-anchor'>Location</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactCard