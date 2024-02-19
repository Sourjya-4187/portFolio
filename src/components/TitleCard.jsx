import React from 'react';

let titleCardPhoto = require('../images/titleCardPhoto.png');

let linkedinImage = require('../images/linkedin.png');
let githubImage = require('../images/github.png');
let gmailImage = require('../images/gmail.png')

const TitleCard = () => {
    return(
        <>
            <div className='topBoxDark'>
                <div className='image-box'>
                        <img className='dp' src={titleCardPhoto} alt="Preview Not Available" />
                    <svg 
                        className="footer-image" 
                        viewBox="0 0 200 200" 
                        xmlns="http://www.w3.org/2000/svg">
                            <path fill="#3e546b" d="M41.9,-66.5C54.5,-57,65,-45.8,71.1,-32.5C77.1,-19.2,78.6,-3.8,76.6,11.1C74.6,26,69,40.5,59.3,50.9C49.5,61.3,35.6,67.5,21.2,71.3C6.9,75,-7.9,76.1,-23.4,74.2C-39,72.2,-55.2,67.1,-67.1,56.4C-79,45.8,-86.6,29.7,-86.3,14C-86.1,-1.6,-78.1,-16.8,-69.3,-29.9C-60.6,-43,-51.2,-54,-39.5,-63.9C-27.9,-73.9,-13.9,-82.7,0.4,-83.3C14.6,-83.8,29.3,-76,41.9,-66.5Z" transform="translate(100 100)">
                            </path>
                    </svg>
                    <div className='middle-container-image'>
                        <a 
                            className='links-social' 
                            href='https://www.linkedin.com/in/sourjyaswaruppradhan/'>
                        <img 
                            className="social-links-icons" 
                            src={linkedinImage}
                            alt="https://www.linkedin.com/in/sourjyaswaruppradhan/"
                        />
                        </a>

                        <a 
                            className='links-social' 
                            href='https://github.com/Sourjya-4187'>
                        <img 
                            className="social-links-icons" 
                            src={githubImage}
                            alt="https://github.com/Sourjya-4187"
                        />
                        </a>

                        <a 
                            className="links-social" 
                            href="mailto:sourjya.pradhan@gmail.com">
                        <img 
                            className="social-links-icons" 
                            src={gmailImage}
                            alt="mailto:sourjya.pradhan@gmail.com"/>
                        </a>

                    </div>
                </div>
                <div className='title'>
                    <h1 className="name">Sourjya Swarup Pradhan</h1>
                    <p className="subtitle">
                    Experienced UI Developer proficient in crafting captivating interfaces utilizing React, JavaScript, HTML, CSS, and MUI. Specialized in developing client-side, server-side, and micro frontend applications. Demonstrated capability in resolving intricate issues efficiently, even in high-pressure environments. Adept at collaborating closely with UX designers to translate user requirements into visually striking and highly functional interfaces.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TitleCard;