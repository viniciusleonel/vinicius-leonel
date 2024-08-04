import { cn } from "@/lib/utils";

type ContentProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

export function ContentMain({ children, className }: ContentProps) {
    return (
        <main className={cn("h-full w-full pt-16", className)}>{children}</main>
    );
}

export function ContentHeader({ children, className }: ContentProps) {
    return (
        <div
            className={cn(
                "p-4 flex items-start justify-between w-full border-b-2 border-cyan-700 dark:border-cyan-300 ",
                className
            )}
        >
            {children}
        </div>
    );
}

export function ContentHeaderTitle({ children, className }: ContentProps) {
    return <h1 className={cn("text-4xl font-bold", className)}>{children}</h1>;
}

export function ContentHeaderTechList({ children, className }: ContentProps) {
    return <div className={cn("flex items-center gap-4", className)}>{children}</div>;
}

export function ContentBody({ children, className }: ContentProps) {
    return <div className={cn("p-4", className)}>{children}</div>;
}

export function ContentBodyDescription({ children, className }: ContentProps) {
    return <p className={cn("text-lg", className)}>{children}</p>;
}
