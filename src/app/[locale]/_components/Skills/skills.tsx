"use client";

import { TechIcons } from "@/app/[locale]/_components/Skills/tech-icons";
import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

export function ScrollingTechIcons() {
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimationControls();

    useEffect(() => {
        if (!containerRef.current) return;

        const singleSetWidth = containerRef.current.children[0].clientWidth;
        const pixelsPerSecond = 50;
        const duration = singleSetWidth / pixelsPerSecond;

        controls.start({
            x: [0, -singleSetWidth],
            transition: {
                duration,
                ease: "linear",
                repeat: Number.POSITIVE_INFINITY,
            },
        });
    }, [controls]);

    return (
        <div className="w-full my-1 overflow-hidden bg-white dark:bg-dark-secondary border-y-2 border-cyan-700">
            <motion.div
                ref={containerRef}
                className="flex"
                animate={controls}
            >
                <div className="flex py-1 space-x-10 ">
                    <TechIcons />
                    <TechIcons />
                </div>
            </motion.div>
        </div>
    );
}
