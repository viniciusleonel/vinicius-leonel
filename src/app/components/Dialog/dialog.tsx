
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

export function DialogDemo() {
    return (
        <Dialog>
        <DialogTrigger asChild>
            <Button>Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
                Make changes to your profile here. Click save when you're done.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="name" className="text-right">
                Name
                </label>
                <Input
                id="name"
                defaultValue="Pedro Duarte"
                className="col-span-3"
                />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="username" className="text-right">
                Username
                </label>
                <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
                />
            </div>
            </div>
            <DialogFooter>
            <Button type="submit">Save changes</Button>
            </DialogFooter>
        </DialogContent>
        </Dialog>
    )
}
