import React from 'react'
import "./skills.css"
import Separator from "../../common/separator"
import { skillsData } from '../../data/skills'
import SkillCard from './skillcard';

function Skills() {

    const data = skillsData;

    return (
        <div className="skills">
            <Separator />

            <label className="section-title">Skills</label>
            <div className="skills-container">
                {data.map((item)=>{
                    return(
                        <div className="skills-section">
                            <label className="skills-section-title"><b>{item.type}</b></label>
                            <div className="skills-list">
                                {item.list.map((skill)=>{
                                    return(
                                        <SkillCard skill={skill} /> 
                                    )
                                })}
                            </div>
                        </div>
                    )

                })}
            </div>
        </div>
    )
}

export default Skills
