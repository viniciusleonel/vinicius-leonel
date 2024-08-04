import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineWorkHistory } from "react-icons/md";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    SidebarContainer,
    SidebarNavButton,
    SidebarTitle,
} from "./sidebar-layout";
import { useState } from "react";

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const [vollmedActive, setVollmedActive] = useState(false);
    const [fintechActive, setFintechActive] = useState(false);

    const handleProjectClick = (project: string) => {
        if (project === "vollmed") {
            setVollmedActive(!vollmedActive);
            setFintechActive(false);
            console.log(vollmedActive);
        } else if (project === "fintech") {
            setFintechActive(!fintechActive);
            setVollmedActive(false);
            console.log(fintechActive);
        }
    };

    return (
        <ResizablePanelGroup
            direction="horizontal"
            className="min-h-screen w-full"
        >
            <ResizablePanel
                defaultSize={20}
                className="flex flex-col"
                style={{
                    backgroundColor: "var(--tw-bg-surface)",
                }}
            >
                <SidebarContainer>
                    <SidebarTitle>
                        <MdOutlineWorkHistory className="h-7 w-7" />
                        Projects
                    </SidebarTitle>

                    <SidebarNavButton
                        onClick={() => handleProjectClick("vollmed")}
                        active={vollmedActive}
                        itensList={["Vollmed 1", "Item 2", "Item 3"]}
                    >
                        <MdOutlineWorkHistory className="h-5 w-5" />
                        VollMed
                    </SidebarNavButton>

                    <SidebarNavButton
                        onClick={() => handleProjectClick("fintech")}
                        active={fintechActive}
                        itensList={["fintech 1", "Item 2", "Item 3"]}
                    >
                        <MdOutlineWorkHistory className="h-5 w-5" />
                        Fintech
                    </SidebarNavButton>
                </SidebarContainer>
            </ResizablePanel>
            <ResizableHandle className="bg-cyan-700 dark:bg-cyan-400" />
            <ResizablePanel defaultSize={80}>
                <div className="flex h-full items-center justify-center p-6">
                    {vollmedActive && <span className="font-semibold">Vollmed</span>}
                    {fintechActive && <span className="font-semibold">Fintech</span>}
                </div>
            </ResizablePanel>
        </ResizablePanelGroup>
    );
}
