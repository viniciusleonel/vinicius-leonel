import { Medico } from "@/app/model/Medico";
import Usuario from "@/app/model/Usuario";
import axios, { AxiosInstance, AxiosError, AxiosResponse } from "axios"
import { parseCookies } from "nookies";

export const vollmedApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
})

// const { 'nextauth.token': token } = parseCookies()

// if (token) {
//     vollmedApi.defaults.headers['Authorization'] = `Bearer ${token}`
// }

export interface CustomError extends Error {
    response?: {
        status?: number
        data?: any
    };
}



export async function logUser(path: string, userData: Usuario) {
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

export async function userRegister(path: string, userData: Usuario) {
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

export async function getDataById(path: string, token: string) {
    try {
        const response = await vollmedApi.get(path, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
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

export async function getMedicos(path: string, token: string): Promise<Medico[]> {
    try {
        const response = await vollmedApi.get<PageableData<Medico[]>>(path, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const medicosResponse = response.data.content;
        // Aqui você pode precisar manipular os dados se response.data.content não for diretamente a lista de médicos
        return medicosResponse.flat(); // Transforma a matriz de matrizes em uma única matriz
    } catch (error: any) {
        // Trate erros aqui, por exemplo, lançando uma exceção
        throw new Error('Erro ao buscar dados dos médicos: ' + error.message);
    }
}

export async function getPacientes(path: string, token: string): Promise<Paciente[]> {
    try {
        const response = await vollmedApi.get<PageableData<Paciente[]>>(path, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        const pacienteResponse = response.data.content;
        // Aqui você pode precisar manipular os dados se response.data.content não for diretamente a lista de médicos
        return pacienteResponse.flat(); // Transforma a matriz de matrizes em uma única matriz
    } catch (error: any) {
        // Trate erros aqui, por exemplo, lançando uma exceção
        throw new Error('Erro ao buscar dados dos pacientes: ' + error.message);
    }
}