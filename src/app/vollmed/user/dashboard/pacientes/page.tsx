'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { usePathname, useRouter } from 'next/navigation'
import { getDataById, getPacientes } from "@/services/vollmedApi"
import VollMedNav from "../../components/voll-med-nav"
import RegisterDoctor from "../medicos/__components/register-doctor"
import PacienteListCabecalho from "./__components/paciente-list-nav"
import PacienteListHeader from "./__components/paciente-list-header"
import PacienteListBody from "./__components/paciente-list-body"
import PacienteListNav from "./__components/paciente-list-nav"
import PacienteHeader from "./__components/paciente-header"
import PacienteBody from "./__components/paciente-body"



export default function Pacientes () {
    const router = useRouter();
    const [paciente, setPaciente] = useState<Paciente | null>(null);
    const [idPaciente, setIdPaciente] = useState(''); 
    const [pacientes, setPacientes] = useState<Paciente[]>([]); // Alterado para lista de médicos
    const [register, setRegister] = useState(false)
    const [list, setList] = useState(false)

    const pathname = usePathname();

    function setRegisterCard () {
        setRegister(true)
        setPacientes([])
        setPaciente(null)
    }

    useEffect(() => {
        const cookies = parseCookies();
        const token = cookies['nextauth.token'];

        if (!token) {
            router.push('/');
        }

        if (pathname == "/vollmed/user/dashboard/pacientes"){
            getAllPacientes()
        }
    }, []);

    async function getAllPacientes() {
        try {
            const cookies = parseCookies();
            const token = cookies['nextauth.token'];
            const medicosResponse = await getPacientes(`/pacientes`, token);
            setPacientes(medicosResponse);
            setPaciente(null)
            setRegister(false)
        } catch (error) {
            console.error('Erro ao obter pacientes:', error);
        }
    }

    async function getPacienteById() {
        try {
            const cookies = parseCookies();
            const token = cookies['nextauth.token'];
            const pacienteResponse = await getDataById(`/pacientes/${idPaciente}`, token);
            setPaciente(pacienteResponse); 
            setPacientes([])
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    }

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setIdPaciente(event.target.value); // Atualiza o estado do ID do paciente conforme o usuário digita
    }

    function handleKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            getPacienteById()
            setRegister(false); // Chama a função buscarPaciente ao pressionar a tecla "Enter"
        }
    }

    return (
        <div className="flex flex-col justify-center items-center ">
            <VollMedNav 
                title="Pacientes"
                handleRegister={() => setRegisterCard()}
                handleList={getAllPacientes}
                input={
                    <input 
                        className=" w-14 sm:w-max bg-transparent focus:outline-none focus:none"
                        type="text" 
                        value={idPaciente} 
                        onChange={handleChange} 
                        onKeyDown={handleKeyPress}
                        placeholder="ID do Paciente"
                    />}
            />

            {/* {register && (
                    <RegisterDoctor 
                    />
                )} */}

            {pacientes.length > 0 && (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <PacienteListNav />
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <PacienteListHeader />
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                                        {pacientes.map((paciente) => (
                                            <PacienteListBody 
                                                key={paciente.id}
                                                id={paciente.id}
                                                nome={paciente.nome}
                                                email={paciente.email}
                                                telefone={paciente.telefone}
                                                cpf={paciente.cpf}
                                                endereco={paciente.endereco}
                                                ativo={paciente.ativo}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {paciente && (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                                <PacienteListNav />
                            <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                    <PacienteHeader />
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                                    <PacienteBody 
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
            )}
        </div>
    );
}