import Image from "next/image";
import styles from "./skills.module.css"
import { TechIcons } from "./techIcons"
import { useState } from "react";

export default function Skills () {
    const [isAnimationPaused, setIsAnimationPaused] = useState(false);

    const handleTouchStart = () => {
        setIsAnimationPaused(true);
    };

    const handleTouchEnd = () => {
        setIsAnimationPaused(false);
    };

    return (
        <div className={`overflow-hidden bg-cyan-100 dark:bg-zinc-900 border border-cyan-700 ${styles.skillsAnimationContainer}`}>
        <div
            className={`flex gap-5 sm:gap-10 lg:gap-24 h-10 sm:h-20 my-2 sm:m-0 animate-smScreenMove sm:animate-mdScreenMove lg:animate-lgScreenMove ${styles.skillsAnimation}`}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <TechIcons />
            <TechIcons />
        </div>
        </div>
    );
};
