import Image from "next/image"
import { lusitana } from '@/app/ui/fonts';
import Link from "next/link"
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectCardProps {
    imgCardSrc?: string,
    imgAlt: string,
    title: string,
    description: string,
    techIcons: JSX.Element[],
    linkSite: string,
    linkGitHub: string
}

export default function ProjectCard ( {imgCardSrc, imgAlt, title, description, techIcons, linkSite, linkGitHub} : ProjectCardProps) {
    return (
        <div className="dark:bg-dark-secondary relative h-[28rem] lg:h-[30rem] w-full sm:w-[18rem] lg:w-[20rem] border-2 rounded-3xl border-cyan-500">
            <div className="relative h-36 sm:h-44 lg:h-52 ">
                <Image
                className=" rounded-t-3xl border-b-2 border-cyan-500"
                src={imgCardSrc || "/images/default.jpg"}
                alt={imgAlt}
                layout="fill"
                objectFit="cover"
                />
            </div>
            <div className=" text-center pt-4 pe-1">
                <h4 className="text-2xl pb-2">{title}</h4>
                <div className=" overflow-y-auto max-h-36">
                    <p className={`${lusitana.className} px-2 text-sm lg:text-base text-zinc-800 dark:text-zinc-400`}>{description}</p>
                </div>
                <div className="flex w-full gap-2 pt-4 justify-between items-center">
                    <div className="flex absolute bottom-4 left-4">
                        {techIcons?.map((icon, index) => (
                            <div key={index} className="w-4 sm:w-8">
                                {icon}
                            </div>
                        ))}
                    </div> 
                    <div className=" absolute bottom-4 right-4 flex gap-2 items-center">
                        <Link
                                href={linkSite}
                            >
                            <Image 
                                src='/images/icons/github.svg'
                                alt="github icon"
                                height={50}
                                width={40}
                                className="w-4 sm:w-8"
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
                            className="w-4 sm:w-8"
                        />
                        </Link>
                    </div>
                </div>         
            </div>
        </div>
    )
}