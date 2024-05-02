import User from "@/app/model/Usuario";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface ToastRegisterUserProps {
    user: string;
    closeToaster: () => void;
}

export function ToastUserLogin({
    closeToaster,
    user,
    }: ToastRegisterUserProps) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        closeToaster();
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const handleOnClick = () => {
        closeToaster();
    };

    return (
        <>
        {visible && (
            <>
            <div className="fixed bottom-4 right-4 z-50">
                <div className="rounded-lg bg-green-500 p-4 shadow-lg dark:bg-green-500">
                <div className="flex items-start justify-between">
                    <div className="space-y-1">
                    <h3 className="text-lg font-medium text-white dark:text-white">
                        Logado com sucesso!
                    </h3>
                    <p className="text-sm text-white dark:text-white">
                        {user}
                    </p>
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
            </>
        )}
        </>
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
