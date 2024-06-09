'use client'

import { parseCookies } from "nookies";
import SideNav from "../components/side-nav";
import VollMedNav from "../components/voll-med-nav";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {

    const pathname = usePathname();

    const [user, setUser] = useState(''); 

    useEffect(() => {
        const cookies = parseCookies();
        const user = cookies['nextauth.user'];
        setUser(user)
    }, []);

    
    
    return (
        <div className="w-full flex h-screen bg-[#f5f9fb] dark:bg-dark-secondary flex-col md:flex-row md:overflow-hidden">
            <VollMedNav 
                user={user}
            />
            <div className="w-full flex-none md:w-10">
                <SideNav />
            </div>
            <div className="flex-grow p-6 mt-16 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}