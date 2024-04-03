import Image from "next/image";

export function HtmlIcon () {
    return <Image
    src='/images/icons/html.svg'
    alt="html icon"
    height={50}
    width={50}
/>
}
export function CssIcon () {
    return <Image
    src='/images/icons/css.svg'
    alt="css icon"
    height={50}
    width={50}
/>
}
export function TailwindIcon () {
    return <Image
    src='/images/icons/tailwind-css.svg'
    alt="tailwind css icon"
    height={50}
    width={50}
/>
}
export function JavaScriptIcon () {
    return <Image
    src='/images/icons/javascript.svg'
    alt="javascript icon"
    height={50}
    width={50}
/>
}
export function TypeScriptIcon () {
    return <Image
    src='/images/icons/ts.svg'
    alt="typescript icon"
    height={50}
    width={50}
/>
}
export function NodeIcon () {
    return <Image
    src='/images/icons/nodejs.svg'
    alt="nodejs icon"
    height={50}
    width={80}
/>
}
export function NextJsIcon () {
    return <Image
    src='/images/icons/nextjs.svg'
    alt="nextjs icon"
    height={50}
    width={45}
    className="my-6 bg-zinc-50 rounded-full"
/>
}
export function ReactIcon () {
    return <Image
    src='/images/icons/react.svg'
    alt="react icon"
    height={50}
    width={50}
/>
}
export function JavaIcon () {
    return <Image
    src='/images/icons/java.svg'
    alt="java icon"
    height={50}
    width={55}
/>
}
export function SpringIcon () {
    return <Image
    src='/images/icons/spring.svg'
    alt="spring icon"
    height={50}
    width={50}
/>
}
export function TechIcons () {
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