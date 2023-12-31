import React from 'react'
import Typical from 'react-typical'
import "./Profile.css";
import ScrollService from '../../../utilities/ScrollService';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
            <div className='colz'>
                <div className='colz-icon'>

                <a href='https://www.facebook.com/mamkhiwa.mbalentle/'>
                        <i className='fa fa-facebook'></i>
                    </a>
            
                    <a href='https://www.instagram.com/ms_landa93/'>
                        <i className='fa fa-instagram'></i>
                    </a>
                    <a href='https://twitter.com/rodo_landa'>
                        <i className='fa fa-twitter'></i>
                    </a>
                    <a href='https://www.linkedin.com/in/nonkululeko-tebeni-938a86190/'>
                        <i className='fa fa-linkedin'></i>
                    </a>
                    <a href='https://www.youtube.com/channel/UCBXTZ6zYQ7dQO46poYqnU7w'>
                        <i className='fa fa-youtube'></i>
                    </a>
                </div>
                </div>

                <div className='profile-details-name'>
                    <span className="primary-text">
                        {" "}
                        Hello, I'M <span className="highlighted-text">Nonkululeko Yolanda Tebeni</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <h1>
                            {" "}
                            <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😎",
                    1000,
                    "Full stack Developer 💻",
                    1000,
                    "Quality Assurer💻",
                    1000,
                    "Cross Platform Dev 🔴",
                    1000,
                    "React/React Native 🌐",
                    1000,
                  ]}
                />
                        </h1>
                    </span>
                    <span className='profile-role-tagline'>
                      Knack of building applications with front and back end operations.  
                    </span>
                </div>
                <div className='profile-options'>
                    <button className='btn primary-btn'
                     onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
                        
                        >{" "}Hire Me{""}
                    </button>
                    <a href="YolandaCV.pdf" download='YolandaCV.pdf'>
                    <button className='btn highlighted-btn'>Get Resume</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'>

                </div>

            </div>
        </div>

    </div>
  )
}

