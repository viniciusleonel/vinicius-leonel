import React, { useState, useEffect } from 'react';
import ProjectCard from "./project-card";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import projectsList from './project-list'; 

export function ProjectCarousel() {
    const [startX, setStartX] = useState<number | null>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [numVisibleProjects, setNumVisibleProjects] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            if (screenWidth >= 1525) {
                setNumVisibleProjects(3);
            } else if (screenWidth >= 937) {
                setNumVisibleProjects(2);
            } else {
                setNumVisibleProjects(1);
            }
        };

        // Call handleResize initially and add event listener for resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!startX) return;
        const xDiff = e.touches[0].clientX - startX;
        if (Math.abs(xDiff) > 50) { // Adjust this threshold as needed
            if (xDiff > 0) {
                prevProject();
            } else {
                nextProject();
            }
            setStartX(null);
        }
    };

    const nextProject = () => {
        setCurrentIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % projectsList.length;
            return nextIndex;
        });
    };
    
    const prevProject = () => {
        setCurrentIndex((prevIndex) => {
            const prevIndexAdjusted = (prevIndex - 1 + projectsList.length) % projectsList.length;
            return prevIndexAdjusted;
        });
    };

    return (
        <div className=" h-svh flex flex-col justify-center items-center">
            <h2 className="-mt-20 pb-14 text-3xl">Projects</h2>
            <div
                className="flex overflow-hidden w-full px-8 xs:w-2/3 gap-2 justify-center"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
            >
                <button onClick={prevProject}><FaArrowLeft className='hover:text-cyan-500' /></button>
                {projectsList.map((project, index) => (
                    <ul key={index} style={{ display: getDisplayStyle(index) }}>
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

    function getDisplayStyle(index: number): string {
        const visibleIndexes: number[] = [];
        for (let i = 0; i < numVisibleProjects; i++) {
            const visibleIndex = (currentIndex + i) % projectsList.length;
            visibleIndexes.push(visibleIndex);
        }
        return visibleIndexes.includes(index) ? 'block' : 'none';
    }
}
