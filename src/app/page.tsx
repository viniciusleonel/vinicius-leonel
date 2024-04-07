'use client'

import Nav from "./components/Nav/Nav"
import Skills from "./components/Skills/skills"
import About from "./components/About/about"
import { ProjectList } from "./components/Projects/projectList"


export default function Home () {
    return (
        <div className="flex flex-col dark:bg-bg-default">

            <Nav
                title='Full Stack Developer'
            />    
            
            <section className="min-h-screen flex items-center ">
                <About />    
            </section> 

            <section className="min-h-screen">
                <ProjectList />
            </section>  
            
            <Skills />   
        </div>
    )
}
