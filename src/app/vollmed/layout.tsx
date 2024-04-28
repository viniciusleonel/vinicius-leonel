'use client'

import { AuthProvider } from "../context/AuthContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <div className="bg-[#f5f9fb] dark:bg-dark-secondary">{children}</div>
        </AuthProvider>
    )
}

