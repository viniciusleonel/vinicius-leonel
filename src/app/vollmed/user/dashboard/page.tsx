'use client'

import { useEffect } from "react";

import { destroyCookie, parseCookies } from "nookies";
import { useRouter } from 'next/navigation';

export default function Dashboard() {

    const router = useRouter();
    const cookies = parseCookies();
    const token = cookies['nextauth.token'];

    useEffect(() => {

        const cookies = parseCookies();
        const token = cookies['nextauth.token'];
        
        if (!token || token == undefined) {
            destroyCookie(null, "nextauth.token");
            destroyCookie(null, "nextauth.user");
            router.push('/');
        }
    }, [token]);

    return (
        
        <div className="container mx-auto my-8 px-4 sm:px-6">
            <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md p-6">
                <h1 className="text-xl sm:text-3xl font-bold mb-4">Sobre a Aplicação VollMed</h1>
                <p className="mb-4 text-sm sm:text-base">
                    A VollMed é uma aplicação desenvolvida para facilitar a gestão de pacientes e médicos em clínicas e hospitais. 
                    Com uma interface intuitiva e funcionalidades robustas, a aplicação permite o cadastro, consulta e gerenciamento 
                    de informações de pacientes e médicos de forma eficiente e segura.
                </p>
                <h2 className="text-lg sm:text-2xl font-semibold mb-3">Funcionalidades Principais</h2>
                <ul className="list-disc list-inside mb-4 text-sm sm:text-base">
                    <li>Cadastro de pacientes e médicos</li>
                    <li>Consulta de informações detalhadas de pacientes e médicos</li>
                    <li>Gerenciamento de registros médicos</li>
                    <li>Autenticação e autorização de usuários</li>
                    <li>Interface amigável e responsiva</li>
                </ul>
                <h2 className="text-lg sm:text-2xl font-semibold mb-3">Como Utilizar</h2>
                <p className="mb-4 text-sm sm:text-base">
                    Para começar a utilizar a aplicação, faça o login com suas credenciais. Após o login, você será redirecionado 
                    para o dashboard, onde poderá acessar as funcionalidades de cadastro e consulta. Utilize o menu de navegação 
                    para alternar entre as diferentes seções da aplicação.
                </p>
                <p className="mb-4 text-sm sm:text-base">
                    Em caso de dúvidas ou problemas, consulte a seção de ajuda ou entre em contato com o suporte técnico.
                </p>
            </div>
        </div>
    )
}