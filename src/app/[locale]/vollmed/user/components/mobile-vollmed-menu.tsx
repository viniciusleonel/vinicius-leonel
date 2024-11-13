import {
    SheetTrigger,
    SheetContent,
    Sheet,
} from "@/app/[locale]/vollmed/user/dashboard/ui/sheet";
import Link from "next/link";
import { Button } from "@/app/[locale]/vollmed/user/dashboard/ui/button";
import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from "next/navigation";
import {
    CalendarCheckIcon,
    HomeIcon,
    Package2Icon,
    PanelLeftIcon,
    UserIcon,
    LogOutIcon
} from "lucide-react";
import MenuNavLinks from "./menu-links";

export default function MobileVollMedMenu() {
    const cookies = parseCookies();
    const userLog = cookies["nextauth.user"];
    const router = useRouter();

    function singOut() {
        destroyCookie(null, "nextauth.token");
        destroyCookie(null, "nextauth.user");
        router.push("/");
        router.refresh()
    }

    return (
        <div className="flex flex-col ">
            <header className=" ">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button
                            className="sm:hidden"
                            size="icon"
                            variant="outline"
                        >
                            <PanelLeftIcon className="h-5 w-5" />
                            <span className="sr-only">Toggle Menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent
                        className="sm:max-w-xs"
                        side="left"
                    >
                        <nav className="grid gap-6 text-lg font-medium">
                            <Link
                                className="group flex h-10 w-10 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-900 text-lg font-semibold text-gray-50 md:text-base dark:bg-gray-50 dark:text-gray-900"
                                href="#"
                            >
                                <Package2Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                                <span className="sr-only">VollMed</span>
                            </Link>
                            <MenuNavLinks />
                            <div className="flex">
                                {userLog && <h2>{userLog}</h2>}
                            </div>
                        </nav>
                        <div className="">
                            <Button 
                                className="fixed bottom-5"
                                onClick={singOut}> 
                                    Logout
                                    <LogOutIcon className="ms-2 h-5 w-5"/>
                            </Button>
                        </div>
                    </SheetContent>
                </Sheet>
            </header>
        </div>
    );
}
