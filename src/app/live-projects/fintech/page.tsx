import { JavaIcon, SpringIcon, Postgres } from "@/app/components/Skills/tech-icons";
import {
    ContentMain,
    ContentHeader,
    ContentHeaderTitle,
    ContentBody,
    ContentBodyDescription,
    ContentHeaderTechList,
} from "../__components/content";

export default function IncidentReport() {
    return (
        <ContentMain>
            <ContentHeader>
                <ContentHeaderTitle>Fintech</ContentHeaderTitle>
                <ContentHeaderTechList>
                    <JavaIcon />
                    <SpringIcon />
                    <Postgres />
                </ContentHeaderTechList>
            </ContentHeader>

            <ContentBody>
                <ContentBodyDescription className="text-">
                The Fintech application is a platform that allows users to manage their personal finances, including registering and controlling income, expenses, and investments. The system offers a user-friendly interface and features to facilitate financial tracking. The application was developed in Java with JSP.
                </ContentBodyDescription>
            </ContentBody>
        </ContentMain>
    );
}
