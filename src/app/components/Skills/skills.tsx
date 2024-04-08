import React, { useState, useRef } from 'react';
import styles from "./skills.module.css";
import { TechIcons } from "./techIcons";

export default function Skills() {
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState<number | null>(null);
    const [startScrollLeft, setStartScrollLeft] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        const clientX = e.clientX;
        const scrollLeft = containerRef.current?.scrollLeft;
        if (scrollLeft !== undefined && scrollLeft !== null) {
            setStartX(clientX);
            setStartScrollLeft(scrollLeft);
            setIsDragging(true);
        }
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || startX === null || startScrollLeft === null || !containerRef.current) return;
        const xDiff = e.clientX - (startX as number); // Cast startX to number
        containerRef.current.scrollLeft = startScrollLeft - xDiff;
    };

    const handleMouseUp = () => {
        if (isDragging) {
            setStartX(null);
            setStartScrollLeft(null);
            setIsDragging(false);
        }
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        const clientX = e.touches[0].clientX;
        const scrollLeft = containerRef.current?.scrollLeft;
        if (scrollLeft !== undefined && scrollLeft !== null) {
            setStartX(clientX);
            setStartScrollLeft(scrollLeft);
            setIsDragging(true);
        }
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || startX === null || startScrollLeft === null || !containerRef.current) return;
        const xDiff = e.touches[0].clientX - (startX as number); // Cast startX to number
        containerRef.current.scrollLeft = startScrollLeft - xDiff;
    };

    const handleTouchEnd = () => {
        if (isDragging) {
            setStartX(null);
            setStartScrollLeft(null);
            setIsDragging(false);
        }
    };

    const handleScroll = () => {
        if (!containerRef.current) return;
        const container = containerRef.current;
        const scrollWidth = container.scrollWidth;
        const scrollLeft = container.scrollLeft;
        const clientWidth = container.clientWidth;

        // Se o scroll atingir o final, ajuste a posição do scroll para reiniciar do início
        if (scrollLeft + clientWidth >= scrollWidth) {
            container.scrollLeft = 0;
        } else if (scrollLeft === 0) {
            // Se o scroll atingir o início, ajuste a posição do scroll para reiniciar do final
            container.scrollLeft = scrollWidth - clientWidth;
        }
    };

    return (
        <div className={` mb-1 -mt-20 overflow-hidden dark:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 ${styles.skillsAnimationContainer}`}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onScroll={handleScroll}
            style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
        >
            <div className={`flex gap-5 sm:gap-10 lg:gap-24 h-10 sm:h-20 my-2 sm:m-0 `}>
                <TechIcons />
                <TechIcons />
                {/* Adicione mais ícones aqui conforme necessário */}
            </div>
        </div>
    );
}
