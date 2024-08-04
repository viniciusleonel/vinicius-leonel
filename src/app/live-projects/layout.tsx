"use client";

import Sidebar from "./__components/sidebar";

export default function LiveProjectsLayout({ children }: { children: React.ReactNode }) {
    return (
        <aside className="flex">
            <Sidebar />
            <main className="flex-grow">
                {children}
            </main>
        </aside>
    );
}
