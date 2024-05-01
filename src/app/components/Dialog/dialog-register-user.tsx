
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button, Input } from "@nextui-org/react"

interface DialogRegisterUserProps {
    user: string | undefined
}

export function DialogRegisterUser({user}: DialogRegisterUserProps) {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle className="text-green-500">Usuário registrado com sucesso!</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                User
                </label>
                <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
                />
            </div>
            </div>
            
        </DialogContent>
        </Dialog>
    )
}
