import Image from "next/image";
import styles from "./components/Skills/skills.module.css";

export default function Home() {
    return (
        <div className={`overflow-hidden bg-cyan-100 dark:bg-zinc-900 border border-cyan-700 rounded-3xl ${styles.skillsAnimationContainer}`}
        >
            <div className={`flex gap-10 lg:gap-24  animate-move lg:animate-lgScreenMove ${styles.skillsAnimation}`}>
                <Image
                    src='/images/icons/html.svg'
                    alt="html icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/css.svg'
                    alt="css icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/tailwind-css.svg'
                    alt="tailwind css icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/javascript.svg'
                    alt="javascript icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/ts.svg'
                    alt="typescript icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/nodejs.svg'
                    alt="nodejs icon"
                    height={50}
                    width={80}
                />
                <Image
                    src='/images/icons/nextjs.svg'
                    alt="nextjs icon"
                    height={50}
                    width={45}
                    className="my-6 bg-zinc-50 rounded-full"
                />
                <Image
                    src='/images/icons/react.svg'
                    alt="react icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/java.svg'
                    alt="java icon"
                    height={50}
                    width={55}
                />
                <Image
                    src='/images/icons/spring.svg'
                    alt="spring icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/html.svg'
                    alt="html icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/css.svg'
                    alt="css icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/tailwind-css.svg'
                    alt="tailwind css icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/javascript.svg'
                    alt="javascript icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/ts.svg'
                    alt="typescript icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/nodejs.svg'
                    alt="nodejs icon"
                    height={50}
                    width={80}
                />
                <Image
                    src='/images/icons/nextjs.svg'
                    alt="nextjs icon"
                    height={50}
                    width={45}
                    className="my-6 bg-zinc-50 rounded-full"
                />
                <Image
                    src='/images/icons/react.svg'
                    alt="react icon"
                    height={50}
                    width={50}
                />
                <Image
                    src='/images/icons/java.svg'
                    alt="java icon"
                    height={50}
                    width={55}
                />
                <Image
                    src='/images/icons/spring.svg'
                    alt="spring icon"
                    height={50}
                    width={50}
                />
            </div>
        </div>
    );
}
