'use client'

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../components/voll-med-nav"

export default function Medicos () {
    const { user } = useContext(AuthContext)
    const [userLog, setUserLog] = useState('') 

    const router = useRouter()

    useEffect(() => {
        
        const cookies = parseCookies()
        const token = cookies['nextauth.token']
        if (!token ) {
            router.push('/')
        } 

    }, [])

    return (
        <>
            <nav className="fixed top-0  right-0 left-[3.5rem]">
                <VollMedNav 
                    title='Medicos'/>
            </nav>
            <div className=" flex flex-col justify-center items-center">
                <h2 className="">{userLog}</h2>
                <RegisterDoctor />
            </div>
        </>
    )
}