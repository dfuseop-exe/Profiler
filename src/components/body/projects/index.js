import React from 'react'
import Separator from '../../common/separator'
import { projectData } from '../../data/projects'
import ProjectCard from './projectCard'
import "./projects.css"

function Projects() {

    const data = projectData
    return (
        <div className="projects">

            <Separator />

            <label className="section-title">Projects</label>
            <div>
                {data.map((project)=>{
                    return <ProjectCard project = {project}/>
                })}
            </div>
        </div>
    )
}

export default Projects
