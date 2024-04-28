
import Link from "next/link"
import { Input } from "@/app/vollmed/user/dashboard/ui/input"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import ToggleButton from "@/app/components/ToggleButton/toggleButton"

interface VollMedNavProps {
  title: string
}

export default function VollMedNav({title}: VollMedNavProps) {
  return (
    <header className="flex h-16 w-full items-center justify-between px-6 bg-white shadow dark:bg-gray-950">
      <Link className="text-lg font-semibold text-gray-900 dark:text-gray-50" href="#">
        {title}
      </Link>
      <div className="flex items-center space-x-4">
        <form className="relative">
          <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-8 pr-10 h-9 rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
            placeholder="Search..."
            type="search"
          />
          <Button className="absolute right-2 top-2 rounded-full" size="icon" type="submit" variant="ghost">
            
            <span className="sr-only">Search</span>
          </Button>
        </form>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="#"
        >
          Register
        </Link>
        <Link
          className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300 dark:border-gray-800"
          href="#"
        >
          List
        </Link>
      </div>
      <div className="sm:hidden"><ToggleButton /></div>
    </header>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
