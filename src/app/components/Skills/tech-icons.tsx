import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

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

export function JackPackCompose({ className }: TechIconsProps) {
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

export function Docker({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link href={link ?? ""} target="_blank" rel="noopener noreferrer">
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

export function GitHub({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link href={link ?? ""} target="_blank" rel="noopener noreferrer">
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

export function JspIcon({ link, className }: TechIconsWithLinkProps) {
    return (
        <Link href={link ?? ""} target="_blank" rel="noopener noreferrer">
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
        <Link href={link ?? ""} target="_blank" rel="noopener noreferrer">
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
            <Python />
            <Postgres />
            <MySql />
            <Oracle />
            <Docker />
            <Git />
        </>
    );
}
