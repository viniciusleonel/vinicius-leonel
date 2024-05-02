import { Button } from "@/components/ui/button"

interface ToastUserRegisterProps {
    closeToaster: () => void
}

export function ToastFailLogin({closeToaster} :ToastUserRegisterProps) {
    return (
        <>
        <div className="fixed inset-0 z-40 bg-gray-900/50 backdrop-blur-sm" />
        <div className="fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 animate-slide-in-up">
            <div className="rounded-lg bg-red-500 p-4 shadow-lg dark:bg-red-500">
            <div className="flex items-start justify-between">
                <div className="space-y-1">
                <h3 className="text-lg font-medium text-white dark:text-white">Acesso negado!</h3>
                <p className="text-sm text-white dark:text-white">Verifique suas informações e tente novamente.</p>
                </div>
                <Button
                className="text-white hover:text-black dark:text-white dark:hover:text-white"
                size="icon"
                variant="ghost"
                onClick={closeToaster}
                >
                <XIcon className="h-5 w-5 " />
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