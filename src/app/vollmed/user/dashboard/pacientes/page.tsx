'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import { getDataById } from "@/app/services/vollmedApi"
import VollMedNav from "../components/voll-med-nav"
import RegisterDoctor from "../components/register-doctor"
import PacienteListCabecalho from "./__components/paciente-list-cabecalho"
import PacienteListHeader from "./__components/paciente-list-header"
import PacienteListBody from "./__components/paciente-list-body"



export default function Pacientes () {
    const router = useRouter();
    const [paciente, setPaciente] = useState<Paciente | null>(null);
    const [idPaciente, setIdPaciente] = useState(''); 

    const [register, setRegister] = useState(false)
    const [list, setList] = useState(false)

    function setRegisterCard () {
        setRegister(true)
        setList(false)
        setPaciente(null)
    }

    function setListCard () {
        setRegister(false)
        setList(true)
        setPaciente(null)
    }

    function closeCards () {
        setRegister(false)
        setList(false)
    }

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
            const pacienteResponse = await getDataById(`/pacientes/${idPaciente}`, token);
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
            buscarPaciente()
            closeCards(); // Chama a função buscarPaciente ao pressionar a tecla "Enter"
        }
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <VollMedNav 
                title="Pacientes"
                handleRegister={() => setRegisterCard()}
                handleList={() => setListCard()}
                handleCards={() => closeCards()}
                input={
                    <input 
                        className="  bg-transparent focus:outline-none focus:none"
                        type="text" 
                        value={idPaciente} 
                        onChange={handleChange} 
                        onKeyDown={handleKeyPress}
                        placeholder="Insira o ID do Paciente"
                    />}
            />

            {register && (
                    <RegisterDoctor 
                
                    />
                )}

            {paciente ? (

            <div className="container mx-auto my-8 px-4 md:px-6">
                <div className="">
                    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <PacienteListCabecalho />
                        <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                            <thead className="bg-gray-50 dark:bg-gray-800">
                                <PacienteListHeader />
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                                <PacienteListBody 
                                    id={paciente.id}
                                    nome={paciente.nome}
                                    email={paciente.email}
                                    telefone={paciente.telefone}
                                    cpf={paciente.cpf}
                                    endereco={paciente.endereco}
                                    ativo={paciente.ativo}
                                />
                            </tbody>
                        </table>
                        </div>
                    </div>
                </div>
            </div>
                
            ) : null }
        </div>
    );
}