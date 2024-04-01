'use client'

import Nav from "../components/Nav/Nav"
import Skills from "../components/Skills/skills"

export default function Home () {
    return (
        <div className="flex flex-col">
            <div className="">
                <Nav
                    title='Full Stack Developer'
                />   
            </div>     

            <div className="mt-20">
                <h2>About</h2>    
            </div>  

            <div className="pt-8 px-6 sm:px-10 md:px-16 lg:px-60 mt-20">
                <Skills />
            </div>
        </div>
    )
}
