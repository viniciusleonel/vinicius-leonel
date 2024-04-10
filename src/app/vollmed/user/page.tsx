'use client'

import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { CustomError, postUserToAPI } from '../../services/vollmedApi';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from 'clsx';

// Schema representa a estrutura do formulario
const createUserFromSchema = z.object({
    email: z.string()
    .min(1, 'Email obrigatório!')
    .email('Digite um email válido!')
    .toLowerCase(),

    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),

    confirmPassword: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),
    }).refine(
        (values) => {
            return values.password === values.confirmPassword;
        },
        {
            message: "As senhas precisam ser iguais!",
            path: ["confirmPassword"],
        }
    );

type CreateUserFormData = z.infer<typeof createUserFromSchema>

interface UserProps {
    login: string,
    senha: string
}

export default function VollMed () {

    const { register, handleSubmit, formState:{errors}, control, watch} = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFromSchema)
    })

    const [outPut, setOutPut ] = useState('')
    const [cadastro, setCadastro ] = useState(true)
    const [login, setLogin ] = useState(false)
    const [showPassword, setShowPassword] = useState(false);


    function togglePasswordVisibility() {
        setShowPassword(!showPassword);
    }

    function handleFormCadastro () {
        setCadastro(true)
        setLogin(false)
    }

    function handleFormLogin () {
        setCadastro(false)
        setLogin(true)
    }

    function showFormResult(data: CreateUserFormData) {
        setOutPut(JSON.stringify(data, null, 2))
    }

    async function createUser(data: CreateUserFormData) {
        try {
            const userData: UserProps = {
                login: data.email,
                senha: data.password
            };
            const response = await postUserToAPI("/usuarios", userData);
            setOutPut(JSON.stringify(response, null, 2));
        } catch (error: any) {
            const typedError = error as CustomError
            setOutPut(typedError.name);
        }
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
                onSubmit={handleSubmit(showFormResult)}
                className="flex flex-col w-full sm:max-w-xs max-w-64 gap-4 ">
                <div className="flex flex-col ">
                    <label htmlFor="email" className="font-medium text-xl mb-1">Cadastre-se</label>
                    <input 
                        {...register('email')}
                        type="email" 
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Digite um email válido" />
                    {errors.email && <span className='text-red-500 pt-2'>{errors.email.message}</span>}
                </div>

                <div className="flex flex-col relative">
                    <label htmlFor="password" className="font-medium text-xl mb-1">Senha </label>
                    <input 
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'}
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Crie sua senha" />
                    <button
                        type="button"
                        className="absolute top-3/4 transform -translate-y-1/2 right-3 text-lg"
                        onClick={togglePasswordVisibility}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && <span className='text-red-500 pt-2'>{errors.password.message}</span>}
                </div>

                <div className="flex flex-col ">
                    <label htmlFor="confirmPassword" className="font-medium text-xl mb-1">Confirmar Senha</label>
                    <input 
                        {...register('confirmPassword', {
                                validate: (value) => value === watch('password') || "As senhas precisam ser iguais"
                            })}
                        type={showPassword ? 'text' : 'password'}
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Crie sua senha" />
                    {errors.confirmPassword && <span className='text-red-500 pt-2'>{errors.confirmPassword.message}</span>}
                </div>

                <button 
                    type="submit"
                    className="bg-cyan-500 font-medium rounded-md py-2 shadow-lg hover:bg-cyan-600">
                Cadastrar
                </button>

                <span className=" flex flex-wrap w-full sm:max-w-xs max-w-64 text-red-600">{outPut}</span>
            </form>
            )}
            { login && (
                <form 
                onSubmit={handleSubmit(createUser)}
                className="flex flex-col w-full sm:max-w-xs max-w-64 gap-4 ">
                {/* <h3 className="flex justify-center text-3xl mb-3">Cadastre-se</h3> */}
                <div className="flex flex-col mb-3">
                    <label htmlFor="email" className="font-medium text-xl mb-1">Login</label>
                    <input 
                        {...register('email')}
                        type="email" 
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Digite um email válido" />
                    {errors.email && <span className='text-red-500 pt-2'>{errors.email.message}</span>}
                </div>

                <div className="flex flex-col mb-3 relative">
                    <label htmlFor="password" className="font-medium text-xl mb-1">Senha</label>
                    <input 
                        {...register('password')}
                        type={showPassword ? 'text' : 'password'} 
                        className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                        placeholder="Crie sua senha" />
                    <button
                        type="button"
                        className="absolute top-3/4 transform -translate-y-1/2 right-3 text-lg"
                        onClick={togglePasswordVisibility}
                        >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && <span className='text-red-500 pt-2'>{errors.password.message}</span>}
                </div>

                <button 
                    type="submit"
                    className="bg-blue-500 font-medium rounded-md py-2 shadow-lg  hover:bg-blue-600">
                Entrar
                </button>

                <span className=" flex flex-wrap w-full sm:max-w-xs max-w-64">{outPut}</span>
            </form>
            )}
        </main>    
    )
}
