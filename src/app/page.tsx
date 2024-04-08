'use client'

import Nav from "./components/Nav/Nav"
import Skills from "./components/Skills/skills"
import About from "./components/About/about"
import  {ProjectCarousel}  from "./components/Projects/projectCarousel"


export default function Home () {
    return (
        <>
        <nav>
            <Nav />
        </nav>
                
        <main>
            <section className="min-h-screen flex items-center ">
                <About />    
            </section> 

            <section id="Projects" className="min-h-screen pt-16">
                <ProjectCarousel />
            </section>  
            
            <Skills />    
        </main>    
        
        </>
    )
}
