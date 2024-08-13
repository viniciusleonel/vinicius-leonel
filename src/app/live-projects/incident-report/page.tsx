import { JavaIcon, SpringIcon, Postgres, TypeScriptIcon, NextJsIcon, MongoDBIcon } from "@/app/components/Skills/tech-icons";
import {
    ContentMain,
    ContentHeader,
    ContentHeaderTitle,
    ContentBody,
    ContentBodyDescription,
    ContentHeaderTechList,
} from "../__components/content";

export default function Fintech() {
    return (
        <ContentMain>
            <ContentHeader>
                <ContentHeaderTitle>Incident Report</ContentHeaderTitle>
                <ContentHeaderTechList>
                    <TypeScriptIcon />
                    <NextJsIcon />
                    <MongoDBIcon />
                </ContentHeaderTechList>
            </ContentHeader>

            <ContentBody>
                <ContentBodyDescription>
                The Incident Report API allows users to register accidents by providing detailed information about the incident. Users can input data such as the severity of the accident, the addresses involved, the vehicles involved, and any injured parties. This API, built using Next.js and MongoDB, facilitates the systematic recording and management of accident reports, ensuring that all relevant details are captured accurately and efficiently.
                </ContentBodyDescription>
            </ContentBody>
        </ContentMain>
    );
}