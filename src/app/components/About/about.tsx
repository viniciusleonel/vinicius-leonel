/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import Link from "next/link";
import { lusitana } from '@/app/ui/fonts';

export default function About () {
    return (
        <div className="mx-8 lg:mx-16 bg-zinc-200 dark:bg-zinc-900 border border-cyan-700 rounded-3xl">
                <div className="mt-10 ms-1 text-2xl md:text-3xl flex items-center justify-center w-full">
                    <span className="text-cyan-500 text-4xl">&#123;</span>
                    <h2 className="pt-1"> HELLO WORLD </h2>
                    <span className="text-cyan-500 text-4xl">&#125;</span>
                </div>
            <div className="px-6  flex flex-col sm:flex-row items-center justify-center p-4 w-full ">
                <div>
                    <div className=" ms-2 w-full">
                        <div className=" flex flex-col md:flex-row items-baseline">
                            <p className="">My name is </p>
                            <h1 className="ms-1 text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"> Vinícius Leonel</h1>
                        </div>
                        <div className="flex flex-col md:flex-row items-baseline">
                            <p className="">I'am a</p>
                            <h2 className="ms-1 justify-end text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">Full Stack Developer</h2>
                        </div>
                    </div>
                    <p className={`${lusitana.className} mt-6 ms-2 sm:w-3/4 w-full text-sm md:text-base text-zinc-800 dark:text-zinc-400`}>
                        Currently studying System Development and Analysis at FIAP + Alura. ( Java, OOP, Spring Boot and Kotlin. )
                        Living in São Paulo and looking for an opportunity to further develop my skills.
                    </p>
                    <div className="flex justify-between mt-6 ">
                        <div className="flex items-center">
                            <Link
                                href="https://www.linkedin.com/in/viniciuslps/"
                            >
                            <Image 
                                src='/images/icons/linkedin.svg'
                                alt="linkedin icon"
                                height={50}
                                width={50}
                            />
                            </Link>

                            <Link
                                href="https://github.com/viniciusleonel"
                            >
                            <Image 
                                src='/images/icons/github.svg'
                                alt="github icon"
                                height={50}
                                width={50}
                            />
                            </Link>
                        </div>

                        <div className="me-6 sm:hidden">
                            <Image 
                                src="/images/vinicius.jpeg"
                                height={100}
                                width={400}
                                alt="Vinicius profile picture" 
                                className="w-20 border-2 border-cyan-600 rounded-full"
                            />
                        </div>
                    </div>

                    
                </div>

                <div className="me-6 hidden sm:flex">
                    <Image 
                        src="/images/vinicius.jpeg"
                        height={100}
                        width={400}
                        alt="Vinicius profile picture" 
                        className=" border-2 border-cyan-600 rounded-full"
                    />
                </div>
                
                
            </div>
        </div>
    )
}