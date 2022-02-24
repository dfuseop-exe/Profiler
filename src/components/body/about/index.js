import React from 'react'
import SocialContact from '../../common/social-contact'
import "./about.css"

function About() {
    return (
        <div className="about">
            <div className="about-top">
                <div className="about-photo">
                    <img src={require('../../../assets/home.jpg').default} className="picture"></img>
                </div>
                <div className="about-info">
                    Hello There 👋, I am 
                    <br/><span className="info-name">Web Designer/Developer👨‍💻</span>
                    <br/>focused on crafting great web experiences. I enjoy creating beautifully designed, intuitive and functional websites.
                </div>
            </div>
            
            <SocialContact />
            
        </div>
    )
}

export default About
