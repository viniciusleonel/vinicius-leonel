import {
    JavaIcon,
    Postgres,
    SpringIcon,
} from "@/app/components/Skills/tech-icons";
import { ContentMain, ContentHeader, ContentHeaderTitle, ContentHeaderTechList, ContentBody, ContentBodyDescription } from "../__components/content";

export default function Vollmed() {
    return (
        <ContentMain>
            <ContentHeader>
                <ContentHeaderTitle>Vollmed</ContentHeaderTitle>
                <ContentHeaderTechList>
                    <JavaIcon />
                    <SpringIcon />
                    <Postgres />
                </ContentHeaderTechList>
            </ContentHeader>
            <ContentBody>
                <ContentBodyDescription>
                    The VollMed API is an application developed in Java with Spring Framework, aimed at managing a medical clinic. With JWT authentication resources, the API allows the registration of doctors, patients, and appointments, providing public endpoints for user login and registration.
                </ContentBodyDescription>
            </ContentBody>
        </ContentMain>
    );
}
