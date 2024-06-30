"use client";

import Nav from "./components/Nav/Nav";
import About from "./components/About/about";
import ExpecienciasPage from "./components/Expeciencias/page";
import { ProjectCarousel } from "./components/Projects/project-carousel";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { logUser } from "@/services/vollmedApi";
import Usuario from "./model/Usuario";

export default function Home() {
    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        const signInAsync = async () => {
            try {
                const data: Usuario = {
                    login: "",
                    senha: "",
                };
                await logUser("/login", data);
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

                <section className="min-h-screen flex items-center bg-[#f5f9fb] dark:bg-dark-secondary ">
                    <ExpecienciasPage />
                </section>

                <section
                    id="Projects"
                    className="min-h-screen pt-16"
                >
                    <ProjectCarousel />
                </section>

                {/* <Skills />     */}
            </main>
        </>
    );
}
