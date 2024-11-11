import { cn } from "@/lib/utils";
import Image from "next/image";

interface FlagProps {
    className?: string;
    alt: string;
}

export function BrFlag({ className, alt }:FlagProps)  {
    return (
        <Image
            src="/images/icons/br-flag.svg"
            alt={alt}
            height={25}
            width={25}
            className={cn(className, "")}
        />
    )
}

export function UsFlag({ className, alt }: FlagProps) {
    return (
        <Image
            src="/images/icons/us-flag.svg"
            alt={alt}
            height={25}
            width={25}
            className={cn(className, "")}
        />
    )
}