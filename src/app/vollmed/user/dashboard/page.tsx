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
        <div className="flex flex-col justify-center items-center ">
            <div className="m-2 p-2 gap-2 flex border-2 rounded-lg border-cyan-700  dark:border-cyan-400">
            <button className="font-bold " onClick={buscarPaciente}>Buscar Paciente:</button>
                <input 
                className="  bg-transparent focus:outline-none focus:none"
                    type="text" 
                    value={idPaciente} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyPress}
                    placeholder="Insira o ID do Paciente"
                />
            </div>
            {paciente ? (
                <div className="w-full p-4 flex flex-col justify-center items-center border-2 rounded-lg border-cyan-700  dark:border-cyan-400">
                    <caption className="font-bold">Dados do Paciente</caption>
                    <table className="w-full flex flex-col">
                        <tbody className="flex gap-4 items-center justify-evenly">
                            <tr className="flex flex-col items-start ">
                                <th>Nome:</th>
                                <td>{paciente.nome}</td>
                            </tr>
                            <tr className="flex flex-col items-start">
                                <th>Email:</th>
                                <td>{paciente.email}</td>
                            </tr>
                            <tr className="flex flex-col items-start">
                                <th>Telefone:</th>
                                <td>{paciente.telefone}</td>
                            </tr>
                            <tr className="flex flex-col items-start">
                                <th>CPF:</th>
                                <td>{paciente.cpf}</td>
                            </tr>
                        </tbody>
                    </table>
                    <caption className="font-bold p-2">Endereço</caption>
                    <table className="w-full flex flex-col">
                    <tbody className="flex gap-4 items-center justify-evenly">
                        <tr className="flex flex-col items-start">
                            <th>Logradouro</th>
                            <td>{paciente.endereco.logradouro}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>Bairro</th>
                            <td>{paciente.endereco.bairro}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>CEP</th>
                            <td>{paciente.endereco.cep}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>Número</th>
                            <td>{paciente.endereco.numero}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>Complemento</th>
                            <td>{paciente.endereco.complemento}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>Cidade</th>
                            <td>{paciente.endereco.cidade}</td>
                        </tr>
                        <tr className="flex flex-col items-start ">
                            <th>UF</th>
                        <td>{paciente.endereco.uf}</td>
                        </tr>
                    </tbody>
                </table>
                </div>
            ) : null }
        </div>
    );
}
