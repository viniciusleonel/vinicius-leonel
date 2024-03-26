import axios from "axios"

export const vollmedApi = axios.create({
    baseURL: "http://18.231.9.214:8080/"
})

interface UserProps {
    login: string;
    senha: string;
}

export async function postUserToAPI(userData: UserProps) {
    try {
        const response = await axios.post('http://18.231.9.214:8080/usuarios', userData);
        return response.data; // Retorna os dados da resposta da API
    } catch (error: any) {
        throw new Error('Erro ao enviar os dados para a API: ' + error.message);
    }
}
