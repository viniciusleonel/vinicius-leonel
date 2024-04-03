import Image from "next/image";
import styles from "./skills.module.css"
import { TechIcons } from "./techIcons"

export default function Skills () {
    return (
        <div className={`overflow-hidden bg-cyan-100 dark:bg-zinc-900 border border-cyan-700 ${styles.skillsAnimationContainer}`}
        >
            <div className={`flex gap-10 lg:gap-24  animate-move lg:animate-lgScreenMove ${styles.skillsAnimation}`}>
                <TechIcons />
                <TechIcons />
            </div>
        </div>
    )
}