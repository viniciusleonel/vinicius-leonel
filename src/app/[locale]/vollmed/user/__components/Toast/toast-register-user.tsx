import User from "@/app/model/Usuario"
import { Button } from "@/components/ui/button"

interface ToastRegisterUserProps {
    user: User
    closeToaster: () => void
}

export function ToastRegisterUser({closeToaster, user} :ToastRegisterUserProps) {
    return (
        <>
        <div className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm" />
        <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 animate-slide-in-up">
            <div className="rounded-lg bg-green-500 p-4 shadow-lg dark:bg-green-500">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                <h3 className="text-lg font-medium text-white dark:text-white">Usuário Cadastrado</h3>
                <p className="text-sm text-white dark:text-white">Usúario <span className="text-green-900 underline">{user.login}</span> cadastrado com sucesso!</p>
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