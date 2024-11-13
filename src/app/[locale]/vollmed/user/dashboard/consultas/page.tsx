'use client'

import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'

export default function Consultas () {
    const { user } = useContext(AuthContext)
    const [userLog, setUserLog] = useState('') 

    const router = useRouter()

    return (
        <div className=" flex flex-col justify-center items-center">
            <h1>Consultas</h1>
        </div>
    )
}