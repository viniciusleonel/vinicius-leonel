import Link from 'next/link';
import NavLinks from './navLinks';
import ToggleButton from '../../../components/ToggleButton/toggleButton';
import { TbLogout2 } from "react-icons/tb";
import { destroyCookie, parseCookies } from 'nookies';
import { redirect } from 'next/navigation';

export default function SideNav() {

    const cookies = parseCookies()
    const userLog = cookies['nextauth.user']

    function singOut () {
        destroyCookie(null, 'nextauth.token')
        destroyCookie(null, 'nextauth.user')
        redirect("/")
    }
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
            <div className='flex h-[48px] grow items-center justify-center gap-2 shadow-lg border-2 hover:bg-slate-100 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 dark:hover:bg-dark-secondary p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3'>
                <div className='pt-[2px] flex'><ToggleButton /></div>
                <div className='flex'><h2 className="">{userLog}</h2></div>
            </div>
            <form>
            <button onClick={singOut} className="flex h-[48px] w-full grow items-center justify-center gap-2 shadow-lg border-2 hover:bg-slate-100 border-cyan-700  dark:border-none rounded-md dark:bg-slate-900 dark:hover:bg-dark-secondary p-3 text-sm font-medium  hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                <div className=' flex items-center justify-center gap-2'>
                        <TbLogout2 size={20}/>
                        <div className="hidden md:block">Sign Out</div>
                </div>
            </button>
            </form>
        </div>
        </div>
    );
}
