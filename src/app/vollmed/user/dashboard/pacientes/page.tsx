'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import { getPacient } from "@/app/services/vollmedApi"
import ListPacient from "../components/list-pacient"
import VollMedNav from "../components/voll-med-nav"
import RegisterDoctor from "../components/register-doctor"
import ListAllDoctors from "../components/list-all-doctors"


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

            {/* <div className="m-2 p-2 gap-2 flex border-2 rounded-lg border-cyan-700  dark:border-cyan-400">
            <button className="font-bold " onClick={buscarPaciente}>Buscar Paciente:</button>
                <input 
                className="  bg-transparent focus:outline-none focus:none"
                    type="text" 
                    value={idPaciente} 
                    onChange={handleChange} 
                    onKeyDown={handleKeyPress}
                    placeholder="Insira o ID do Paciente"
                />
            </div> */}

            {register && (
                    <RegisterDoctor 
                
                    />
                )}
                {list && (
                    <ListAllDoctors 
                    />
                )}

            {paciente ? (
                <div className=" ">
                    <ListPacient 
                        id={paciente.id}
                        nome={paciente.nome}
                        email={paciente.email}
                        telefone={paciente.telefone}
                        cpf={paciente.cpf}
                        endereco={paciente.endereco}
                        ativo={paciente.ativo}
                    />
                </div>
            ) : null }
        </div>
    );
}