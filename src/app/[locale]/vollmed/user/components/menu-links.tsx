import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/app/[locale]/vollmed/user/dashboard/ui/tooltip"
import { GoHomeFill  } from "react-icons/go";
import { FaUserMd } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { CalendarCheckIcon } from 'lucide-react';

const links = [
    { name: 'Dashboard', 
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

export default function MenuNavLinks () {

    const pathname = usePathname();

    return (
        <aside className="flex flex-col gap-3 px-2 sm:py-5">
            <TooltipProvider>     
                {links.map((link) => {
                    const LinkIcon = link.icon;
                    return (                
                        <Tooltip key={link.name}>
                            <TooltipTrigger asChild>
                                <div className={clsx('text-gray-500 transition-colors hover:text-gray-950 md:h-8 md:w-8 dark:text-gray-400 dark:hover:text-gray-50',
                                    {
                                        '': pathname === link.href,
                                    },
                                )}>
                                <Link className={clsx('flex items-center justify-start gap-4 text-gray-500 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-50',
                                        {
                                            '!text-cyan-600 dark:!text-cyan-400 ': pathname === link.href,
                                        },
                                    )}
                                    href={link.href}>
                                        <span className={clsx('flex p-2 items-center justify-center rounded-lg',
                                            {
                                            '!bg-cyan-600 dark:!bg-cyan-400 ': pathname === link.href,
                                        },
                                        )}>{link.icon}</span>
                                        <span className={clsx('flex items-baseline',
                                            {
                                            '!text-cyan-600 dark:!text-cyan-400 ': pathname === link.href,
                                        },
                                        )}>{link.name}</span>
                                        <span className="sr-only">{link.name}</span>
                                </Link>
                                </div>
                            </TooltipTrigger>
                        </Tooltip>
                    );
                })}
            </TooltipProvider>
        </aside>
    )

}