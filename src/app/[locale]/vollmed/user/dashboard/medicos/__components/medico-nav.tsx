import { InputHTMLAttributes, ReactElement } from "react"

interface MedicoNavProps {
    input?: ReactElement<InputHTMLAttributes<HTMLInputElement>, any>
}

export default function MedicoNav ({input}: MedicoNavProps) {
    return (
        <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Médicos Cadastrados</h2>
            <div className="m-2 p-2 w-1/3 gap-2 border-2 rounded-lg border-cyan-700  dark:border-cyan-400">
                {input}
            </div>
        </div>
    )
}