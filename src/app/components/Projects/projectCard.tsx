import Image from "next/image"
import { JavaIcon, SpringIcon } from "../Skills/techIcons"
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    imgCardSrc: string,
    title: string,
    description: string,
    techIcons: JSX.Element[],
    linkSite: string,
    linkGitHub: string
}

export default function ProjectCard ( {imgCardSrc, title, description, techIcons, linkSite, linkGitHub} : ProjectCardProps) {
    return (
        <div className="w-[20rem] border-2 rounded-3xl border-cyan-300">
            <div className="">
                <Image
                className="w-full rounded-t-3xl border-b-2 border-cyan-300"
                src={imgCardSrc}
                alt=""
                height={50}
                width={50}
                />
            </div>
            <div className="text-center p-4">
                <h4 className="text-2xl pb-2">{title}</h4>
                <p>{description}</p>
                <div className="flex w-full gap-2 pt-4 justify-between items-center">
                <div className="flex">
                    {techIcons?.map((icon, index) => (
                        <div key={index} className="w-8">
                            {icon}
                        </div>
                    ))}
                </div> 
                    <div className="flex gap-2 items-center">
                        <Link
                                href={linkSite}
                                className="flex items-center justify-center border-2 rounded-full text-cyan-300 w-6 h-6 border-cyan-300"
                            >
                            <FaExternalLinkAlt
                                className="text-xs"
                            />
                        </Link>
                        <Link
                            href={linkGitHub}
                        >
                        <Image 
                            src='/images/icons/github.svg'
                            alt="github icon"
                            height={50}
                            width={40}
                            className="w-8"
                        />
                        </Link>
                    </div>
                </div>         
            </div>
        </div>
    )
}