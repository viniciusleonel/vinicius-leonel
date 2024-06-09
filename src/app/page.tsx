'use client'

import Nav from "./components/Nav/Nav"
import Skills from "./components/Skills/skills"
import About from "./components/About/about"
import  {ProjectCarousel}  from "./components/Projects/project-carousel"
import { useContext, useEffect } from "react"
import { AuthContext } from "./context/AuthContext"

export default function Home () {

    const {signIn} = useContext(AuthContext)

    useEffect(() => {
        const signInAsync = async () => {
            try {
                const data = {
                    email: '',
                    password: ''
                };
                await signIn(data);
            } catch (error) {
                // Handle the error silently
                console.error(error); // Optional: Log the error for debugging purposes
            }
        };

        signInAsync();
    }, []); // Empty array ensures this runs only once

    return (      
    <>
        <nav className="mb-5 sm:mb-0">
            <Nav />
        </nav>
        <main className="bg-[#f5f9fb] dark:bg-dark-secondary">
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
