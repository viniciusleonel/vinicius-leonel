import { SheetTrigger, SheetContent, Sheet } from "@/app/vollmed/user/dashboard/ui/sheet"
import Link from "next/link"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import { UserIcon } from "lucide-react"
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { TbBrandSass } from "react-icons/tb";


export default function MobileHomeMenu () {
    
    return (
        <div className=" ">
            <header className=" ">
            <Sheet>
                <SheetTrigger asChild>
                <Button className="sm:hidden" size="icon" variant="outline">
                    <GiHamburgerMenu className="h-5 w-5 text-cyan-700 dark:text-cyan-400" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent className="sm:max-w-xs" side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-200 text-lg font-semibold text-gray-50 md:text-base dark:bg-gray-800 dark:text-gray-900"
                    href="#"
                    >
                    <GiHamburgerMenu className="h-5 w-5 transition-all group-hover:scale-110 text-cyan-700 dark:text-cyan-400" />
                    <span className="sr-only">Portfolio</span>
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 hover:text-cyan-700 dark:hover:text-cyan-300" href="/#Projects">
                    <MdOutlineLibraryBooks  className="h-5 w-5 " />
                    Projects
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 hover:text-cyan-700 dark:hover:text-cyan-300" href="/vollmed/user">
                    <TbBrandSass  className="h-5 w-5" />
                    Upcoming Feature 
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 hover:text-cyan-700 dark:hover:text-cyan-300" href="/">
                    <UserIcon className="h-5 w-5" />
                    About
                    </Link>
                    
                </nav>
                </SheetContent>
            </Sheet>
            </header>
        </div> 
    )
}