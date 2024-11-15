import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FaEyeSlash, FaEye } from "react-icons/fa"
import { LoginUserFormData, loginSchema } from "../schemas"
import { useContext, useState } from "react"
import { AuthContext } from "@/app/context/AuthContext"
import { parseCookies } from "nookies"
import { ToastFailLogin } from "@/app/[locale]/vollmed/user/__components/Toast/toast-fail-login"
import { ToastUserLogin } from "@/app/[locale]/vollmed/user/__components/Toast/toast-user-login"

interface UserLoginProps {
    passwordState: () => void
    showPassword: boolean
}

export default function UserLogin ({passwordState, showPassword} : UserLoginProps) {

    const [outPutLogin, setOutPutLogin ] = useState('')
    const {signIn} = useContext(AuthContext)
    const cookies = parseCookies()
    const user = cookies['nextauth.user']
    const [loginToastFail, setLoginToastFail] = useState(false)
    const [toastUserLogin, setToastUserLogin] = useState(false)

    const {
        register: registerLogin,
        handleSubmit: handleSubmitLoginUser,
        formState: { 
            errors: errorsLogin,
            isSubmitting
        },
    } = useForm<LoginUserFormData>({
        resolver: zodResolver(loginSchema)
    })

    function closeToaster () {
        setLoginToastFail(false)
    }

    async function handleSignIn(data : LoginUserFormData) {
        try {
            await signIn(data)
            setToastUserLogin(true)
        } catch (error: any) {
            const deny = "Acesso negado!"
            setLoginToastFail(true)
        }
    } 

    return (
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
                                onClick={passwordState}
                                >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                        {errorsLogin.password && <span className='text-red-500 pt-2'>{errorsLogin.password.message}</span>}
                    </div>

                    <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-blue-500 font-medium rounded-md py-2 shadow-lg  hover:bg-blue-600">
                    {isSubmitting ? 'Entrando...' : 'Entrar'}
                    </button>

                    {loginToastFail && (
                        <ToastFailLogin
                            closeToaster={closeToaster}
                        />
                    )}

                    {toastUserLogin && (
                        <ToastUserLogin 
                            user={user}
                            closeToaster={closeToaster}
                        />
                    )}
                </form>
    )
}
