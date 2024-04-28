import { Input } from "@/app/vollmed/user/dashboard/ui/input"

export default function SearchApi () {
    return (
        <div className="relative ml-auto flex-1 md:grow-0">
            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
            <Input
                className="w-full rounded-lg bg-white pl-8 md:w-[200px] lg:w-[336px] dark:bg-gray-950"
                placeholder="Search..."
                type="search"
            />
        </div>
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
