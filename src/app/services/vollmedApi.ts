import axios, { AxiosInstance } from "axios"

export const vollmedApi: AxiosInstance = axios.create({
    baseURL: "http://localhost:8080/"
})

interface UserProps {
    login: string;
    senha: string;
}

export async function postUserToAPI(path: string, userData: UserProps) {
    try {
        const response = await vollmedApi.post(path, userData)
        return response.data; // Retorna os dados da resposta da API
    } catch (error: any) {
        throw new Error('Erro ao enviar os dados para a API: ' + error.message);
    }
}
