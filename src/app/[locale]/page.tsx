"use client";

import Nav from "./_components/NavBar/Nav";
import About from "./_components/About/about";
import ExpecienciasPage from "./_components/Experiences/page";
import { ProjectCarousel } from "./_components/Projects/project-carousel";
import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { logUser } from "@/services/vollmedApi";
import Usuario from "../model/Usuario";
import Certificates from "./_components/Certificates/page";
import Footer from "./_components/Footer/footer";
import { ScrollingTechIcons } from "./_components/Skills/skills";

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
            <nav className="">
                <Nav />
            </nav>
            <main className=" bg-[#f5f9fb] dark:bg-dark-secondary">
                <section
                    id="Sobre"
                    className="pt-24 sm:pt-0"
                >
                    <About />
                </section>

                <section
                    id="Conhecimentos"
                    className=" bg-[#f5f9fb] dark:bg-dark-secondary "
                >
                    <ExpecienciasPage />
                </section>

                <section
                    id="Projetos"
                    className="pb-8"
                >
                    <ProjectCarousel />
                </section>

                <section
                    id="Certificados"
                    className="pb-8"
                >
                    <Certificates />
                </section>

            </main>
            
            <Footer />
        </>
    );
}
