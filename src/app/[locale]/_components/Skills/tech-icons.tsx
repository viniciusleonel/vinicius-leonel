import { cn } from "@/lib/utils";
import {
    HoverCard,
    HoverCardTrigger,
    HoverCardContent,
} from "@/components/ui/hover-card";
import Image from "next/image";
import Link from "next/link";
import { FaFilePdf } from "react-icons/fa6";

interface TechIconsProps {
    className?: string;
}

interface TechIconsWithLinkProps {
    link?: string;
    className?: string;
}

export function HtmlIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/html.svg"
            alt="html icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function CssIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/css.svg"
            alt="css icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function TailwindIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/tailwind-css.svg"
            alt="tailwind css icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function JavaScriptIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/javascript.svg"
            alt="javascript icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function TypeScriptIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/ts.svg"
            alt="typescript icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function NodeIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/nodejs.svg"
            alt="nodejs icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function NextJsIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/nextjs.svg"
            alt="nextjs icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function ReactIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/react.svg"
            alt="react icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function JavaIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/java.svg"
            alt="java icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function SpringIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/spring.svg"
            alt="spring icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function Kotlin({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/kotlin.svg"
            alt="kotlin icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function AndroidIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/android.svg"
            alt="android icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export default function JetPackCompose({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/jetpack-compose.svg"
            alt="jetpack-compose icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function Python({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/python.svg"
            alt="python icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function Postgres({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/postgres.svg"
            alt="postgres icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function MySql({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/mysql.svg"
            alt="mysql icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function Oracle({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/oracle.svg"
            alt="oracle icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function Prisma({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/prisma.svg"
            alt="prisma icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function DockerLink({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link
            href={link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src="/images/icons/docker.svg"
                alt="docker icon"
                height={40}
                width={40}
                className={cn(className, "")}
            />
        </Link>
    );
}

export function DockerIcon({ link, className }: TechIconsWithLinkProps) {
    return (
        <Image
            src="/images/icons/docker.svg"
            alt="docker icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}
export function Git({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/git.svg"
            alt="git icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function GitHubLink({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link
            href={link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src="/images/icons/github.svg"
                alt="github icon"
                height={40}
                width={40}
                className={cn(className, "")}
            />
        </Link>
    );
}

export function GitHubIcon({ link, className }: TechIconsWithLinkProps) {
    return (
        <Image
            src="/images/icons/github.svg"
            alt="github icon"
            height={40}
            width={40}
            className={cn(className, "")}
        />
    );
}

export function JspIcon({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link
            href={link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src="/images/icons/jsp-icon.svg"
                alt="jsp icon"
                height={40}
                width={40}
                className={cn(className, "")}
            />
        </Link>
    );
}

export function BootstrapIcon({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link
            href={link ?? ""}
            target="_blank"
            rel="noopener noreferrer"
        >
            <Image
                src="/images/icons/bootstrap-icon.svg"
                alt="jsp icon"
                height={40}
                width={40}
                className={cn(className, "")}
            />
        </Link>
    );
}

export function PdfIcon({ className }: TechIconsProps) {
    return (
        <HoverCard>
            <HoverCardTrigger
                href="/viniciusleonel-en.pdf"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaFilePdf className="h-5 w-5 md:h-6 md:w-6 text-red-500 cursor-pointer" />
            </HoverCardTrigger>
            <HoverCardContent>Click to open my english CV</HoverCardContent>
        </HoverCard>
    );
}

export function MongoDBIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/mongodb.svg"
            alt="mongodb icon"
            height={35}
            width={35}
            className={cn(className, "")}
        />
    );
}

export function AzureIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/azure.svg"
            alt="azure icon"
            height={35}
            width={35}
            className={cn(className, "")}
        />
    );
}

export function RubyIcon({ className }: TechIconsProps) {
    return (
        <Image
            src="/images/icons/ruby.svg"
            alt="ruby icon"
            height={40}
            width={40}
            className={cn(className, "scale-150")}
        />
    );
}

export function TechIcons({ className }: TechIconsProps) {
    return (
        <>
            <HtmlIcon />
            <CssIcon />
            <TailwindIcon />
            <JavaScriptIcon />
            <TypeScriptIcon />
            <NodeIcon />
            <NextJsIcon />
            <ReactIcon />
            <JavaIcon />
            <SpringIcon />
            <Kotlin />
            <AndroidIcon />
            <Python />
            <MongoDBIcon />
            <Postgres />
            <MySql />
            <Oracle />
            <Git />
            <GitHubIcon />
            <DockerIcon />
            <AzureIcon />
        </>
    );
}
