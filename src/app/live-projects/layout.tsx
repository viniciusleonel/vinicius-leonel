"use client";

import Nav from "../components/Nav/Nav";
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
