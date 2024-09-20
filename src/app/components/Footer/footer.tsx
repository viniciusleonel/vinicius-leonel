import Link from "next/link";

export default function Footer () {
    return (
        <footer className="bg-cyan-700 dark:bg-cyan-500 flex items-center justify-center py-3 gap-1">
            Em fase de desenvolvimento - 
            <Link 
                href={"https://www.linkedin.com/in/viniciuslps/"}
                className="hover:text-cyan-500 dark:hover:text-black"
            >
                Vinicius Leonel
            </Link>
        </footer>
    )
}