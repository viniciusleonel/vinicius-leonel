'use client'

import { SetStateAction, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { CustomError, getPacient, vollmedApi } from "../../../services/vollmedApi";
import { parseCookies } from "nookies";
import { useRouter } from 'next/navigation';

export default function Dashboard() {
    const router = useRouter();
    const [paciente, setPaciente] = useState<Paciente | null>(null); // Estado para armazenar os dados do paciente
    const [idPaciente, setIdPaciente] = useState(''); // Estado para armazenar o ID do paciente digitado no input

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if (!token) {
            router.push('/');
        }
    }, []);

    async function buscarPaciente() {
        try {
            const cookies = parseCookies();
            const token = cookies['nextauth.token'];
            const pacienteResponse = await getPacient(`/pacientes/${idPaciente}`, token);
            setPaciente(pacienteResponse); // Armazena os dados do paciente no estado local
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    }

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setIdPaciente(event.target.value); // Atualiza o estado do ID do paciente conforme o usuário digita
    }

    function handleKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            buscarPaciente(); // Chama a função buscarPaciente ao pressionar a tecla "Enter"
        }
    }

    return (
        <div className="flex flex-col justify-center items-center">
            <input 
                type="text" 
                value={idPaciente} 
                onChange={handleChange} 
                onKeyDown={handleKeyPress}
                placeholder="Insira o ID do Paciente"
            />
            <button onClick={buscarPaciente}>Buscar Paciente</button>
            {paciente ? (
                <div>
                    <p>Nome: {paciente.nome}</p>
                    <p>Email: {paciente.email}</p>
                    <p>Telefone: {paciente.telefone}</p>
                    <p>CPF: {paciente.cpf}</p>
                    <p>Endereço:</p>
                    <p>Logradouro: {paciente.endereco.logradouro}</p>
                    <p>Bairro: {paciente.endereco.bairro}</p>
                    <p>CEP: {paciente.endereco.cep}</p>
                    <p>Número: {paciente.endereco.numero}</p>
                    <p>Complemento: {paciente.endereco.complemento}</p>
                    <p>Cidade: {paciente.endereco.cidade}</p>
                    <p>UF: {paciente.endereco.uf}</p>
                </div>
            ) : null }
        </div>
    );
}
