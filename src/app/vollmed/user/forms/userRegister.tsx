import { useForm } from "react-hook-form"
import { CreateUserFormData, createUserSchema } from "../schemas"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { CustomError, userRegister } from "@/app/services/vollmedApi"
import { FaEye, FaEyeSlash } from "react-icons/fa"

export interface UserProps {
    login: string,
    senha: string
}

interface UserLoginProps {
    passwordState: () => void
    showPassword: boolean
}

export default function UserRegister({passwordState, showPassword} : UserLoginProps) {

    const [outPutUser, setOutPutUser ] = useState('')

    const {
        register: registerUser,
        handleSubmit: handleSubmitCreateUser,
        formState: { errors: errorsUser },
        watch,
    } = useForm<CreateUserFormData>({
        resolver: zodResolver(createUserSchema)
    })

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

    return (
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
                                onClick={passwordState}
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
    )
} 