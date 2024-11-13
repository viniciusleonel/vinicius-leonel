import React from "react";

export default function Loading({ children }: { children: React.ReactNode }) {
    return (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-cyan-500 border-t-transparent" >
                {children}
            </div>
        </div>
    )
}