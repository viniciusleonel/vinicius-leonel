import Image from "next/image";
import Link from "next/link";


export default function About () {
    return (
        <div className=" pt-8 px-6 sm:px-10 md:px-16 lg:px-60">
            <div className="px-6 bg-zinc-200 dark:bg-zinc-900 flex flex-col sm:flex-row items-center justify-center p-4 w-full border border-cyan-700 rounded-3xl">
                <div>
                    <div className="mt-6 ms-2 text-2xl md:text-3xl">
                        <h2><span className="text-cyan-500">&#123;</span> HELLO WORLD <span className="text-cyan-500">&#125;</span></h2>
                    </div>
                    <p className="mt-6 ms-2 sm:w-3/4 w-full text-sm md:text-base text-zinc-800 dark:text-zinc-400">
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
                                layout="fill"
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