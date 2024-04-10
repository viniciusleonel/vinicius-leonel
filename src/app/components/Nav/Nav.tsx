import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "../ToggleButton/toggleButton";
import Link from "next/link"

interface NavProps {
    title?: string 
}

export default function Nav ({title} : NavProps) {

    const [menuBurguer, setMenuBurguer] = useState(false)

    const handleMenuBurguer = () => {
        setMenuBurguer(!menuBurguer)
    }
    
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuBurguer(false)
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full z-50 p-3 border-b-4 border-cyan-700 dark:border-b-2 dark:border-cyan-400 bg-white dark:bg-dark-primary">
            <div className="ms-3 me-3 flex justify-between items-center">
                <div ref={menuRef}
                    className="md:hidden relative"    
                >
                    <GiHamburgerMenu 
                        className="md:hidden  text-cyan-700 dark:text-cyan-400 text-2xl cursor-pointer" 
                        onClick={handleMenuBurguer}
                    />
                    {menuBurguer && (
                        <div className="md:hidden animate-slideRight absolute top-[2.7rem] -left-6 flex flex-col border border-cyan-700 dark:border-cyan-500 ">
                            <Link 
                                className="p-4 hover:text-cyan-700 hover:bg-slate-100 bg-white dark:bg-dark-primary dark:hover:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 w-full md:flex cursor-pointer dark:hover:text-cyan-300"
                                href={"/#Projects"}
                            >Projects
                            </Link>
                            <Link 
                                className="p-4 hover:text-cyan-700 hover:bg-slate-100 bg-white dark:bg-dark-primary dark:hover:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 w-full md:flex cursor-pointer dark:hover:text-cyan-300"
                                href={"/vollmed/user"}
                                >Upcoming Feature        
                            </Link>
                            <Link 
                                className="p-4 hover:text-cyan-700 hover:bg-slate-100 bg-white dark:bg-dark-primary dark:hover:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 w-full md:flex cursor-pointer dark:hover:text-cyan-300"
                                href={"/"}    
                                >About
                            </Link>
                        </div>
                    )}
                </div>
                <h2 className="text-xl md:ps-10 sm:text-3xl">{title || "Full Stack Developer"}</h2>
                <div className="text-lg flex gap-12 items-baseline sm:pr-10">
                    <div className="hidden md:flex" >
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
                            href={"/#Projects"}
                        >Projects
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
                            href={"/vollmed/user"}
                            >Upcoming Feature        
                        </Link>
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
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