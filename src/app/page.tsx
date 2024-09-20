"use client";

import Nav from "./components/Nav/Nav";
import About from "./components/About/about";
import ExpecienciasPage from "./components/Expeciencias/page";
import { ProjectCarousel } from "./components/Projects/project-carousel";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/AuthContext";
import { logUser } from "@/services/vollmedApi";
import Usuario from "./model/Usuario";
import Certificates from "./components/Certificates/page";
import Footer from "./components/Footer/footer";

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

                {/* <Skills />     */}
            </main>

            <Footer />
        </>
    );
}
