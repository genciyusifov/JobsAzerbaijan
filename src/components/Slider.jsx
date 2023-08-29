import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import  './Slider.css'
import { useNavigate } from 'react-router-dom';


function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
      <div className="herosection">
        <div className="left">
          <p className="appname">Smart Job Search App</p>
          <h1 className="heading">Created Vacancy and CV</h1>
          <div className="getStarted">
            <button onClick={()=>{
              navigate("/jobs")
            }} >Find a Job</button>
          </div>
          <div className="element1">
            <div className="element1-wrapper">
              <svg width="30" height="30" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect y="21" width="58" height="17" fill="#4a39d0" />
                <rect x="21" y="58" width="58" height="17" transform="rotate(-90 21 58)" fill="#4a39d0" />
              </svg>
            </div>
          </div>
          <div className="element2">
            <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#4a39d0" />
            </svg>
          </div>
          <div className="element3">
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="17" stroke="#4A39D0" strokeWidth="8" />
            </svg>
          </div>
          <div className="element4">
            <svg width="10" height="10" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12.5" cy="12.5" r="12.5" fill="#4a39d0" />
            </svg>
          </div>
          <div className="element5">
            <svg width="25" height="25" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="21" cy="21" r="17" stroke="#4A39D0" strokeWidth="8" />
            </svg>
          </div>
        </div>
        <div className="right">
          <div className="background">
            <img className='object-cover' src="https://www.techopedia.com/wp-content/uploads/2023/02/art-graphic-design-doodle-drawing-poster-brochure-flyer-paper-3.jpg" alt="bg" />
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage;