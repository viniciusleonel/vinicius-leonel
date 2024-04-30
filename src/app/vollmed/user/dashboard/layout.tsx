'use client'

import SideNav from "./components/side-nav";
import VollMedNav from "./components/voll-med-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full flex h-screen bg-[#f5f9fb] dark:bg-dark-secondary flex-col md:flex-row md:overflow-hidden">
            <VollMedNav />
            <div className="w-full flex-none md:w-10">
                <SideNav />
            </div>
            <div className="flex-grow p-6 mt-16 md:overflow-y-auto md:p-12">{children}</div>
        </div>
    )
}