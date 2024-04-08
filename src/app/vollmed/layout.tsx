'use client'

import Nav from "../components/Nav/Nav"

export default function Layout({ children } : { children: React.ReactNode }) {
    return (
        <>
            <Nav /> 
            <div>
                {children}
            </div>
        </>
    )
}

