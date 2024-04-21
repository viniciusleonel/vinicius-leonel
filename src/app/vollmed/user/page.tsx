'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext, useState } from "react"
import { CustomError, userRegister, userLogin } from '../../services/vollmedApi'
import { FaEye, FaEyeSlash } from "react-icons/fa"
import { AuthContext } from "@/app/context/AuthContext"
import {CreateUserFormData, LoginUserFormData, createUserSchema, loginSchema} from './schemas'
import clsx from 'clsx'

interface UserProps {
    login: string,
    senha: string
}

export default function VollMed () {

    const {
        register: registerUser,
        handleSubmit: handleSubmitCreateUser,
        formState: { errors: errorsUser },
        watch,
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema)
    })

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLoginUser,
        formState: { errors: errorsLogin },
    } = useForm<LoginUserFormData>({
        resolver: zodResolver(loginSchema)
    })

    const [outPutUser, setOutPutUser ] = useState('')
    const [outPutLogin, setOutPutLogin ] = useState('')
    const [cadastro, setCadastro ] = useState(true)
    const [login, setLogin ] = useState(false)
    const [showPassword, setShowPassword] = useState(false);

    const {signIn} = useContext(AuthContext)

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

    function showFormResult(data: LoginUserFormData) {
        setOutPutLogin(JSON.stringify(data, null, 2))
    }

    async function createUser(data: CreateUserFormData) {
        try {
            const userData: UserProps = {
                login: data.email,
                senha: data.password
            };
            const response = await userRegister("/usuarios", userData);
            setOutPutUser(JSON.stringify(response, null, 2));
        } catch (error: any) {
            const typedError = error as CustomError
            setOutPutUser(typedError.name)
        }
    }

    async function logUser(data: { email: string; password: string }) {
        try {
            // Monta os dados do usuário a serem enviados na requisição de login
            const userData = {
                login: data.email,
                senha: data.password
            };
            // Faz login do usuário e obtém o token
            const token = await userLogin(userData);
            console.log("Token recebido:", token);
            console.log("Login efetuado com sucesso!");
            setOutPutLogin(JSON.stringify(token, null, 2));
            // Manipula o token conforme necessário
        } catch (error: any) {
            // Se ocorrer um erro durante o login
            console.error("Erro durante o login:", error.message);
            const typedError = error as CustomError
            setOutPutLogin(typedError.message)
            // Manipula o erro conforme necessário
        }
    }  

    async function handleSignIn(data : LoginUserFormData) {
        await signIn(data)
    } 

    return (
        <main className="h-screen pt-8 flex flex-col flex-1 items-center justify-center mx-2 ">
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
                <form 
                onSubmit={handleSubmitCreateUser(createUser)}
                className="flex flex-col w-full sm:max-w-xs max-w-64 gap-4 ">
                <div className="flex flex-col ">
                    <label htmlFor="cadastro-email" className="font-medium text-xl mb-1">Cadastre-se</label>
                    <input 
                        {...registerUser('email')}
                        type="email" 
                        id="cadastro-email"
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Digite um email válido" />
                    {errorsUser.email && <span className='text-red-500 pt-2'>{errorsUser.email.message}</span>}
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="cadastro-password" className="font-medium text-xl mb-1">Senha </label>
                    <div className="relative">
                        <input 
                            {...registerUser('password')}
                            type={showPassword ? 'text' : 'password'}
                            id="cadastro-password"
                            className="ps-2 w-full rounded-md py-1 border shadow-lg border-zinc-400" 
                            placeholder="Crie sua senha" />
                        <button
                            type="button"
                            className="absolute right-4 top-2 text-lg"
                            onClick={togglePasswordVisibility}
                            >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errorsUser.confirmPassword && <span className='text-red-500 pt-2'>{errorsUser.confirmPassword.message}</span>}
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="confirmPassword" className="font-medium text-xl mb-1">Confirmar Senha</label>
                    <input 
                        {...registerUser('confirmPassword', {
                                validate: (value) => value === watch('password') || "As senhas precisam ser iguais"
                            })}
                        type={showPassword ? 'text' : 'password'}
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Crie sua senha" />
                    {errorsUser.confirmPassword && <span className='text-red-500 pt-2'>{errorsUser.confirmPassword.message}</span>}
                </div>

                <button 
                    type="submit"
                    className="bg-cyan-500 font-medium rounded-md py-2 shadow-lg hover:bg-cyan-600">
                Cadastrar
                </button>

                <span className=" flex flex-wrap w-full sm:max-w-xs max-w-64 text-red-600">{outPutUser}</span>
            </form>
            )}
            { login && (
                <form 
                onSubmit={handleSubmitLoginUser(handleSignIn)}
                className="flex flex-col w-full sm:max-w-xs max-w-64 gap-4 ">
                <div className="flex flex-col mb-3">
                    <label htmlFor="login-email" className="font-medium text-xl mb-1">Login</label>
                    <input 
                        {...registerLogin('email')}
                        type="email" 
                        id="login-email"
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Digite um email válido" />
                    {errorsLogin.email && <span className='text-red-500 pt-2'>{errorsLogin.email.message}</span>}
                </div>

                <div className="flex flex-col mb-3 ">
                    <label htmlFor="login-password" className="font-medium text-xl mb-1">Senha</label>
                    <div className="relative">
                        <input 
                            {...registerLogin('password')}
                            type={showPassword ? 'text' : 'password'} 
                            id="login-password"
                            className="ps-2 w-full rounded-md py-1 border shadow-lg border-zinc-400" 
                            placeholder="Digite sua senha" />
                        <button
                            type="button"
                            className="absolute right-4 top-2  text-lg"
                            onClick={togglePasswordVisibility}
                            >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                    {errorsLogin.password && <span className='text-red-500 pt-2'>{errorsLogin.password.message}</span>}
                </div>

                <button 
                    type="submit"
                    className="bg-blue-500 font-medium rounded-md py-2 shadow-lg  hover:bg-blue-600">
                Entrar
                </button>

                <span className=" flex flex-wrap w-full sm:max-w-xs max-w-64 text-red-600">{outPutLogin}</span>

            </form>
            )}
        </main>    
    )
}
