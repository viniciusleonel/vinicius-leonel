'use client'

import { z } from "zod"
import Nav from "../../components/Nav/Nav"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"
import { postUserToAPI } from '../../services/vollmedApi';

// Schema representa a estrutura do formulario
const createUserFromSchema = z.object({
    email: z.string()
    .min(1, 'Email obrigatório!')
    .email('Digite um email válido!')
    .toLowerCase(),

    password: z.string()
        .min(6, 'A senha precisa de no minimo 6 caracteres'),
})

type CreateUserFormData = z.infer<typeof createUserFromSchema>

interface UserProps {
    login: string,
    senha: string
}

export default function VollMed () {

    const { register, handleSubmit, formState:{errors}, control} = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserFromSchema)
    })

    const [outPut, setOutPut ] = useState('')

    async function createUser(data: CreateUserFormData) {
        try {
            const userData: UserProps = {
                login: data.email,
                senha: data.password
            };
            const response = await postUserToAPI(userData);
            setOutPut(JSON.stringify(response, null, 2));
        } catch (error: any) {
            setOutPut('Erro ao cadastrar usuário: ' + error.message);
        }
    }

    return (
        <div className="">
            <Nav
                title='VollMed RESTfull Java API '
            />    
            <main className="h-screen pt-8 flex flex-1 items-center justify-center mx-2 ">
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

                    <div className="flex flex-col mb-3">
                        <label htmlFor="password" className="font-medium text-xl mb-1">Senha</label>
                        <input 
                            {...register('password')}
                            type="password" 
                            className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" 
                            placeholder="Crie sua senha" />
                        {errors.password && <span className='text-red-500 pt-2'>{errors.password.message}</span>}
                    </div>

                    <button 
                        type="submit"
                        className="bg-emerald-500 font-medium rounded-md py-2 shadow-lg hover:bg-emerald-700">
                    Cadastrar
                    </button>

                    <pre>{outPut}</pre>
                </form>
            </main>    
        </div>
    )
}
