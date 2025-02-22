import {useTranslations} from 'next-intl';
import ThemeToggle from "../Toggles/ThemeToggle";
import Link from "next/link"
import MobileHomeMenu from "./mobile-home-menu";
import {LanguageToggle} from "@/app/[locale]/_components/Toggles/LanguageToggle";


interface NavProps {
    title?: string
}

export default function Nav({title}: NavProps) {

    const t = useTranslations('NavBar');

    return (
        <nav
            className="fixed top-0 left-0 w-full z-50 px-3 py-3 border-b-2 dark:border-b-2 border-cyan-700  dark:border-cyan-400 bg-white dark:bg-dark-primary">
            <div className="mx-3 flex justify-between items-center">
                <div
                    className="md:hidden relative"
                >
                    <MobileHomeMenu/>

                </div>
                <Link href={"/"}
                      className="text-2xl mt-1 md:ps-10 md:text-3xl hover:text-cyan-700 dark:hover:text-cyan-300">{title || "Software Developer"}</Link>
                <div className="pt-2 text-lg flex gap-4 lg:gap-12 items-center justify-center md:pr-10 ">
                    {/*<div className="hidden md:flex">*/}
                        {/* <Link 
                            className="hidden md:flex cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"/vollmed/user"}
                            >Upcoming Feature        
                        </Link> */}
                    {/*</div>*/}

                    <div className="hidden md:flex">
                        <Link
                            className=" cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"#Certificados"}
                        >{t('certificates')}
                        </Link>
                    </div>

                    <div className="hidden md:flex">
                        <Link
                            className=" cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"#Conhecimentos"}
                        >{t('knowledge')}
                        </Link>
                    </div>

                    <div className="hidden md:flex">
                        <Link
                            className=" cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"#Projetos"}
                        >{t('projects')}
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link
                            className=" cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"#Sobre"}
                        >{t('about')}
                        </Link>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <LanguageToggle/>
                        <ThemeToggle/>
                    </div>
                </div>
            </div>
        </nav>
    )

}