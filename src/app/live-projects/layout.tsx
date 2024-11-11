"use client";

import Nav from "../[locale]/_components/NavBar/Nav";
import Sidebar from "./__components/sidebar";

export default function LiveProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <>  
            <nav>
                <Nav />
            </nav>
        
            <aside className="flex">
                <Sidebar />
                <main className="flex-grow">
                    {children}
                </main>
            </aside>
        </>
    );
}
