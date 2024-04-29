
import { SheetTrigger, SheetContent, Sheet } from "@/app/vollmed/user/dashboard/ui/sheet"
import Link from "next/link"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/app/vollmed/user/dashboard/ui/dropdown-menu"
import Image from "next/image";
import { destroyCookie, parseCookies } from "nookies"
import { useRouter } from "next/navigation"
import NavLinks from "@/app/vollmed/user/dashboard/components/navLinks"

export default function SideNav() {

    const cookies = parseCookies()
    const userLog = cookies['nextauth.user']
    const router = useRouter()

    function singOut () {
        destroyCookie(null, 'nextauth.token')
        destroyCookie(null, 'nextauth.user')
        router.push("/")
    }
    
    return (
        <>
        
        <aside className="fixed hidden inset-y-0 left-0 z-10 w-14 flex-col dark:bg-dark-primary border-r border-cyan-700  dark:border-cyan-400 sm:flex ">
            
            {/* Arrow Menu */}
            <div className="relative mt-20 flex h-10 w-full dark:dark:bg-dark-primary items-center justify-center bg-[#f5f9fb]  ">
            
            <Sheet>
                <SheetTrigger asChild className="">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg  md:h-8 md:w-8">
                    <ArrowLeftRightIcon className="h-5 w-5  transition-transform duration-300 hover:rotate-180 " />
                    <span className="sr-only">Toggle Menu</span>
                </div>
                </SheetTrigger>
                <SheetContent className="sm:max-w-xs" side="left">
                <nav className="grid gap-6 text-lg font-medium">
                    <Link
                    className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-200 text-lg font-semibold  md:text-base dark:bg-gray-50 dark:text-gray-900"
                    href="#"
                    >
                    <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">VollMed</span>
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5  " href="/vollmed/user/dashboard">
                    <HomeIcon className="h-5 w-5" />
                    Dashboard
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 " href="/vollmed/user/dashboard/medicos">
                    <UserIcon className="h-5 w-5" />
                    Doctors
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5  " href="/vollmed/user/dashboard/pacientes">
                    <UserIcon className="h-5 w-5" />
                    Patients
                    </Link>
                    <Link className="flex items-center gap-4 px-2.5 " href="/vollmed/user/dashboard/consultas">
                    <CalendarCheckIcon className="h-5 w-5" />
                    Appointments
                    </Link>
                    <div className='flex'>
                        {userLog && <h2>{userLog}</h2>}
                    </div>
                </nav>
                </SheetContent>
            </Sheet>
            </div>

            {/* Web SideNavBar */}
            <NavLinks />

            {/* Avatar */}
            <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                <Button className="overflow-hidden  rounded-full" size="icon" variant="default">
                    <Image 
                        className='overflow-hidden rounded-full '
                        alt="Avatar"
                        height={36}
                        width={36}
                        src={"/images/icons/profile-default.svg"}
                        >
                    </Image>
                </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={singOut}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            </nav>

        </aside>
        
        </>
    )
}

function ArrowLeftRightIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M8 3 4 7l4 4" />
        <path d="M4 7h16" />
        <path d="m16 21 4-4-4-4" />
        <path d="M20 17H4" />
        </svg>
    )
}


function CalendarCheckIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="m9 16 2 2 4-4" />
        </svg>
    )
}


function HomeIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}


function Package2Icon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
        <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
        <path d="M12 3v6" />
        </svg>
    )
}


function PanelLeftIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
        <line x1="9" x2="9" y1="3" y2="21" />
        </svg>
    )
}

function UserIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
