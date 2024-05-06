export interface Medico {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    crm: string;
    especialidade: string;
    endereco: Endereco;
    ativo: boolean;
}

export type MedicoDetails = Omit<Medico, 'telefone' | 'endereco' | 'ativo'>
export type MedicoRegister = Omit<Medico, 'id' |  'ativo'>

export interface MedicoRegError extends Error{
    campo: string
    valor: string
    mensagem: string
}