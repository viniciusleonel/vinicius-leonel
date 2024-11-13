import React, { useState, useEffect, useMemo } from "react";
import ProjectCard from "./project-card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectsList from "./project-list";
import {useTranslations} from 'next-intl';
import {Project} from "next/dist/build/swc";

interface ProjectListProps {
    projects: Project[];
}

export function ProjectCarousel() {

    const t = useTranslations('NavBar');
    const [startX, setStartX] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numVisibleProjects, setNumVisibleProjects] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const larguraTela = window.innerWidth;
            if (larguraTela >= 1525) {
                setNumVisibleProjects(3);
            } else if (larguraTela >= 937) {
                setNumVisibleProjects(2);
            } else {
                setNumVisibleProjects(1);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!startX) return;
        const diferencaX = e.touches[0].clientX - startX;
        if (Math.abs(diferencaX) > 50) {
            if (diferencaX > 0) {
                projetoAnterior();
            } else {
                proximoProjeto();
            }
            setStartX(null);
        }
    };

    const proximoProjeto = () => {
        setCurrentIndex(
            (indiceAnterior) => (indiceAnterior + 1) % projectsList.length
        );
    };

    const projetoAnterior = () => {
        setCurrentIndex(
            (indiceAnterior) =>
                (indiceAnterior - 1 + projectsList.length) % projectsList.length
        );
    };

    const indexesVisiveis = useMemo(() => {
        const indexes: number[] = [];
        for (let i = 0; i < numVisibleProjects; i++) {
            const indiceVisivel = (currentIndex + i) % projectsList.length;
            indexes.push(indiceVisivel);
        }
        return indexes;
    }, [currentIndex, numVisibleProjects]);

    return (
        <div className="sm:h-svh flex flex-col justify-center items-center">
            <div className="flex items-center justify-center">
                <span className="text-cyan-500 text-4xl">&#123;</span>
                <h2 className="my-10 text-3xl">{t('projects')}</h2>
                <span className="text-cyan-500 text-4xl">&#125;</span>
            </div>

            <div
                className="flex overflow-hidden w-full px-8 xs:w-2/3 gap-2 justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <button onClick={projetoAnterior}>
                    <FaArrowLeft className="hover:text-cyan-500" />
                </button>
                {indexesVisiveis.map((index) => (
                    <ProjectCard
                        key={index}
                        title={projectsList[index].title}
                        description={projectsList[index].title.trim().replace(/\s+/g, '')}
                        techIcons={projectsList[index].techIcons}
                        linkSite={projectsList[index].linkSite}
                        linkGitHub={projectsList[index].linkGitHub}
                    />
                ))}
                <button onClick={proximoProjeto}>
                    <FaArrowRight className="hover:text-cyan-500" />
                </button>
            </div>
        </div>
    );
}
