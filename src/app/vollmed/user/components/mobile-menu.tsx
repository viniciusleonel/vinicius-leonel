import { SheetTrigger, SheetContent, Sheet } from "@/app/vollmed/user/dashboard/ui/sheet"
import Link from "next/link"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import { destroyCookie, parseCookies } from "nookies"
import { useRouter } from "next/navigation"
import { CalendarCheckIcon, HomeIcon, Package2Icon, PanelLeftIcon, UserIcon } from "lucide-react"

export default function MobileMenu () {

    const cookies = parseCookies()
    const userLog = cookies['nextauth.user']
    const router = useRouter()

    function singOut () {
        destroyCookie(null, 'nextauth.token')
        destroyCookie(null, 'nextauth.user')
        router.push("/")
    }
    
    return (
        <div className="flex flex-col ">
            <header className=" ">
            <Sheet>
                <SheetTrigger asChild>
                <Button className="sm:hidden" size="icon" variant="outline">
                    <PanelLeftIcon className="h-5 w-5" />
                    <span className="sr-only">Toggle Menu</span>
                </Button>
                </SheetTrigger>
                <SheetContent className="sm:max-w-xs" side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-900 text-lg font-semibold text-gray-50 md:text-base dark:bg-gray-50 dark:text-gray-900"
                    href="#"
                    >
                    <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">VollMed</span>
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="/vollmed/user/dashboard">
                    <HomeIcon className="h-5 w-5" />
                    Dashboard
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-950 dark:text-gray-50" href="/vollmed/user/dashboard/medicos">
                    <UserIcon className="h-5 w-5" />
                    Doctors
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="/vollmed/user/dashboard/pacientes">
                    <UserIcon className="h-5 w-5" />
                    Patients
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href="/vollmed/user/dashboard/consultas">
                    <CalendarCheckIcon className="h-5 w-5" />
                    Appointments
                    </Link>
                    <div className='flex'>
                        {userLog && <h2>{userLog}</h2>}
                    </div>
                </nav>
                </SheetContent>
            </Sheet>
            </header>
        </div> 
    )
}