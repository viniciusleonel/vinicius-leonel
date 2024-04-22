import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"
import { parseCookies } from "nookies";

const { 'nextauth.token': token } = parseCookies()

export const vollmedApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
})

// if (token) {
//     vollmedApi.defaults.headers['Authorization'] = `Bearer ${token}`
// }


type UserProps = {
    login: string
    senha: string
}

export type LoginResponse = {
    token: string;
}

// Definindo a interface para o erro específico que você espera
export interface CustomError extends Error {
    response?: {
        status?: number
        data?: any
    };
}

export async function logUser<LoginResponse>(path: string, userData: UserProps) {
    try {
        const token = await vollmedApi.post(path, userData)
        return token.data;
    } catch (error: any) {
        const typedError = error as CustomError;
        if (axios.isAxiosError(typedError) && typedError.response) {
            if (typedError.response.data) {
                return typedError.response.data
            } else if (typedError.response.status === 403) {
                throw new Error(typedError.response.statusText)
            }
        }
        throw typedError.message
    }
}

export async function userRegister(path: string, userData: UserProps) {
    try {
        const response = await vollmedApi.post(path, userData)
        return response.data
    } catch (error: any) {
        const typedError = error as CustomError;
        if (axios.isAxiosError(typedError) && typedError.response) {
            if (typedError.response.data) {
                return typedError.response.data
            } else if (typedError.response.status === 403) {
                throw new Error(typedError.response.statusText)
            }
        }
        throw typedError.message
    }
}


