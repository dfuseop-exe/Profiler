import React from 'react'
import "./workcard.css"

function WorkCard({item}) {
    return (
        <div className="work-card">
            <img src={item.companyLogo} alt="company logo" className="work-logo"></img>
            <div className="work-info">
                <label className="company-name">{item.company}</label>
                <label className="website-name">{item.website}</label>
                <label className="designation-name">{item.designantion}</label>
                <div className="work-dates">
                    <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
                </div>
                <div className="work-desc">
                    <p><ul>{item.work.map((singleLine)=>{
                        return(
                            <><li>{singleLine}</li><br/></>
                        )
                    })}</ul></p>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
