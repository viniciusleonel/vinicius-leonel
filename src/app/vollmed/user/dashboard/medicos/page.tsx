'use client'

import { SetStateAction, useContext, useEffect, useState } from "react"
import { parseCookies } from "nookies"
import { useRouter } from 'next/navigation'
import RegisterDoctor from "../components/register-doctor"
import VollMedNav from "../../components/voll-med-nav"
import MedicoListHeader from "./__components/medico-list-header"
import MedicoListBody from "./__components/medico-list-body"
import MedicoNav from "./__components/medico-nav"
import MedicoBody from "./__components/medico-body"
import MedicoHeader from "./__components/medico-header"
import { MedicoService } from "@/services/MedicoService"
import {Medico} from "@/app/model/Medico"
import MedicoEmptyTable from "./__components/medico-empty-table"
import MedicoEmptyTableList from "./__components/medico-empty-table-list"
import { ToastContainer, ToastDeletedMedico } from "./__components/toast-deleted-medico"
import MedicoNotFound from "./__components/medico-not-found"

export default function Medicos () {
    const router = useRouter()

    const [register, setRegister] = useState(false)

    const [medico, setMedico] = useState<Medico | null>(null);
    const [medicoListaVazia, setMedicoListaVazia] = useState(false);
    const [medicoVazia, setMedicoVazia] = useState(false);
    const [medicoNaoEncontado, setMedicoNaoEncontado] = useState(false)
    const [medicos, setMedicos] = useState<Medico[]>([]); 
    const [idMedico, setIdMedico] = useState(''); 

    const [toastMedicoDelete, setToastMedicoDelete] = useState(false)
    const [toasts, setToasts] = useState<boolean[]>([]); // Lista de toasts

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

    function closeSearchedToaster () {
        setToastMedicoDelete(false)
    }

    function setRegisterCard () {
        setMedicos([])
        setMedico(null)
        setRegister(true)
        setMedicoVazia(false)
        setMedicoListaVazia(false)
        setMedicoNaoEncontado(false)
    }

    async function excluirMedico() {
        try {
            medicoService.deletarMedico(token, idMedico);
            setMedico(null);
            setMedicoVazia(true);
            
            setToastMedicoDelete(true);
        } catch (error) {
            console.error('Erro ao excluir médico:', error);
        }
    }

    // function closeToaster(index: number) {
    //     setToasts(prevToasts => {
    //         const newToasts = [...prevToasts];
    //         newToasts[index] = false; // Marcar o toast como fechado
    //         return newToasts;
    //     });
    // }

    async function excluirMedicoFromList(id: number) {
        try {
            medicoService.deletarMedico(token, id);
            setMedicos(medicos.filter(medico => medico.id !== id)); // Remove o médico da lista
            setMedico(null);
            setMedicoVazia(medicos.length === 0); // Verifica se a lista está vazia            
            setMedicoListaVazia(true)
            setToasts(prevToasts => [...prevToasts, true]);
        } catch (error) {
            console.error('Erro ao excluir médico:', error);
        }
    }
    

    async function getAllMedicos() {
        try {
            const medicosResponse = await medicoService.listarTodos(token);
            if (medicosResponse && medicosResponse.length > 0) {
                setMedicos(medicosResponse);
                setMedico(null);
                setRegister(false);
                setMedicoVazia(false)
                setMedicoNaoEncontado(false)
            } else {
                // Se a lista de médicos estiver vazia
                setMedicos([]); // Limpar a lista de médicos
                setMedico(null);
                setRegister(false);
                setMedicoVazia(false)
                setMedicoListaVazia(true)
            }
        } catch (error) {
            console.error('Erro ao obter pacientes:', error);
        }
    }
    
    async function getMedicoById() {
        try {
            const medicoResponse = await medicoService.buscarPorId(token, idMedico);
            setMedico(medicoResponse);
            console.log(medicoResponse.ativo)
            setMedicos([]);
            setMedicoListaVazia(false)
            setMedicoNaoEncontado(false)
        } catch (error) {
            console.error('Erro ao obter paciente:', error);
            setMedicoNaoEncontado(true)
            setMedicoListaVazia(false)
            setMedicoVazia(false)
            setRegister(false)
            setMedico(null)
            setMedicos([]);
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
                                                crm={medico.crm}
                                                especialidade={medico.especialidade}
                                                excluirMedico={() => excluirMedicoFromList(medico.id)}
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
                            <h2 className="text-2xl font-bold mb-4">Médico Encontrado</h2>
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


            <ToastContainer toasts={toasts} />
            {toastMedicoDelete && (
                <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
                    <ToastDeletedMedico 
                    closeToaster={closeSearchedToaster}
                />
                </div>
                
            )}

            {medicoNaoEncontado && (
                <MedicoNotFound />
            )}
            </div>
        </div>
    )
}