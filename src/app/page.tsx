'use client'

import Nav from "./components/Nav/Nav"
import Skills from "./components/Skills/skills"
import About from "./components/About/about"
import  {ProjectCarousel}  from "./components/Projects/projectCarousel"


export default function Home () {
    return (
        <>
        <nav>
            <Nav
                title='Full Stack Developer'
            />
        </nav>
                
        <main>
            <section className="min-h-screen flex items-center ">
                <About />    
            </section> 

            <section className="min-h-screen">
                <ProjectCarousel />
            </section>  
            
            <Skills />    
        </main>    
        
        </>
    )
}
