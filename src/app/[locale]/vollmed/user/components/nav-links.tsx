'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/app/[locale]/vollmed/user/dashboard/ui/tooltip"
import { GoHomeFill  } from "react-icons/go";
import { FaUserMd } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { CalendarCheckIcon } from 'lucide-react';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
export const links = [
    { name: 'Home', 
        href: '/vollmed/user/dashboard', 
        icon:  <GoHomeFill  className="h-5 w-5 text-black dark:text-white"/>,
    },

    { name: 'Médicos', 
        href: '/vollmed/user/dashboard/medicos', 
        icon: <FaUserMd className="h-5 w-5 text-black dark:text-white"/>, 
    },
    
    {
        name: 'Pacientes',
        href: '/vollmed/user/dashboard/pacientes',
        icon: <FaUserInjured className="h-5 w-5 text-black dark:text-white"/>,
    },

    { name: 'Consultas', 
        href: '/vollmed/user/dashboard/consultas', 
        icon: <CalendarCheckIcon className="h-5 w-5 text-black dark:text-white"/>, 
    },
];

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
            <TooltipProvider>
                {/* <Link
                className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-gray-900 text-lg font-semibold text-gray-50 md:h-8 md:w-8 md:text-base dark:bg-gray-50 dark:text-gray-900"
                href="#"
                >
                <LuHome className="h-4 w-4 transition-all group-hover:scale-110" />
                <span className="sr-only">VollMed</span>
                </Link> */}
                
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (                
                <Tooltip key={link.name}>
                    <TooltipTrigger asChild>
                        <div className={clsx('flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50',
                            {
                                'bg-cyan-600  dark:bg-cyan-400 border border-cyan-700 dark:border-cyan-400': pathname === link.href,
                            },
                        )}>
                        <Link className="flex items-center gap-4 px-2.5  text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50" href={link.href}>
                            {link.icon}
                            <span className="sr-only">{link.name}</span>
                        </Link>
                        </div>
                    </TooltipTrigger>
                    <TooltipContent side="right">{link.name}</TooltipContent>
                </Tooltip>
            );
        })}
            </TooltipProvider>
        </nav>
    );
}
