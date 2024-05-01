import { Medico } from '@/app/model/Medico';
import {vollmedApi} from '@/services/vollmedApi'
import axios from "axios"

export class MedicoService {

    deletarMedico (token: string, id: any){
        vollmedApi.delete(`/medicos/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
    }

    async listarTodos(token: string): Promise<Medico[]> {
        try {
            const response = await vollmedApi.get<PageableData<Medico[]>>('/medicos', {
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
    
    async buscarPorId(token: string, id: any): Promise<Medico> {
        try {
            const response = await vollmedApi.get(`/medicos/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        } catch (error: any) {
            // Trate erros aqui, por exemplo, lançando uma exceção
            throw new Error('Erro ao buscar médico por ID: ' + error.message);
        }
    }
}


