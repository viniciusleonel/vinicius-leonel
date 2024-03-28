import axios, { AxiosInstance, AxiosError } from "axios"

export const vollmedApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
})

interface UserProps {
    login: string
    senha: string
}

// Definindo a interface para o erro específico que você espera
export interface CustomError extends Error {
    response?: {
        status?: number
        data?: any
    };
}

export async function postUserToAPI(path: string, userData: UserProps) {
    try {
        const response = await vollmedApi.post(path, userData)
        return response.data
    } catch (error: any) {
        const typedError = error as CustomError;
        if (axios.isAxiosError(typedError) && typedError.response) {
            if (typedError.response.data) {
                return typedError.response.data
            } else if (typedError.response.status === 400) {
                throw new Error(typedError.response.statusText)
            }
        }
        throw typedError.message
    }
}
