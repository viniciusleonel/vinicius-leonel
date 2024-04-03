'use client'

import Nav from "./components/Nav/Nav"
import Skills from "./components/Skills/skills"
import About from "./components/Contact/contact"

export default function Home () {
    return (
        <div className="flex flex-col bg-cyan-100 dark:bg-bg-default">
            <div className="">
                <Nav
                    title='Full Stack Developer'
                />   
            </div>     

            <div className="mt-20 pt-8 px-6 sm:px-10 md:px-16 lg:px-60">
                <About />    
            </div>  

            <div className="pt-8  ">
                <Skills />
            </div>
            
        </div>
    )
}
