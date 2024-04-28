'use client'

import { useEffect } from "react";

import { parseCookies } from "nookies";
import { useRouter } from 'next/navigation';

import { LuHome } from "react-icons/lu";
import { LuPackage2 } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";
import { FaUserInjured } from "react-icons/fa";
import { FaBookMedical } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from "next/link"
import { TooltipTrigger, TooltipContent, Tooltip, TooltipProvider } from "@/app/vollmed/user/dashboard/ui/tooltip"
import { Button } from "@/app/vollmed/user/dashboard/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/app/vollmed/user/dashboard/ui/sheet"
import { Input } from "@/app/vollmed/user/dashboard/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/app/vollmed/user/dashboard/ui/dropdown-menu"
import { Teste } from "@/components/component/teste";

export default function Dashboard() {

    const router = useRouter();

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if (!token) {
            router.push('/');
        }
    }, []);

    return (
        <>
        {/* <Teste /> */}
        
        </>
    )
}