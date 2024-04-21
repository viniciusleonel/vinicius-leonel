'use client'

import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export default function Dashboard () {

    const { user } = useContext(AuthContext)

    return (
        <div className="min-h-screen flex flex-col justify-center items-center">
            <h1>Dashboard</h1>
            <h2 className="">{user?.email}</h2>
        </div>
    )
}