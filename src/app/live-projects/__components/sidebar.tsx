import { TbMedicalCross } from "react-icons/tb";
import { GrMoney } from "react-icons/gr";
import { MdOutlineWorkHistory } from "react-icons/md";
import { FaCarCrash } from "react-icons/fa";
import { usePathname } from "next/navigation";
import {
    SidebarContainer,
    SidebarNavButton,
    SidebarNavButtonText,
    SidebarTitle,
} from "./sidebar-layout";
import { useState } from "react";
import Vollmed from "../vollmed/page";
import Fintech from "../fintech/page";
import IncidentReport from "../incident-report/page"

export default function Sidebar() {
    const pathname = usePathname();

    const isActive = (path: string) => {
        return pathname === path;
    };

    const [vollmedActive, setVollmedActive] = useState(false);
    const [fintechActive, setFintechActive] = useState(false);
    const [incidentReport, setIncidentReport] = useState(false);

    const handleProjectClick = (project: string) => {
        if (project === "vollmed") {
            setVollmedActive(!vollmedActive);
            setFintechActive(false);
            setIncidentReport(false);
            console.log(vollmedActive);
        } else if (project === "fintech") {
            setFintechActive(!fintechActive);
            setVollmedActive(false);
            setIncidentReport(false);
            console.log(fintechActive);
        } else if (project === "incident-report") {
            setIncidentReport(!incidentReport);
            setFintechActive(false);
            setVollmedActive(false);
            console.log(incidentReport);
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col sm:flex-row">
                <SidebarContainer>
                    <SidebarTitle>
                        <MdOutlineWorkHistory className="h-7 w-7" />
                        <span className="hidden sm:flex">Projects</span>
                    </SidebarTitle>

                    <SidebarNavButton
                        onClick={() => handleProjectClick("vollmed")}
                        active={vollmedActive}
                        itensList={["Médicos", "Pacientes", "Consultas"]}
                    >
                        <TbMedicalCross className="h-5 w-5" />
                        <SidebarNavButtonText>VollMed</SidebarNavButtonText>
                    </SidebarNavButton>

                    <SidebarNavButton
                        onClick={() => handleProjectClick("fintech")}
                        active={fintechActive}
                        itensList={["Receitas", "Despesas", "Investimentos"]}
                    >
                        <GrMoney className="h-5 w-5" />
                        <SidebarNavButtonText>Fintech</SidebarNavButtonText>
                    </SidebarNavButton>

                    <SidebarNavButton
                        onClick={() => handleProjectClick("incident-report")}
                        active={incidentReport}
                        itensList={["Accident", "Vehicles", "Addresses", "Injured"]}
                    >
                        <FaCarCrash className="h-5 w-5" />
                        <SidebarNavButtonText>Incident Report</SidebarNavButtonText>
                    </SidebarNavButton>
                </SidebarContainer>

            <div className="flex-grow flex h-full items-center justify-center">
                {vollmedActive && <Vollmed />}
                {fintechActive && <Fintech />}
                {incidentReport && <IncidentReport />}
            </div>
        </div>
    );
}
