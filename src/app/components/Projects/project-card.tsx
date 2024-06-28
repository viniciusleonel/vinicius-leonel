import Image from "next/image"
import { lusitana } from '@/app/ui/fonts'
import Link from "next/link"
import { MdScreenShare } from "react-icons/md";

interface ProjectCardProps {
    title: string,
    description: string,
    techIcons: JSX.Element[],
    linkSite: string,
    linkGitHub: string
}

export default function ProjectCard ( { title, description, techIcons, linkSite, linkGitHub} : ProjectCardProps) {
    return (
        <div className="bg-white dark:bg-dark-secondary relative h-[16rem] sm:h-[18rem] lg:h-[20rem] w-full xs:w-[14rem] sm:w-[18rem] lg:w-[20rem] border-2 rounded-3xl border-cyan-500">
            <div className="text-center flex flex-col justify-between pt-4 md:pt-8 pe-1">

                <div><h4 className="text-2xl pb-2">{title}</h4></div>

                <div className="overflow-y-auto  max-h-36 lg:max-h-40">
                    <p className={`${lusitana.className} px-4 text-sm lg:text-base text-zinc-800 dark:text-zinc-400`}>{description}</p>
                </div>

                <div className="flex w-full gap-2 justify-between items-center">
                    <div className="flex absolute bottom-4 left-4">
                        {techIcons?.map((icon, index) => (
                            <div key={index} className="w-6 sm:w-8">
                                {icon}
                            </div>
                        ))}
                    </div> 
                    <div className="absolute bottom-4 right-4 flex gap-2 items-center">
                        <Link
                            href={linkSite}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <MdScreenShare className="size-6 sm:size-8" />
                        </Link>
                        <Link
                            href={linkGitHub}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Image 
                                src='/images/icons/github.svg'
                                alt="github icon"
                                height={50}
                                width={40}
                                className="w-6 sm:w-8"
                            />
                        </Link>
                    </div>
                </div>         
            </div>
        </div>
    )
}