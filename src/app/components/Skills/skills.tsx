import Image from "next/image";
import styles from "./skills.module.css"
import { TechIcons } from "./techIcons"
import { useState } from "react";

export default function Skills () {

    return (
        <div className="pt-8 mb-1 ">
            <div className={`-mt-20 overflow-hidden dark:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 ${styles.skillsAnimationContainer}`}>
                <div
                    className={`flex gap-5 sm:gap-10 lg:gap-24 h-10 sm:h-20 my-2 sm:m-0 sm:hover:[animation-play-state:paused] animate-smScreenMove sm:animate-mdScreenMove lg:animate-lgScreenMove ${styles.skillsAnimation}`}
                >
                    <TechIcons />
                    <TechIcons />
                </div>
            </div>
        </div>
        
    );
};
