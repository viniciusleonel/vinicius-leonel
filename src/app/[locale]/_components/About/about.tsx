/* eslint-disable react/no-unescaped-entities */
import {useTranslations} from 'next-intl';
import Image from "next/image";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { PdfIcon } from "../Skills/tech-icons";

export default function About() {

    const t = useTranslations('HomePage');
    const tAbout = useTranslations('About');

    return (
        <div className="sm:h-svh w-full  my-8 flex justify-center items-center">
            <div className="w-full  mx-8 lg:mx-20  dark:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 rounded-3xl">
                <div className="mt-10 text-2xl md:text-3xl flex items-center justify-center w-full">
                    <span className="text-cyan-500 text-4xl">&#123;</span>
                    <h2 className="pt-1"> {t('title')} </h2>
                    <span className="text-cyan-500 text-4xl">&#125;</span>
                </div>
                <div className="p-4 sm:px-8 md:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-center  w-full">
                    <div className="w-full ">
                        <div className="">
                            <div className=" flex flex-col md:flex-row items-baseline">
                                <p className="dark:text-cyan-100">
                                    {tAbout('name')}{" "}
                                </p>
                                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                                    {" "}
                                    Vinícius Leonel
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row items-baseline">
                                <p className="dark:text-cyan-100">{tAbout('iam')}</p>
                                <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                                    {tAbout('job')}
                                </h2>
                            </div>
                        </div>
                        <p
                            className={`${lusitana.className}  mt-6 text-sm md:text-base text-zinc-800 dark:text-zinc-400`}
                        >
                            {tAbout('description')}
                            <span className="bg-clip-text text-transparent bg-gradient-to-r text-zinc-800 dark:text-zinc-400 from-cyan-400 to-blue-600"></span>
                            <br />
                        </p>
                        <div className="flex items-center justify-between mt-4 ">
                            <div className="flex items-center gap-2 w-32 lg:w-40 -m-2 pt-6">
                                <Link
                                    href="https://www.linkedin.com/in/viniciuslps/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/images/icons/linkedin.svg"
                                        alt={tAbout('linkedin-alt')}
                                        height={50}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    href="https://github.com/viniciusleonel"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/images/icons/github.svg"
                                        alt={tAbout('github-alt')}
                                        height={50}
                                        width={50}
                                    />
                                </Link>
                                <Link
                                    href="https://wa.me/+5511993310776"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Image
                                        src="/images/icons/whatsapp.svg"
                                        alt={tAbout('whatsapp-alt')}
                                        height={50}
                                        width={50}
                                    />
                                </Link>
                    
                                {/* <PdfIcon /> */}
                                
                            </div>
                            <div className="me-6 md:hidden">
                                <Image
                                    src="/images/vinicius.jpeg"
                                    height={100}
                                    width={400}
                                    alt={tAbout('picture-alt')}
                                    className="w-20 border-2 border-cyan-700 dark:border-cyan-500 rounded-full"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="me-6 mb-10 hidden md:flex ">
                        <Image
                            src="/images/vinicius.jpeg"
                            height={100}
                            width={400}
                            alt={tAbout('picture-alt')}
                            className=" border-2 border-cyan-700 dark:border-cyan-500 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
