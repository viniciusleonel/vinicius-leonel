import { createContext, useEffect, useState } from "react";
import { LoginUserFormData } from "../vollmed/user/schemas";
import { signInRequest, recoverUserInfo } from "../services/auth";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from 'next/navigation'

type User = {
    email: string;
    avatar_url: string;
}

type SignInData = {
    email: string
    password: string
}

type AuthContextType = {
    user: User | null;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const router = useRouter()
    const isAuthenticated = !!user

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        
        if (token) {
            recoverUserInfo().then(response => 
                setUser(response.user))
        }
    
    }, [])

    async function signIn({ email, password }: SignInData) {
        try {
            
            if (!router) {
                // Se o router não estiver pronto, aguarde até que ele esteja
                await new Promise((resolve) => setTimeout(resolve, 100))
            }

            const { token, user } = await signInRequest({
                email,
                password,
            })

            setCookie(undefined, "nextauth.token", token, {
                maxAge: 60 * 60 * 2, // 2 hours
            })

            setUser(user)
            router.push('/dashboard')
        } catch (error) {
            // Lidar com erros de autenticação aqui
            console.error("Erro ao fazer login:", error)
            throw error; // Propaga o erro para que ele possa ser tratado pelo código que chama signIn
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}
