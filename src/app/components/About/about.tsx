/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { lusitana } from "@/app/ui/fonts";
import { FaFilePdf } from "react-icons/fa6";
import { Avatar } from "@nextui-org/react";
import { AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@radix-ui/react-hover-card";
import { PdfIcon } from "../Skills/tech-icons";

export default function About() {
    return (
        <div className="sm:h-svh w-full  my-8 flex justify-center items-center">
            <div className="w-full  mx-8 lg:mx-20  dark:bg-dark-secondary border-2 border-cyan-700 dark:border-cyan-500 rounded-3xl">
                <div className="mt-10 text-2xl md:text-3xl flex items-center justify-center w-full">
                    <span className="text-cyan-500 text-4xl">&#123;</span>
                    <h2 className="pt-1"> HELLO WORLD </h2>
                    <span className="text-cyan-500 text-4xl">&#125;</span>
                </div>
                <div className="p-4 sm:px-8 md:px-10 lg:px-14 flex flex-col sm:flex-row items-center justify-center  w-full">
                    <div className="w-full ">
                        <div className="">
                            <div className=" flex flex-col md:flex-row items-baseline">
                                <p className="dark:text-cyan-100">
                                    My name is{" "}
                                </p>
                                <h1 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                                    {" "}
                                    Vinícius Leonel
                                </h1>
                            </div>
                            <div className="flex flex-col md:flex-row items-baseline">
                                <p className="dark:text-cyan-100">I'am a</p>
                                <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">
                                    Software Developer
                                </h2>
                            </div>
                        </div>
                        <p
                            className={`${lusitana.className} mt-6 text-sm md:text-base text-zinc-800 dark:text-zinc-300`}
                        >
                            Currently in the final year of the System
                            Development and Analysis course at FIAP.
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"></span>
                            <br />
                            Java backend developer using Spring to build RESTful
                            APIs, with knowledge in frontend technologies such
                            as Next.js, TypeScript, and React. Bilingual
                            (Portuguese and English)
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
                                        alt="linkedin icon"
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
                                        alt="github icon"
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
                                        alt="whatsapp icon"
                                        height={50}
                                        width={50}
                                    />
                                </Link>

                                <Link
                                    href="/viniciusleonel-en.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PdfIcon />
                                </Link>
                                
                            </div>
                            <div className="me-6 md:hidden">
                                <Image
                                    src="/images/vinicius.jpeg"
                                    height={100}
                                    width={400}
                                    alt="Vinicius profile picture"
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
                            alt="Vinicius profile picture"
                            className=" border-2 border-cyan-700 dark:border-cyan-500 rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
