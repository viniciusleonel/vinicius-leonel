import Image from "next/image";
import styles from "./skills.module.css"
import { TechIcons } from "./techIcons"
import { useState } from "react";

export default function Skills () {

    return (
        <div className={`mb-1 overflow-hidden bg-white dark:bg-zinc-900 border-2 border-cyan-700 ${styles.skillsAnimationContainer}`}>
        <div
            className={`flex gap-5 sm:gap-10 lg:gap-24 h-10 sm:h-20 my-2 sm:m-0 animate-xsScreenMove sm:animate-smScreenMove md:animate-mdScreenMove lg:animate-lgScreenMove ${styles.skillsAnimation}`}

        >
            <TechIcons />
            <TechIcons />
        </div>
        </div>
    );
};
