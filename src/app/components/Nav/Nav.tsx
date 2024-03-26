import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import ToggleButton from "../ToggleButton/toggleButton";

interface NavProps {
    title: string 
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

    return (
        <nav className="fixed w-full p-3 border-b-4 border-cyan-700 dark:border-b-2 dark:border-cyan-300">
            <div className="flex justify-evenly md:justify-between items-center">
                <GiHamburgerMenu className="md:hidden text-cyan-300 size-5" />
                <h2 className="text-xl sm:text-3xl sm:ps-10">{title}</h2>
                <div className=" text-lg flex justify-end items-center sm:gap-12 sm:pe-10">
                    <a onClick={listProjBack} className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Back-end</a>
                    <a onClick={listProjFront} className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Front-end</a>
                    <a onClick={listProjMobile} className="hidden md:flex cursor-pointer dark:hover:text-cyan-300">Mobile</a>
                    <ToggleButton />
                </div>
            </div>
            {backList && (
                <div className="dropdown-menu absolute">
                    <a href="#link1" className="dropdown-item">back</a>
                    <a href="#link2" className="dropdown-item">Link 2</a>
                    <a href="#link3" className="dropdown-item">Link 3</a>
                </div>
            )}

            {frontList && (
                <div className="dropdown-menu absolute">
                    <a href="#link1" className="dropdown-item">front</a>
                    <a href="#link2" className="dropdown-item">Link 2</a>
                    <a href="#link3" className="dropdown-item">Link 3</a>
                </div>
            )}

            {mobileList && (
                <div className="dropdown-menu absolute">
                    <a href="/vollmed/user" className="dropdown-item">mobile</a>
                    <a href="#link2" className="dropdown-item">Link 2</a>
                    <a href="#link3" className="dropdown-item">Link 3</a>
                </div>
            )}
            
        </nav>
    )
}