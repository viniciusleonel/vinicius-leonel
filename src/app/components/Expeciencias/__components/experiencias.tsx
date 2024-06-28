import { cn } from "@/lib/utils";

type ExperienciasProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

export function ExperienciasMain({ children, className }: ExperienciasProps) {
    return <main className={cn(["mx-20 flex flex-col", className])}>{children}</main>;
}

export function ExperienciasTitle({ children, className }: ExperienciasProps) {
    return <h2 className={cn(["text-3xl mb-6 flex items-center justify-center md:justify-start", className])}>{children}</h2>;
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
                "flex flex-col bg-slate-200 dark:bg-dark-primary min-w-52 ",
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
                "w-fit justify-start p-4 ps-10  text-xl",
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
        <div className={cn(["flex flex-col justify-between gap-4 p-6", className])}>
            {children}
        </div>
    );
}

export function ExperienciasTechTitle({
    children,
    className,
}: ExperienciasProps) {
    return <h3 className={cn([" text-2xl text-cyan-700 dark:text-cyan-500", className])}>{children}</h3>;
}

export function ExperienciasTechDescription({
    children,
    className,
}: ExperienciasProps) {
    return <p className={cn(["text-sm md:text-base text-zinc-800 dark:text-zinc-400", className])}>{children}</p>;
}

export function ExperienciasTechIcons({
    children,
    className,
}: ExperienciasProps) {
    return (
        <div className={cn(["flex gap-4", className])}>{children}</div>
    );
}
