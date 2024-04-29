'use client'

import { useEffect } from "react";

import { parseCookies } from "nookies";
import { useRouter } from 'next/navigation';

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