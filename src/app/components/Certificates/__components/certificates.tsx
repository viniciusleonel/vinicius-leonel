import { cn } from "@/lib/utils";
import { FaCircle } from "react-icons/fa";

type CertificatesProps<T = unknown> = {
    children?: React.ReactNode;
    className?: string;
    title?: string;
    school?: string;
    link?: string;
} & T;

export function CertificatesMain({ children, className }: CertificatesProps) {
    return (
        <main
            className={cn(["h-auto sm:h-svh mx-8 sm:mx-10 md:mx-20 flex flex-col items-center sm:justify-center ", className])}
        >
            {children}
        </main>
    );
}

export function CertificatesTitle({ children, className }: CertificatesProps) {
    return (
        <div  className="flex items-baseline m-2 ">
            <span className="text-cyan-500  text-4xl">&#123;</span>
            <h2
                className={cn([
                    "text-3xl mb-6",
                    className,
                ])}
            >
                {children}
            </h2>
            <span className="text-cyan-500 text-4xl">&#125;</span>
        </div>
    );
}

export function CertificatesContent({
    children,
    className,
}: CertificatesProps) {
    return (
        <div className={cn(["flex flex-col w-full", className])}>
            {children}
        </div>
    );
}

export function CertificatesContentItem({
    children,
    className,
}: CertificatesProps) {
    return (
        <div
            className={cn([
                " flex h-auto min-w-52 ",
                className,
            ])}
        >
            {children}
        </div>
    );
}

export function CertificatesContentItemLink({
    children,
    className,
    link,
    title,
    school
}: CertificatesProps) {
    return (
        <a
            href={link}
            target="_blank"
            className={cn([
                "w-full flex  p-4 text-base sm:text-xl "
            ])}
        >
            
            <h3 className={cn(["flex hover:text-cyan-700 hover:underline dark:hover:text-cyan-500 gap-1", className])}>
                <FaCircle className="text-cyan-700 dark:text-cyan-500 pt-2" />
                {title} <span className="text-cyan-700 dark:text-cyan-500">| {school}</span>
            </h3>
        </a>
    );
}
