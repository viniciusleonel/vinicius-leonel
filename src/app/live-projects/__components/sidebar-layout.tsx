import Link from "next/link";
import { cn } from "@/lib/utils";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { Button } from "@/components/ui/button";

export type SidebarProps<T = unknown> = {
    children: React.ReactNode;
    className?: string;
} & T;

type SidebarButtonProps = {
    href?: string;
    active?: boolean;
    onClick?: () => void;
    itensList?: string[];
};

export function SidebarContainer({ children, className }: SidebarProps) {
    return (
        <aside className={cn("pt-20 pb-4 flex sm:flex-col gap-2 sm:min-h-screen border-b-2 sm:border-r-2 border-cyan-700  dark:border-cyan-400", className)}>
            {children}
        </aside>
    );
}

export function SidebarTitle({ children, className }: SidebarProps) {
    return (
        <h1
            className={cn(
                "text-2xl border font-semibold mx-2 p-4 hidden sm:flex  gap-2  rounded-md",
                className
            )}
        >
            {children}
        </h1>
    );
}

export function SidebarNavButtonText ({ children, className }: SidebarProps) {
    return (
        <span
            className={cn(
                "hidden sm:flex",
                className
            )}
        >
            {children}
        </span>
    );
}

export function SidebarNavButton({
    children,
    className,
    active,
    onClick,
    itensList,
}: SidebarProps<SidebarButtonProps>) {
    return (
        <div className="w-full px-5 ">
            <Button
                variant="outline"
                onClick={onClick}
                className={cn([
                    "sm:w-full flex items-center justify-between gap-2 hover:bg-cyan-200 dark:hover:bg-cyan-700",
                    className,
                    active ? "bg-cyan-200 dark:bg-cyan-700" : "bg-transparent",
                ])}
            >
                {children}
                {active ? (
                    <IoIosArrowDown className="h-5 w-5 flex " />
                ) : (
                    <IoIosArrowUp className="h-5 w-5 flex " />
                )}
            </Button>
            {active && (
                <ul className="mt-2 ml-8 list-disc ">
                    {itensList?.map((item, index) => (
                        <li className="hover:text-cyan-700 dark:hover:text-cyan-300 cursor-pointer" key={index}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
