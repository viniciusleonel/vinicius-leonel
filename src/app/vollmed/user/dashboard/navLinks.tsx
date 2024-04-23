'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', 
        href: '/vollmed/user/dashboard', 
        icon:  ''
    },

    {
        name: 'Pacientes',
        href: '/vollmed/user/dashboard/pacientes',
        icon: '',
    },

    { name: 'Médicos', 
        href: '/vollmed/user/dashboard/medicos', 
        icon: '' 
    },
    { name: 'Consultas', 
        href: '/vollmed/user/dashboard/consultas', 
        icon: '' 
    },
];

export default function NavLinks() {

    const pathname = usePathname();

    return (
        <>
        {links.map((link) => {
            const LinkIcon = link.icon;
            return (
            <Link
                key={link.name}
                href={link.href}
                className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 shadow-lg border-2 hover:bg-slate-100 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 dark:hover:bg-dark-secondary p-3 text-sm font-medium  hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                    'dark:bg-slate-900  text-blue-600': pathname === link.href,
                },
                )}
                >
                <p className="hidden md:block">{link.name}</p>
            </Link>
            );
        })}
        </>
    );
}
