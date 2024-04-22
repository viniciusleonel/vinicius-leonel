'use client'

import { useContext, useEffect } from "react"
import { AuthContext } from "../context/AuthContext"
import { vollmedApi } from "../services/vollmedApi"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import { GetServerSideProps } from "next"

export default function Dashboard () {
    const { user } = useContext(AuthContext)
    const router = useRouter()

    useEffect(() => {
        
        const cookies = parseCookies()
        const token = cookies['nextauth.token']
        if (!token ) {
            router.push('/')
        } 
    }, [])

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1>Dashboard</h1>
            <h2 className="">{user?.email}</h2>
        </div>
    )
}