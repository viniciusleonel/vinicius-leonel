'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import { getDataById, getMedicos } from "@/app/services/vollmedApi"
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../components/voll-med-nav"
import MedicoListCabecalho from "./__components/medico-list-nav"
import MedicoListHeader from "./__components/medico-list-header"
import MedicoListBody from "./__components/medico-list-body"
import MedicoListNav from "./__components/medico-list-nav"
import MedicoBody from "./__components/medico-body"
import MedicoHeader from "./__components/medico-header"

export default function Medicos () {
    const [register, setRegister] = useState(false)
    const [list, setList] = useState(false)
    const [medico, setMedico] = useState<Medico | null>(null);
    const [medicos, setMedicos] = useState<Medico[]>([]); // Alterado para lista de médicos
    const [idMedico, setIdMedico] = useState(''); 
    const router = useRouter()

    function setRegisterCard () {
        setRegister(true)
        setList(false)
        setMedico(null)
        setMedicos([])
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
            const medicoResponse = await getDataById(`/medicos/${idMedico}`, token);
            setMedico(medicoResponse); 
            setMedicos([])
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    }

    

    async function buscarMedicos() {
        try {
            const cookies = parseCookies();
            const token = cookies['nextauth.token'];
            const medicosResponse = await getMedicos(`/medicos`, token);
            setMedicos(medicosResponse);
            setMedico(null)
            closeCards()
        } catch (error) {
            console.error('Erro ao obter pacientes:', error);
        }
    }


    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setIdMedico(event.target.value); 
    }

    function handleKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            buscarMedico()
            closeCards(); 
        }
    }

    return (
        <div className="w-full">
            <VollMedNav 
                title="Médicos"
                handleRegister={() => setRegisterCard()}
                handleList={buscarMedicos}
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
                
                {medicos.length > 0 && (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <MedicoListNav />
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <MedicoListHeader />
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                                        {medicos.map((medico) => (
                                            <MedicoListBody 
                                                key={medico.id}
                                                id={medico.id}
                                                nome={medico.nome}
                                                email={medico.email}
                                                telefone={medico.telefone}
                                                crm={medico.crm}
                                                especialidade={medico.especialidade}
                                                endereco={medico.endereco}
                                                ativo={medico.ativo}
                                            />
                                        ))}
                                        {medico && (
                                            <MedicoListBody 
                                                key={medico.id}
                                                id={medico.id}
                                                nome={medico.nome}
                                                email={medico.email}
                                                telefone={medico.telefone}
                                                crm={medico.crm}
                                                especialidade={medico.especialidade}
                                                endereco={medico.endereco}
                                                ativo={medico.ativo}
                                            />
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {medico && (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <MedicoListCabecalho />
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-gray-800">
                                        <MedicoHeader />
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-950 dark:divide-gray-700">
                                            <MedicoBody 
                                                key={medico.id}
                                                id={medico.id}
                                                nome={medico.nome}
                                                email={medico.email}
                                                telefone={medico.telefone}
                                                crm={medico.crm}
                                                especialidade={medico.especialidade}
                                                endereco={medico.endereco}
                                                ativo={medico.ativo}
                                            />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            </div>
        </div>
    )
}