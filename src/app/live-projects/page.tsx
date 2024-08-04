"use client";

import Nav from "../components/Nav/Nav";
import Dashboard from "./__components/dashboard";

export default function LiveProjects() {
    return (
        <div className=" ">
            <nav>
                <Nav />
            </nav>
            <main className=" pt-16">
                <Dashboard />
            </main>
        </div>
    );
}
