import React, { useState } from 'react';
import { Especialidade } from '@/app/model/Especialidade';

export default function RegisterDoctor() {
    const [especialidadeSelecionada, setEspecialidadeSelecionada] = useState('');

    const handleEspecialidadeChange = (event: { target: { value: any; }; }) => {
        const especialidade = event.target.value;
        setEspecialidadeSelecionada(especialidade);
    };

    return (
        <div className="container mx-auto my-8 px-4 md:px-6">
            <div className="">
                <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold mb-4">Registrar Médico</h2>
                    <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="name">
                                    Nome
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="name"
                                    placeholder="Enter patient's name"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="email"
                                    placeholder="Enter doctor's email"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="contato">
                                    Contato
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="contato"
                                    placeholder="Enter doctor's contact number"
                                    type="tel"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="crm">
                                    CRM
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="crm"
                                    placeholder="Enter doctor's crm"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="especialidade">
                                    Especialidade
                                </label>
                                <select
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="especialidade"
                                    value={especialidadeSelecionada}
                                    onChange={handleEspecialidadeChange}
                                >
                                    <option value="">Selecione a especialidade</option>
                                    {Object.values(Especialidade).map((especialidade) => (
                                        <option key={especialidade} value={especialidade}>
                                            {especialidade}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="logradouro">
                                    Endereço
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="logradouro"
                                    placeholder="Logradouro"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="bairro">
                                    Bairro
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="bairro"
                                    placeholder="Bairro"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="numero">
                                    Número
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="numero"
                                    placeholder="Número"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cep">
                                    CEP
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="cep"
                                    placeholder="CEP"
                                    type="text"
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="complemento">
                                    Complemento
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="complemento"
                                    placeholder="Complemento"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="cidade">
                                    Cidade
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="cidade"
                                    placeholder="Cidade"
                                    type="text"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300" htmlFor="estado">
                                    Estado
                                </label>
                                <input
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-800 dark:border-gray-700 dark:text-gray-200"
                                    id="estado"
                                    placeholder="Estado"
                                    type="text"
                                />
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
        </div>
    );
}
