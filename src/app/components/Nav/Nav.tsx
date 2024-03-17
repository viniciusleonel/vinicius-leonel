import { useState } from "react";
import ToggleButton from "../ToggleButton/toggleButton";

export default function Nav () {

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
        <nav className="p-5 border-b border-cyan-400">
            <div className="flex justify-between items-center">
                <h2 className=" text-3xl ps-10">Full Stack Developer</h2>
                <div className=" text-lg flex justify-end items-center gap-16 pe-10">
                    <a onClick={listProjBack} className=" cursor-pointer hover:text-color-aqua">Back-end</a>
                    <a onClick={listProjFront} className=" cursor-pointer hover:text-color-aqua">Front-end</a>
                    <a onClick={listProjMobile} className=" cursor-pointer hover:text-color-aqua">Mobile</a>
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
                    <a href="#link1" className="dropdown-item">mobile</a>
                    <a href="#link2" className="dropdown-item">Link 2</a>
                    <a href="#link3" className="dropdown-item">Link 3</a>
                </div>
            )}
            
        </nav>
    )
}