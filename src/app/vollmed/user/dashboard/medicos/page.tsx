'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../components/voll-med-nav"
import MedicoListHeader from "./__components/medico-list-header"
import MedicoListBody from "./__components/medico-list-body"
import MedicoNav from "./__components/medico-nav"
import MedicoBody from "./__components/medico-body"
import MedicoHeader from "./__components/medico-header"
import { MedicoService } from "@/services/MedicoService"
import {Medico} from "@/app/model/Medico"
import MedicoEmptyTable from "./__components/medico-empty-table"
import MedicoEmptyTableList from "./__components/medico-empty-table-list"

export default function Medicos () {
    const [register, setRegister] = useState(false)
    const [medico, setMedico] = useState<Medico | null>(null);
    const [medicoListaVazia, setMedicoListaVazia] = useState(true);
    const [medicoVazia, setMedicoVazia] = useState(false);
    const [medicos, setMedicos] = useState<Medico[]>([]); 
    const [idMedico, setIdMedico] = useState(''); 
    const router = useRouter()

    const cookies = parseCookies();
    const token = cookies['nextauth.token'];
    const medicoService = new MedicoService();

    useEffect(() => {
        
        const cookies = parseCookies()
        const token = cookies['nextauth.token']
        if (!token ) {
            router.push('/')
        } 

    }, [])

    function setRegisterCard () {
        setRegister(true)
        setMedico(null)
        setMedicos([])
        setMedicoListaVazia(false)
        setMedicoVazia(false)
    }

    function excluirMedico () {
        medicoService.deletarMedico(token, idMedico)
        setMedico(null);
        setMedicoVazia(true)
    }

    async function getAllMedicos() {
        try {
            const medicosResponse = await medicoService.listarTodos(token);
            if (medicosResponse && medicosResponse.length > 0) {
                setMedicos(medicosResponse);
                setMedico(null);
                setRegister(false);
                setMedicoVazia(false)
            } else {
                // Se a lista de médicos estiver vazia
                setMedicos([]); // Limpar a lista de médicos
                setMedico(null);
                setRegister(false);
                setMedicoListaVazia(true)
                setMedicoVazia(false)
            }
        } catch (error) {
            console.error('Erro ao obter pacientes:', error);
        }
    }
    
    async function getMedicoById() {
        try {
            const medicoResponse = await medicoService.buscarPorId(token, idMedico);
            setMedico(medicoResponse);
            setMedicos([]);
            setMedicoListaVazia(false)
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
        }
    }

    function handleChange(event: { target: { value: SetStateAction<string>; }; }) {
        setIdMedico(event.target.value); 
    }

    function handleKeyPress(event: { key: string; }) {
        if (event.key === 'Enter') {
            getMedicoById()
            setRegister(false); 
        }
    }

    return (
        <div className="w-full">
            <VollMedNav 
                title="Médicos"
                handleRegister={() => setRegisterCard()}
                handleList={getAllMedicos}
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
                
                {medicos.length > 0 ? (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <MedicoNav />
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
                                                excluirMedico={excluirMedico}
                                            />
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : medicoListaVazia && (
                <MedicoEmptyTableList />
            )}

            {medico ? (
                <div className="container mx-auto my-8 px-4 md:px-6">
                    <div className="">
                        <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                            <MedicoNav />
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
                                                excluirMedico={excluirMedico}
                                            />
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            ) : medicoVazia && (
                <MedicoEmptyTable />
            )}
            </div>
        </div>
    )
}