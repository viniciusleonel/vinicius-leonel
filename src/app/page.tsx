'use client'

import Nav from "./components/Nav/nav"
import Skills from "./components/Skills/skills"
import About from "./components/About/about"
import { ProjectList } from "./components/Projects/projectList"


export default function Home () {
    return (
        <div className="flex flex-col bg-zinc-200 dark:bg-bg-default">

            <Nav
                title='Full Stack Developer'
            />      
            <About />    
            <ProjectList />
            <Skills />
            
        </div>
    )
}
