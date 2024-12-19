import  { useState } from 'react';
import './eam.css';

const TeamCard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleCardClick = (employeeId) => {
    console.log(`Clicked employee ${employeeId}`);
  };

  return (
    <div className="team-container">
      <div className="team-header">
        <p>Our Team</p>
        <p>Latest Updates</p>
      </div>
      <div className="search-section">
        <div className="search-box">
          <input 
            type="text"
            placeholder="Search team members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
        
        <div className="team-grid">
          <div 
            className="employee-card" 
            onClick={() => handleCardClick(1)}
          >
            <div className="employee-image">
              <img src="/path-to-image" alt="Employee" />
            </div>
            <div className="employee-info">
              <h3>Employee Name</h3>
              <p>Position</p>
            </div>
          </div>
        </div>
      </div>
      <button className="join-team-btn">Join the team</button>
    </div>
  )
}

export default TeamCard