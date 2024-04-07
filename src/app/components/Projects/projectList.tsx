import React, { useState } from 'react';
import ProjectCard from "../../components/Projects/projectCard";
import { JavaIcon, NodeIcon, SpringIcon } from "../../components/Skills/techIcons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export function ProjectList() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projects = [
        {
            imgCardSrc: "/images/cleanSky.jpg",
            imgAlt: "teste",
            title: "Title",
            description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
            techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
            linkSite: "https://github.com/viniciusleonel",
            linkGitHub: "https://github.com/viniciusleonel"
        },
        {
            imgCardSrc: "",
            imgAlt: "teste",
            title: "Title",
            description: "Description Ladipisicinghfkjxgjg ,cg,chckh.k fxhfhgrs rnsrnhdm elit. Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
            techIcons: [<NodeIcon key="node"/>, <SpringIcon key="spring"/>],
            linkSite: "https://github.com/viniciusleonel",
            linkGitHub: "https://github.com/viniciusleonel"
        }
    ];

    const nextProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    };

    const prevProject = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div className=" h-svh flex flex-col justify-center items-center">
            <h2 className="-mt-20 pb-14 text-3xl">Projects</h2>
            <div className="flex overflow-hidden w-full px-8 xs:w-2/3 gap-2 justify-center">
                <button onClick={prevProject}><FaArrowLeft className='hover:text-cyan-500' /></button>
                {projects.map((project, index) => (
                    <ul key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                        <ProjectCard
                            imgCardSrc={project.imgCardSrc}
                            imgAlt={project.imgAlt}
                            title={project.title}
                            description={project.description}
                            techIcons={project.techIcons}
                            linkSite={project.linkSite}
                            linkGitHub={project.linkGitHub}
                        />
                    </ul>
                ))}
                <button onClick={nextProject}><FaArrowRight className='hover:text-cyan-500' /></button>
            </div>
        </div>
    );
}
