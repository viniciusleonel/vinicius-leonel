'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { AuthContext } from "../../../../context/AuthContext"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../components/voll-med-nav"
import ListAllDoctors from "../components/list-all-doctors"
import { getPacient } from "@/app/services/vollmedApi"
import ListMedico from "../components/list-medico"

export default function Medicos () {
    const [register, setRegister] = useState(false)
    const [list, setList] = useState(false)
    const [medico, setMedico] = useState<Medico | null>(null);
    const [idMedico, setIdMedico] = useState(''); 
    const router = useRouter()

    function setRegisterCard () {
        setRegister(true)
        setList(false)
        setMedico(null)
    }

    function setListCard () {
        setRegister(false)
        setList(true)
        setMedico(null)
    }

    function closeCards () {
        setRegister(false)
        setList(false)
    }

    useEffect(() => {
        
        const cookies = parseCookies()
        const token = cookies['nextauth.token']
        if (!token ) {
            router.push('/')
        } 

    }, [])

    async function buscarMedico() {
        try {
            const cookies = parseCookies();
            const token = cookies['nextauth.token'];
            const pacienteResponse = await getPacient(`/medicos/${idMedico}`, token);
            setMedico(pacienteResponse); // Armazena os dados do paciente no estado local
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    }

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setIdMedico(event.target.value); // Atualiza o estado do ID do paciente conforme o usuário digita
    }

    function handleKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            buscarMedico()
            closeCards(); // Chama a função buscarPaciente ao pressionar a tecla "Enter"
        }
    }

    return (
        <div className="w-full">
            <VollMedNav 
                title="Médicos"
                handleRegister={() => setRegisterCard()}
                handleList={() => setListCard()}
                handleCards={() => closeCards()}
                input={
                    <input 
                        className="  bg-transparent focus:outline-none focus:none"
                        type="text" 
                        value={idMedico} 
                        onChange={handleChange} 
                        onKeyDown={handleKeyPress}
                        placeholder="Insira o ID do Médico"
                    />}
            />
        
            <div className="">
                {register && (
                    <RegisterDoctor 
                
                    />
                )}
                {list && (
                    <ListAllDoctors 
                    />
                )}
                {medico ? (
                <div className=" ">
                    <ListMedico
                        id={medico.id}
                        nome={medico.nome}
                        email={medico.email}
                        telefone={medico.telefone}
                        crm={medico.crm}
                        especialidade={medico.especialidade}
                        endereco={medico.endereco}
                        ativo={medico.ativo}
                    />
                </div>
            ) : null }
            </div>
        </div>
    )
}