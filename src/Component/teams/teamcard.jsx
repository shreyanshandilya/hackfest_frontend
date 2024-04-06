import React from 'react';
import "./teamcardstyles.css";

const ProfileCard = ({ name, imageUrl, teamName, linkedinLink, instagramLink }) => {
  return (
    <div className="card">
      <div className="profile-pic" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="bottom">
        <div className="content">
          <span className="name">{name}</span>
          <span className="team-name">{teamName}</span>
        </div>
        <div className="bottom-bottom">
          <div className="social-links-container">
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 16 15.999" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
                <path d="M6-582H-2a4,4,0,0,1-4-4v-8a4,4,0,0,1,4-4H6a4,4,0,0,1,4,4v8A4,4,0,0,1,6-582ZM2-594a4,4,0,0,0-4,4,4,4,0,0,0,4,4,4,4,0,0,0,4-4A4.005,4.005,0,0,0,2-594Zm4.5-2a1,1,0,0,0-1,1,1,1,0,0,0,1,1,1,1,0,0,0,1-1A1,1,0,0,0,6.5-596ZM2-587.5A2.5,2.5,0,0,1-.5-590,2.5,2.5,0,0,1,2-592.5,2.5,2.5,0,0,1,4.5-590,2.5,2.5,0,0,1,2-587.5Z" data-name="Subtraction 4" id="Subtraction_4"></path>
              </svg>
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
              </svg>
            </a>
          </div>
          <button className="button">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
