import { createContext, useEffect, useState } from "react";
import { setCookie, parseCookies } from "nookies";
import { useRouter } from 'next/navigation'
import { vollmedApi, logUser } from "../services/vollmedApi";
import { UserProps } from "../vollmed/user/forms/user-register";

type SignInData = {
    email: string
    password: string
}

type AuthContextType = {
    user: SignInData | null;
    isAuthenticated: boolean;
    signIn: (data: SignInData) => Promise<void>
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

            const userData: UserProps = {
                login: data.email,
                senha: data.password
            };

            setUser({ email: data.email, password: '' });
            const {token} = await logUser("/login", userData)

            setCookie(undefined, "nextauth.token", token, {
                maxAge: 60 * 60 * 2, // 2 hours
            })
            setCookie(undefined, "nextauth.user", data.email, {
                maxAge: 60 * 60 * 2, // 2 hours
            })

            vollmedApi.defaults.headers['Authorization'] = `Bearer ${token}`
            setUser({ email: data.email, password: '' });
            router.push('/vollmed/user/dashboard')
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