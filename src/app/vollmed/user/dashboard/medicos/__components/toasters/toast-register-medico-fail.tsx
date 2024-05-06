import { Medico } from "@/app/model/Medico"
import User from "@/app/model/Usuario"
import { Button } from "@/components/ui/button"
import { UserProps } from "@nextui-org/react"

interface ToastRegisterMedicoProps {
    error?: Error
    campo: string,
    valor: string,
    closeToaster: () => void
}

export function ToastRegisterMedicoFail({closeToaster, error, campo, valor} :ToastRegisterMedicoProps) {
    return (
        <>
        <div className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm" />
        <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 animate-slide-in-up">
            <div className="rounded-lg bg-red-500 p-4 shadow-lg dark:bg-red-500">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                <h3 className="text-lg font-medium text-white dark:text-white">Médico Não Cadastrado</h3>
                <p className="text-sm text-white dark:text-white"><span className="text-zinc-800  ">{campo.toUpperCase()} - {valor}</span> já está sendo utilizado! </p>
                </div>
                <Button
                className="text-white hover:text-black dark:text-white dark:hover:text-white"
                size="icon"
                variant="ghost"
                onClick={closeToaster}
                >
                <XIcon className="h-5 w-5" />
                <span className="sr-only">Close</span>
                </Button>
            </div>
            </div>
        </div>
        </>
    )
}

function XIcon(props: any) {
    return (
        <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
        </svg>
    )
}