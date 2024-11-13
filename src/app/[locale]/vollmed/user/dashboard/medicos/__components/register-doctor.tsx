import React, { useEffect, useState } from 'react';
import { Especialidade } from '@/app/model/Especialidade';
import { CreateMedicoFormData, createMedicoSchema } from '../../../schemas';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { MedicoService } from '@/services/MedicoService';
import { Medico, MedicoRegError, MedicoRegister } from '@/app/model/Medico';
import { ToastRegisterMedico } from './toasters/toast-register-medico';
import { ToastRegisterMedicoFail } from './toasters/toast-register-medico-fail';
import { AxiosError } from 'axios';
import { maskPhone } from '@/lib/utils/maskPhone';
import capitalizarFrase  from '@/lib/utils/capitalize'

interface RegisterDoctorProps {
    token: string,
    mostrarMedico: (id: number) => void
}

export default function RegisterDoctor({token, mostrarMedico}: RegisterDoctorProps) {

    const medicoRegister = new MedicoService();
    const [toastRegisterMedicoSucess, setToastRegisterMedicoSucess] = useState<Medico | null>(null);
    const [toastRegisterMedicoFail, setToastRegisterMedicoFail] = useState<Error | null>(null);
    const [erroCampo, setErroCampo] = useState('');
    const [erroValor, setErroValor] = useState('');
    const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState('');
    const [numero, setNumero] = useState('');

    useEffect(() => {
        const formatarNumero = () => {
            const numeroFormatado = maskPhone(numero);
            setNumero(numeroFormatado);
        };

        formatarNumero();
    }, [numero]);

    const {
        register: registerMedico,
        handleSubmit: handleSubmitCreateMedico,
        formState: { errors: errorsMedico },
        watch,
    } = useForm<CreateMedicoFormData>({
        resolver: zodResolver(createMedicoSchema)
    })

    function closeToaster () {
        setToastRegisterMedicoFail(null)
        setToastRegisterMedicoSucess(null)
    }

    const handlePhoneChange = (event: { target: { value: any; }; }) => {
        const valor = event.target.value;
        const numeroFormatado = maskPhone(valor);
        setNumero(numeroFormatado);
    };

    const handleEspecialidadeChange = (event: { target: { value: any; }; }) => {
        const especialidade = event.target.value;
        setEspecialidadeSelecionada(especialidade);
    };

    function registrarMedico (data: CreateMedicoFormData) {
        const enderecoData: Endereco = {
            logradouro: capitalizarFrase(data.endereco.logradouro),
            bairro: capitalizarFrase(data.endereco.bairro),
            cep: data.endereco.cep,
            numero: data.endereco.numero,
            complemento: data.endereco.complemento,
            cidade: capitalizarFrase(data.endereco.cidade),
            uf: data.endereco.uf.toUpperCase(),
        }
        const medicoData: MedicoRegister = {
            nome: capitalizarFrase(data.nome),
            email: data.email.toLowerCase(),
            telefone: data.telefone,
            crm: data.crm,
            especialidade: data.especialidade,
            endereco: enderecoData,
            
        }
        medicoRegister.registrarMedico(medicoData, token)
        .then((response) => {
            const medico = response.data as Medico;
            setToastRegisterMedicoSucess(medico)
            mostrarMedico(medico.id)
        })
        .catch((error) => {
            console.log(error)
            // Agora você pode usar o campo e o valor como precisar
            setErroCampo(error.response.data.campo)
            setErroValor(error.response.data.valor)
            setToastRegisterMedicoFail(error);
        });
    }

    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Registrar Médico</h2>
                    <form className="space-y-4" onSubmit={handleSubmitCreateMedico(registrarMedico)}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                                    Nome
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="name"
                                    placeholder="Enter patient's name"
                                    type="text"
                                    {...registerMedico('nome')}
                                />
                                {errorsMedico.nome && <span className='text-red-500 pt-2'>{errorsMedico.nome.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="email"
                                    placeholder="Enter doctor's email"
                                    type="text"
                                    {...registerMedico('email')}
                                />
                                {errorsMedico.email && <span className='text-red-500 pt-2'>{errorsMedico.email.message}</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="contato">
                                    Contato
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="contato"
                                    placeholder="Enter doctor's contact number"
                                    type="tel"
                                    {...registerMedico('telefone')}
                                    value={numero} 
                                    onChange={handlePhoneChange}
                                />
                                {errorsMedico.telefone && <span className='text-red-500 pt-2'>{errorsMedico.telefone.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="crm">
                                    CRM
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="crm"
                                    placeholder="Enter doctor's crm"
                                    type="text"
                                    {...registerMedico('crm')}
                                />
                                {errorsMedico.crm && <span className='text-red-500 pt-2'>{errorsMedico.crm.message}</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="especialidade">
                                    Especialidade
                                </label>
                                <select
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="especialidade"
                                    value={especialidadeSelecionada}
                                    // onChange={handleEspecialidadeChange}
                                    {...registerMedico('especialidade', { onChange: handleEspecialidadeChange })}
                                >
                                    <option value="">Selecione a especialidade</option>
                                    {Object.values(Especialidade).map((especialidade) => (
                                        <option key={especialidade} value={especialidade}>
                                            {especialidade}
                                        </option>
                                    ))}
                                </select>
                                {errorsMedico.especialidade && <span className='text-red-500 pt-2'>{errorsMedico.especialidade.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="logradouro">
                                    Logradouro
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="logradouro"
                                    placeholder="Logradouro"
                                    type="text"
                                    {...registerMedico('endereco.logradouro')}
                                />
                                {errorsMedico.endereco?.logradouro && <span className='text-red-500 pt-2'>{errorsMedico.endereco.logradouro.message}</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="bairro">
                                    Bairro
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="bairro"
                                    placeholder="Bairro"
                                    type="text"
                                    {...registerMedico('endereco.bairro')}
                                />
                                {errorsMedico.endereco?.bairro && <span className='text-red-500 pt-2'>{errorsMedico.endereco.bairro.message}</span>}

                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="numero">
                                    Número
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="numero"
                                    placeholder="Número"
                                    type="text"
                                    {...registerMedico('endereco.numero')}
                                    
                                />
                                {errorsMedico.endereco?.numero && <span className='text-red-500 pt-2'>{errorsMedico.endereco.numero.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="cep"
                                    placeholder="CEP"
                                    type="text"
                                    {...registerMedico('endereco.cep')}
                                />
                                {errorsMedico.endereco?.cep && <span className='text-red-500 pt-2'>{errorsMedico.endereco.cep.message}</span>}
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="complemento">
                                    Complemento
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="complemento"
                                    placeholder="Complemento"
                                    type="text"
                                    {...registerMedico('endereco.complemento')}
                                />
                                {errorsMedico.endereco?.complemento && <span className='text-red-500 pt-2'>{errorsMedico.endereco.complemento.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cidade">
                                    Cidade
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="cidade"
                                    placeholder="Cidade"
                                    type="text"
                                    {...registerMedico('endereco.cidade')}
                                />
                                {errorsMedico.endereco?.cidade && <span className='text-red-500 pt-2'>{errorsMedico.endereco.cidade.message}</span>}
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="estado">
                                    Estado
                                </label>
                                <input
                                    className="mt-1 p-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="estado"
                                    placeholder="Estado"
                                    type="text"
                                    {...registerMedico('endereco.uf')}
                                />
                                {errorsMedico.endereco?.uf && <span className='text-red-500 pt-2'>{errorsMedico.endereco.uf.message}</span>}
                            </div>
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="inline-flex items-center px-4 py-2 border border-gray-200 border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:border-gray-800"
                                type="submit"
                            >
                                Registrar Médico
                            </button>
                        </div>
                    </form>
                    {especialidadeSelecionada && (
                        <div className="mt-4">
                            <strong>Especialidade selecionada:</strong> {especialidadeSelecionada}
                        </div>
                    )}
                </div>
            </div>

            {toastRegisterMedicoSucess && (
                <ToastRegisterMedico 
                    medico={toastRegisterMedicoSucess}
                    closeToaster={closeToaster}
                />
            )}

            {toastRegisterMedicoFail && (
                <ToastRegisterMedicoFail 
                campo={erroCampo}
                valor={erroValor}
                error={toastRegisterMedicoFail}
                closeToaster={closeToaster}
                />
            )}
        </div>
    );
}
