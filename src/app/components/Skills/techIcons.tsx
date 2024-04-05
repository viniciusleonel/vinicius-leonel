import Image from "next/image";

interface TechIconsProps {
    classStyle?: string
}

export function HtmlIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/html.svg'
    alt="html icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function CssIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/css.svg'
    alt="css icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function TailwindIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/tailwind-css.svg'
    alt="tailwind css icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function JavaScriptIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/javascript.svg'
    alt="javascript icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function TypeScriptIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/ts.svg'
    alt="typescript icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function NodeIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/nodejs.svg'
    alt="nodejs icon"
    height={50}
    width={80}
    className={classStyle}
/>
}
export function NextJsIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/nextjs.svg'
    alt="nextjs icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function ReactIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/react.svg'
    alt="react icon"
    height={50}
    width={48}
    className={classStyle}
/>
}
export function JavaIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/java.svg'
    alt="java icon"
    height={50}
    width={55}
    className={classStyle}
/>
}
export function SpringIcon ({classStyle} : TechIconsProps) {
    return <Image
    src='/images/icons/spring.svg'
    alt="spring icon"
    height={50}
    width={50}
    className={classStyle}
/>
}
export function TechIcons ({classStyle} : TechIconsProps) {
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
        </>
    )
}    