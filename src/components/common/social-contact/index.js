import React from 'react'
import { socialData } from '../../data/social'
import './social-contact.css'

function SocialContact() {

    const data = socialData;

    return (
        <div className="social-contacts">
            {data.map((item)=>{
                return(
                    <a href={item.link} target="_blank" rel="noreferrer">
                        <div className="social-icon-div">
                            <img src={item.icon} alt="icon" className="social-icon" />
                        </div>
                    </a>
                )
            })}
        </div>
    )
}

export default SocialContact
