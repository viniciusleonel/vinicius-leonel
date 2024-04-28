'use client'

import clsx from 'clsx'
import Nav from "@/app/components/Nav/Nav"
import UserRegister from "./forms/userRegister"
import UserLogin from "./forms/userLogin"
import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { useRouter } from 'next/navigation'

export default function VollMed () {

    const [login, setLogin ] = useState(false)
    const [cadastro, setCadastro ] = useState(true)
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter()

    useEffect(() => {
        
        const cookies = parseCookies()
        const token = cookies['nextauth.token']
        
        if (token ) {
            router.push("/vollmed/user/dashboard")
        } 

    }, [])

    function togglePasswordVisibility() {
        setShowPassword(!showPassword)
    }

    function handleFormCadastro () {
        setCadastro(true)
        setLogin(false)
    }

    function handleFormLogin () {
        setCadastro(false)
        setLogin(true)
    }

    return (
        <>
            <nav><Nav /></nav>
            <main className=" h-screen pt-8 flex flex-col flex-1 items-center justify-center mx-2 ">
                <div className="">
                    <h2 className="text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600">VollMedApi</h2>
                    <div className="text-2xl py-6 flex justify-around">
                        <button 
                            className={clsx("flex hover:text-cyan-400", {
                                "text-cyan-400" : cadastro === true
                            })}
                            onClick={handleFormCadastro}
                            >Cadastrar
                        </button>
                        <span>/</span>
                        <button 
                            onClick={handleFormLogin}
                            className={clsx("flex hover:text-text-blue-600", {
                                "text-blue-600" : login === true
                            })}
                            >Login
                        </button>
                    </div>
                </div>
                { cadastro && (
                    <UserRegister 
                    showPassword={showPassword}    
                    passwordState={togglePasswordVisibility}/>
                )}
                { login && (
                    <UserLogin 
                    showPassword={showPassword}    
                    passwordState={togglePasswordVisibility}/>
                )}
            </main>
        </>
    )
}