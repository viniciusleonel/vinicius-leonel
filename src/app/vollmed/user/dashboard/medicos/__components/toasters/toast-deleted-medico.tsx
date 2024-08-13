import { Medico } from "@/app/model/Medico";
import User from "@/app/model/Usuario";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface ToastDeletedMedicoProps {
    closeToaster: () => void;
}

export function ToastDeletedMedico({
    closeToaster,
}: ToastDeletedMedicoProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            closeToaster();
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    },);

    const handleOnClick = () => {
        closeToaster();
        setVisible(false)
    };

    return (
        <>
            {visible && (
                <div className="mb-4 ">
                    <div className="rounded-lg bg-green-500 p-4 shadow-lg dark:bg-green-500">
                        <div className="flex items-center justify-center gap-4">
                            <div className="space-y-1">
                                <h3 className="text-lg font-medium text-white dark:text-white">
                                    Médico deletado com sucesso!
                                </h3>
                            </div>
                            <Button
                                className="text-white hover:text-black dark:text-white dark:hover:text-white"
                                size="icon"
                                variant="ghost"
                                onClick={handleOnClick}
                            >
                                <XIcon className="h-5 w-5" />
                                <span className="sr-only">Close</span>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export function ToastContainer({ toasts }: { toasts: boolean[] }) {
    return (
        <div className="fixed bottom-4 right-4 flex flex-col items-end z-50">
            {toasts.map((isVisible, index) => isVisible && <ToastDeletedMedico key={index} closeToaster={() => {}} />)}
        </div>
    );
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
    );
}
