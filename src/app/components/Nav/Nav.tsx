import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "../ToggleButton/toggleButton";
import Link from "next/link"

interface NavProps {
    title?: string 
}

export default function Nav ({title} : NavProps) {

    const [backList, setBack] = useState(false)
    const [frontList, setFront] = useState(false)
    const [mobileList, setMobile] = useState(false)
    
    const listProjBack = () => {
        setBack(!backList)
        setFront(false)
        setMobile(false)
    };

    const listProjFront = () => {
        setFront(!frontList)
        setBack(false)
        setMobile(false)
    }

    const listProjMobile = () => {
        setMobile(!mobileList)
        setBack(false)
        setFront(false)
    }

    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setBack(false);
                setFront(false);
                setMobile(false);
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
                <GiHamburgerMenu className="md:hidden text-cyan-300 text-2xl" />
                <h2 className="text-xl md:ps-10 sm:text-3xl">{title || "Full Stack Developer"}</h2>
                <div ref={menuRef} className="text-lg flex gap-12 items-baseline sm:pr-10">
                    <div className="hidden md:flex" >
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
                            href={"/#Projects"}
                        >Projects
                        </Link>
                        {/* <a href="#Projects" className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Projects</a> */}
                        {/* {backList && (
                            <div className="flex flex-col dropdown-menu absolute ">
                                <a href="#link1" className="dropdown-item dark:hover:text-cyan-300">Back</a>
                                <a href="#link2" className="dropdown-item dark:hover:text-cyan-300">Link 2</a>
                                <a href="#link3" className="dropdown-item dark:hover:text-cyan-300">Link 3</a>
                            </div>
                        )}    */}
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
                            href={"/vollmed/user"}
                            >Upcoming Feature        
                        </Link>
                        {/* <a onClick={listProjFront} className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Front-end</a> */}
                        {/* {frontList && (
                            <div className="flex flex-col dropdown-menu absolute ">
                                <a href="#link1" className="dropdown-item dark:hover:text-cyan-300">Front</a>
                                <a href="#link2" className="dropdown-item dark:hover:text-cyan-300">Link 2</a>
                                <a href="#link3" className="dropdown-item dark:hover:text-cyan-300">Link 3</a>
                            </div>
                        )} */}
                    </div>
                    <div className="hidden md:flex">
                        <Link 
                            className="hidden md:flex cursor-pointer dark:hover:text-cyan-300"
                            href={"/"}    
                            >About
                        </Link>
                        {/* <a href="" className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Mobile</a> */}
                        {/* {mobileList && (
                            <div className="flex flex-col dropdown-menu absolute ">
                                <a href="/vollmed/user" className="dropdown-item dark:hover:text-cyan-300">Mobile</a>
                                <a href="#link2" className="dropdown-item dark:hover:text-cyan-300">Link 2</a>
                                <a href="#link3" className="dropdown-item dark:hover:text-cyan-300">Link 3</a>
                            </div>
                        )} */}
                    </div>
                    <ToggleButton />
                </div>
            </div>  
        </nav>
    )
    
}