import './Navbar.css'
import { useState } from 'react'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <nav className={`custom-nav ${isDropdownOpen ? 'hide' : ''}`} style={{ 
        fontSize: '1.5vw',
        fontFamily: 'Graphik, Helvetica, Arial, sans-serif',
        fontWeight: 400,
        letterSpacing: '-0.03em',
        lineHeight: '24px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: '#fff',
        padding: '8px 12px',
        borderRadius: '8px',
        boxShadow: '0 1px 6px rgba(0, 0, 0, .09)',
        position: 'fixed',
        top: 0,
        left: '50%',
        width: 'auto',
        height: 'auto',
        color: '#1d1d1d',
        margin: '3.33333vw 0 0',
        zIndex: 8,
        whiteSpace: 'nowrap',
        transform: 'translate3d(-50%, 0, 0)',
        userSelect: 'none',
        opacity: 1,
        transition: 'all 0.3s ease-in-out'
      }}>
        <a className="nav-link permanent-line" href="/about">We</a>
        <span>Serve</span>
        <div style={{ width: '1px', height: '20px', backgroundColor: '#e0e0e0' }}></div>
        <div className="dropdown">
          <button 
            className="nav-link permanent-line dropdown-toggle" 
            onClick={toggleDropdown}
            style={{
              fontSize: 'inherit',
              padding: '0',
              border: 'none',
              background: 'none',
              cursor: 'pointer'
            }}
          >
            <div className="button-bg"></div>
            Passion
          </button>
        </div>
      </nav>

      <div className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`}>
        <button onClick={toggleDropdown} className="close-button">Close</button>
        <div className="dropdown-content">
          <a href='/all'>Space <span>all</span></a>
          <a href="/projects/furniture">Furniture <span>1</span></a>
          <a href='/projects/interiors'>Interiors <span>18</span></a>
          <a href='/projects/living'>Living <span>36</span></a>
          <a href="/projects/offices">Offices <span>22</span></a>
          <a href='/projects/publicSpaces'>Public Spaces <span>35</span></a>
          <a href='/projects/recognition'>Recognitions <span>15</span></a>
          <a href="/projects/towers">Towers <span>13</span></a>
          <a href="/projects/transformations">Transformations <span>7</span></a>
          
          <div className="divider"></div>
          
          <a href='/sustainability'>Sustainability</a>
          <a href='/books'>Books <span>1</span></a>
        </div>
      </div>
    </>
  )
}

export default Navbar