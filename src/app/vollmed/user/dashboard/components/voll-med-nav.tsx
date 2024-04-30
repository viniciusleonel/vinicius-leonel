import Link from "next/link"
import { Input } from "@/app/vollmed/user/dashboard/ui/input"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import ToggleButton from "@/app/components/ToggleThemeButton/toggle-theme-button"
import MobileMenu from "./mobile-menu"
import { InputHTMLAttributes, ReactElement, SetStateAction, useState } from "react"

interface VollMedNavProps {
  title?: string  
  handleRegister?: () => void
  handleList?: () => void
  handleCards?: () => void
  input?: ReactElement<InputHTMLAttributes<HTMLInputElement>, any>
}

export default function VollMedNav({title, handleRegister, handleList, handleCards, input}: VollMedNavProps) {
  
  return (
    <header className="fixed top-0 left-0 right-0 z-20 flex h-16 gap-2 items-center justify-between px-6 bg-white shadow dark:bg-gray-950 border-b border-cyan-700  dark:border-cyan-400">
      <div className="flex sm:hidden">
        <MobileMenu />
      </div>
      <Link className="text-lg font-semibold text-gray-900 dark:text-gray-50" href="#">
        {title || 'Dashboard'}
      </Link>
      <div className="flex items-center space-x-4">
        <Button
            className="border border-cyan-700 dark:border-cyan-400 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={handleRegister}
          >
            Register
          </Button>
          <Button
            className="border border-cyan-700 dark:border-cyan-400 inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            onClick={handleList}
          >
            List
          </Button>
          <div className="m-2 p-2 gap-2 border-2 rounded-lg border-cyan-700  dark:border-cyan-400">
            {input}
          </div>
          
        <ToggleButton />
      </div>
    </header>
  )
}
