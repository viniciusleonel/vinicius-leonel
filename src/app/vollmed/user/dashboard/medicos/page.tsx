'use client'

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../components/voll-med-nav"
import ListAllDoctors from "../components/list-all-doctors"

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
        <div className="w-full">
            <div className="">
                <RegisterDoctor />
                <ListAllDoctors />
            </div>
        </div>
    )
}