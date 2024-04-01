import Image from "next/image";

export default function Skills () {
    return (
        <div className="bg-cyan-100 dark:bg-zinc-900 flex flex-1 flex-col justify-center  p-4 w-full border border-cyan-700 rounded-3xl">
            <h3 className=" text-3xl text-center">Skills</h3>
            <div className="flex justify-around items-center flex-wrap w-full ">
            
                <Image 
                    src='/images/icons/kotlin.svg'
                    alt="teste"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/java.svg'
                    alt="teste"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/spring.svg'
                    alt="teste"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/nodejs.svg'
                    alt="teste"
                    height={50}
                    width={80}
                    className=""
                />
                <Image 
                    src='/images/icons/nextjs.svg'
                    alt="teste"
                    height={50}
                    width={50}
                    className=" bg-zinc-50  rounded-full"
                />
                <Image 
                    src='/images/icons/ts.svg'
                    alt="teste"
                    height={50}
                    width={50}
                />
                <Image 
                    src='/images/icons/react.svg'
                    alt="teste"
                    height={50}
                    width={50}
                />
            </div>
        </div>
    )
}