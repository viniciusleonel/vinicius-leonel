import Link from 'next/link';
import NavLinks from './navLinks';
import ToggleButton from '../../../components/ToggleButton/toggleButton';
import { TbLogout2 } from "react-icons/tb";
import { AuthContext } from "../../../context/AuthContext"
import { useContext } from "react"

export default function SideNav() {

    const { user } = useContext(AuthContext)
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
        {/* <Link
            className="mb-2 flex h-20 items-end justify-start shadow-lg border-2 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 p-4 md:h-40"
            href="/"
        >
            <div className="w-32 text-white md:w-40">

            </div>
        </Link> */}
        <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
            <NavLinks />
            <div className="hidden h-auto w-full grow shadow-lg border-2 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 md:block"></div>
            <form>
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 shadow-lg border-2 hover:bg-slate-100 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 dark:hover:bg-dark-secondary p-3 text-sm font-medium  hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className='w-full flex items-center justify-between'>
                    
                    <div className=' flex items-center justify-center gap-2'>
                        <TbLogout2 size={20}/>
                        <div className="hidden md:block">Sign Out</div>
                    </div>
                    <div className='flex pt-1 justify-end'><ToggleButton /></div>
                </div>
            </button>
            </form>
        </div>
        </div>
    );
}
