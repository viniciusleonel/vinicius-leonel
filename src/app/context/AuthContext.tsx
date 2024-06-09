import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from 'next/navigation'
import { vollmedApi, logUser } from "../../services/vollmedApi";
import Usuario from "@/app/model/Usuario";

type SignInData = {
    email: string
    password: string
}

type AuthContextType = {
    user: SignInData | null;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
}

interface CustomError extends Error {
    response?: {
        status: number;
        statusText: string;
        data?: any;
    };
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<SignInData | null>(null);
    const router = useRouter()
    const isAuthenticated = !!user

    useEffect(() => {
        const { 'nextauth.token': token } = parseCookies()
        
        // if (token) {
        //     recoverUserInfo().then(response => 
        //         setUser(response.token))
        // }
    
    }, [])

    async function signIn(data: SignInData) {
        try {

            const userData: Usuario = {
                login: data.email,
                senha: data.password
            };

            setUser({ email: data.email, password: '' });
            const response = await logUser("/login", userData)

            if (!response.token) {
                setUser({ email: data.email, password: '' });
                throw new Error('Invalid login credentials');
            } else {
                const { token } = response;

                setCookie(undefined, "nextauth.token", token, {
                    maxAge: 60 * 60 * 2, // 2 hours
                })
                setCookie(undefined, "nextauth.user", data.email, {
                    maxAge: 60 * 60 * 2, // 2 hours
                })

                vollmedApi.defaults.headers['Authorization'] = `Bearer ${token}`
                setUser({ email: data.email, password: '' });
                router.push('/vollmed/user/dashboard')
            }

            
        } catch (error) {
            throw error; 
        }
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, signIn }}>
            {children}
        </AuthContext.Provider>
    );
}