import { cn } from "@/lib/utils";

type ExperienciasProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

export function ExperienciasMain({ children, className }: ExperienciasProps) {
    return (
        <main
            className={cn(["sm:h-svh mx-8 sm:mx-10 md:mx-20 flex flex-col items-center sm:justify-center ", className])}
        >
            {children}
        </main>
    );
}

export function ExperienciasTitle({ children, className }: ExperienciasProps) {
    return (
        <div  className="flex items-baseline m-2 ">
            <span className="text-cyan-500 text-4xl">&#123;</span>
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

export function ExperienciasContent({
    children,
    className,
}: ExperienciasProps) {
    return (
        <div className={cn(["flex flex-col md:flex-row", className])}>
            {children}
        </div>
    );
}

export function ExperienciasContentItem({
    children,
    className,
}: ExperienciasProps) {
    return (
        <div
            className={cn([
                "flex flex-col h-60  dark:bg-dark-primary min-w-52 ",
                className,
            ])}
        >
            {children}
        </div>
    );
}

type ExperienciasContentItemLinkProps = {
    onClick?: () => void;
    active?: boolean;
};

export function ExperienciasContentItemLink({
    children,
    className,
    active,
    onClick,
}: ExperienciasProps<ExperienciasContentItemLinkProps>) {
    return (
        <button
            onClick={onClick}
            className={cn([
                "w-full text-left p-4 ps-10  text-xl",
                active
                    ? "border-s-4 ps-8 text-cyan-700 dark:text-cyan-500 border-cyan-700 dark:border-cyan-500"
                    : "",
            ])}
        >
            {children}
        </button>
    );
}

export function ExperienciasTechContent({
    children,
    className,
}: ExperienciasProps) {
    return (
        <div
            className={cn([
                "flex flex-col h-72 md:h-60 lg:h-auto justify-between gap-4 p-6",
                className,
            ])}
        >
            {children}
        </div>
    );
}

export function ExperienciasTechTitle({
    children,
    className,
}: ExperienciasProps) {
    return (
        <h3
            className={cn([
                " text-2xl text-cyan-700 dark:text-cyan-500",
                className,
            ])}
        >
            {children}
        </h3>
    );
}

export function ExperienciasTechDescription({
    children,
    className,
}: ExperienciasProps) {
    return (
        <p
            className={cn([
                "text-sm pe-1 md:text-base overflow-y-auto text-zinc-800 dark:text-zinc-400",
                className,
            ])}
        >
            {children}
        </p>
    );
}

export function ExperienciasTechIcons({
    children,
    className,
}: ExperienciasProps) {
    return (
        <div className={cn(["flex gap-4 flex-wrap", className])}>
            {children}
        </div>
    );
}
