import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "../ToggleThemeButton/toggle-theme-button";
import Link from "next/link"
import MobileHomeMenu from "./mobile-home-menu";

interface NavProps {
    title?: string 
}

export default function Nav ({title} : NavProps) {

    return (
        <nav className="fixed top-0 left-0 w-full z-50 px-3 py-3 border-b-2 dark:border-b-2 border-cyan-700  dark:border-cyan-400 bg-white dark:bg-dark-primary">
            <div className="mx-3 flex justify-between items-center">
                <div 
                    className="md:hidden relative"    
                >
                    <MobileHomeMenu />
                    
                </div>
                <Link href={"/"} className="text-2xl mt-1 md:ps-10 sm:text-3xl hover:text-cyan-700 dark:hover:text-cyan-300">{title || "Full Stack Developer"}</Link>
                <div className="pt-2 text-lg flex gap-12 items-baseline sm:pr-10">
                    <div className="hidden md:flex" >
                        <Link 
                            className="hidden md:flex cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"/#Projects"}
                        >Projects
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"/vollmed/user"}
                            >Upcoming Feature        
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer hover:text-cyan-700 dark:hover:text-cyan-300"
                            href={"/"}    
                            >About
                        </Link>
                    </div>
                    <ToggleButton />
                </div>
            </div>  
        </nav>
    )
    
}