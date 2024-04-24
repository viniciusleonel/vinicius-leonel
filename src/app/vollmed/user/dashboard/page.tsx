'use client'

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../context/AuthContext"
import { vollmedApi } from "../../../services/vollmedApi"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'

export default function Dashboard () {
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
        <div className=" flex flex-col justify-center items-center">
            <h1>Dashboard</h1>
        </div>
    )
}