import Image from "next/image";

export default function Skills () {
    return (
        <div className={` bg-cyan-100  dark:bg-zinc-900 flex flex-1 flex-col justify-center p-4 w-full border border-cyan-700 rounded-3xl `}>
            <h3 className="text-2xl md:text-3xl text-center">Skills</h3>
            <div className={`grid grid-cols-5 md:grid-cols-10 justify-center gap-4 items-center  w-full `}>
            
                <Image 
                    src='/images/icons/html.svg'
                    alt="html icon"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/css.svg'
                    alt="css icon"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/tailwind-css.svg'
                    alt="tailwind css icon"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/javascript.svg'
                    alt="javascript icon"
                    height={50}
                    width={50}
                    className=""
                />
                <Image 
                    src='/images/icons/ts.svg'
                    alt="typescript icon"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/nodejs.svg'
                    alt="nodejs icon"
                    height={50}
                    width={80}
                    className=""
                />
                <Image 
                    src='/images/icons/nextjs.svg'
                    alt="nextjs icon"
                    height={50}
                    width={45}
                    className=" dark:bg-zinc-50  rounded-full"
                />
                
                <Image 
                    src='/images/icons/react.svg'
                    alt="react icon"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/java.svg'
                    alt="java icon"
                    height={50}
                    width={55}
                />
                <Image 
                    src='/images/icons/spring.svg'
                    alt="spring icon"
                    height={50}
                    width={50}
                />
            </div>
        </div>
    )
}