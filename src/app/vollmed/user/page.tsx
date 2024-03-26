'use client'

import Nav from "../../components/Nav/Nav"

export default function VollMed () {
    return (
        <div className="">
            <Nav
                title='VollMed RESTfull Java API '
            />    
            <main className="h-screen pt-8 flex flex-1 items-center justify-center mx-2 ">
                <form action="" className="flex flex-col w-full sm:max-w-xs max-w-64 gap-4 ">
                    {/* <h3 className="flex justify-center text-3xl mb-3">Cadastre-se</h3> */}
                    <div className="flex flex-col mb-3">
                        <label htmlFor="" className="font-medium text-xl mb-1">Login</label>
                        <input type="text" className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" placeholder="Crie seu login" />
                    </div>

                    <div className="flex flex-col mb-3">
                        <label htmlFor="" className="font-medium text-xl mb-1">Senha</label>
                        <input type="password" className="ps-2 rounded-md py-1 border shadow-lg border-zinc-400" placeholder="Crie sua senha" />
                    </div>

                    <button className="bg-emerald-500 font-medium rounded-md py-2 shadow-lg hover:bg-emerald-700">Cadastrar</button>
                </form>
            </main>    
        </div>
    )
}
