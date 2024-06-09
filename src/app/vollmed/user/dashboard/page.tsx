'use client'

import { useEffect } from "react";

import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from 'next/navigation';

export default function Dashboard() {

    const router = useRouter();

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if (!token || token == undefined) {
            destroyCookie(null, "nextauth.token");
            destroyCookie(null, "nextauth.user");
            router.push('/');
        }
    }, []);

    return (
        <>
        {/* <Teste /> */}
        
        </>
    )
}