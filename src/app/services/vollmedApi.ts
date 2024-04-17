import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"

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

export async function userRegister(path: string, userData: UserProps) {
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

export async function userLogin(userData: { login: string; senha: string }): Promise<string> {
    try {
        // Envia uma requisição POST para o endpoint de login com os dados do usuário
        const response: AxiosResponse<{ token: string }> = await axios.post<{ token: string }>('/login', userData);

        // Retorna o token recebido na resposta
        return response.data.token;
    } catch (error) {
        // Se ocorrer um erro durante a requisição
        if (axios.isAxiosError(error)) {
            // Se a resposta do servidor estiver presente no erro
            if (error.response) {
                // Se o status da resposta for 403 Forbidden
                if (error.response.status === 403) {
                    // Lança um erro indicando que as credenciais estão incorretas
                    throw new Error('Credenciais inválidas');
                }
                // Se houver dados na resposta, retorna-os
                if (error.response.data) {
                    return error.response.data;
                }
            }
            // Se o erro não for relacionado à resposta do servidor, lança o erro
            throw new Error(error.message);
        }
        // Se o erro não for um AxiosError, lança o erro
        throw error;
    }
}
