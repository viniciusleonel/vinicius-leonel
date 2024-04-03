import Image from "next/image";
import styles from "./skills.module.css"
import { TechIcons } from "./techIcons"

export default function Skills () {
    return (
        <div className={` overflow-hidden bg-cyan-100 dark:bg-zinc-900 border border-cyan-700 ${styles.skillsAnimationContainer}`}
        >
            <div className={`flex gap-5 sm:gap-10 lg:gap-24 h-10 sm:h-20 my-2 sm:m-0 animate-smScreenMove sm:animate-mdScreenMove lg:animate-lgScreenMove ${styles.skillsAnimation}`}>
                <TechIcons />
                <TechIcons />
            </div>
        </div>
    )
}