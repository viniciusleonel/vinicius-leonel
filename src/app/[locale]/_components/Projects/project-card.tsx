import Image from "next/image"
import { lusitana } from '@/app/ui/fonts'
import Link from "next/link"
import { MdScreenShare } from "react-icons/md";
import {useTranslations} from 'next-intl';


interface ProjectCardProps {
    title: string,
    description: string,
    techIcons: JSX.Element[],
    linkSite: string,
    linkGitHub: string
}

export default function ProjectCard ( { title, techIcons, linkSite, linkGitHub} : ProjectCardProps) {

    const t = useTranslations('Projects');

    const nextIntlPath = `${title.trim().replace(/[\s-]+/g, '')}.description`;
    const description = t(nextIntlPath);

    return (
        <div className="flex bg-white dark:bg-dark-secondary relative h-[16rem] sm:h-[18rem] lg:h-[20rem] w-full xs:w-[14rem] sm:w-[18rem] lg:w-[20rem] border-2 rounded-3xl border-cyan-500">
            <div className="text-center flex flex-col justify-between py-4 md:py-8 pe-1">

                <div><h4 className="text-2xl ">{title}</h4></div>

                <div className="overflow-y-auto max-h-36 lg:max-h-40">
                    <p className={`${lusitana.className} px-4 text-sm lg:text-base text-zinc-800 dark:text-zinc-400`}>{description}</p>
                </div>

                <div className="flex justify-between w-full px-2 ">
                    <div className="flex gap-1 items-center">
                        {techIcons?.map((icon, index) => (
                            <div key={index} className="w-6 sm:w-8">
                                {icon}
                            </div>
                        ))}
                    </div> 

                    <div className="flex gap-2">
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