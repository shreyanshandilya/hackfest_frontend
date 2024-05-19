import React from 'react';
import "./developerscardstyles.css"

const DevelopersCard = ({ name, imageUrl, teamName, linkedinLink, facebookLink }) => {
  return (
    <div className="card">
      <div className="card-photo" style={{ backgroundImage: `url(${imageUrl})` }}></div>
      <div className="card-title">
        {name} <br />
        <span>{teamName}</span>
      </div>
      <div className="card-socials">
        <button className="card-socials-btn facebook">
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
            <svg data-name="Layer 21" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="icon">
              <path d="M16.75,9H13.5V7a1,1,0,0,1,1-1h2V3H14a4,4,0,0,0-4,4V9H8v3h2v9h3.5V12H16Z"></path>
            </svg>
          </a>
        </button>
        <button className="card-socials-btn linkedin">
          <a href={linkedinLink} target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" viewBox="0 0 512 512" height="512">
              <path d="m51.326 185.85h90.011v270.872h-90.011zm45.608-130.572c-30.807 0-50.934 20.225-50.934 46.771 0 26 19.538 46.813 49.756 46.813h.574c31.396 0 50.948-20.814 50.948-46.813-.589-26.546-19.551-46.771-50.344-46.771zm265.405 124.209c-47.779 0-69.184 26.28-81.125 44.71v-38.347h-90.038c1.192 25.411 0 270.872 0 270.872h90.038v-151.274c0-8.102.589-16.174 2.958-21.978 6.519-16.174 21.333-32.923 46.182-32.923 32.602 0 45.622 24.851 45.622 61.248v144.926h90.024v-155.323c0-83.199-44.402-121.911-103.661-121.911z"></path>
            </svg>
          </a>
        </button>
      </div>
    </div>
  );
};

export default DevelopersCard;
