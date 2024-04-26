interface Paciente {
    id: number;
    nome: string;
    email: string;
    telefone: string;
    cpf: string;
    endereco: Endereco;
    ativo: boolean;
}