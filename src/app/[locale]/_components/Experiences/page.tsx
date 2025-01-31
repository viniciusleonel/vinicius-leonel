"use client";

import {useTranslations} from 'next-intl';
import { useState } from "react";
import {
    ExperienciasMain,
    ExperienciasTitle,
    ExperienciasContent,
    ExperienciasContentItem,
    ExperienciasContentItemLink,
    ExperienciasTechDescription,
    ExperienciasTechTitle,
    ExperienciasTechContent,
    ExperienciasTechIcons,
} from "./__components/experiencias";
import JackPackCompose, {
    AndroidIcon,
    AzureIcon,
    CssIcon,
    DockerLink,
    Git,
    GitHubLink,
    HtmlIcon,
    JavaIcon,
    Kotlin,
    MongoDBIcon,
    MySql,
    NextJsIcon,
    Oracle,
    Postgres,
    Prisma,
    ReactIcon,
    SpringIcon,
    TailwindIcon,
    TypeScriptIcon,
} from "../Skills/tech-icons";

export default function ExpecienciasPage() {



    const t = useTranslations('Knowledge');

    const [javaLink, setJavaLink] = useState(true);
    const [nextLink, setNextLink] = useState(false);
    const [kotlinLink, setKotlinLink] = useState(false);
    const [databaseLink, setDatabaseLink] = useState(false);
    const [devOps, setDevOps] = useState(false);
    const [techs, setTechs] = useState(false);

    const handleJavaClick = () => {
        setJavaLink(!javaLink);
        setNextLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
        setTechs(false);
        setDevOps(false);
    };

    const handleNextClick = () => {
        setNextLink(!nextLink);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
        setTechs(false);
        setDevOps(false);
    };

    const handleKotlinClick = () => {
        setKotlinLink(!kotlinLink);
        setNextLink(false);
        setJavaLink(false);
        setDatabaseLink(false);
        setTechs(false);
        setDevOps(false);
    };

    const handleDatabaseClick = () => {
        setDatabaseLink(!databaseLink);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
        setTechs(false);
        setDevOps(false);
    };

    const handleDevOpsClick = () => {
        setDevOps(!devOps);
        setTechs(false);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
    };

    const handleTechsClick = () => {
        setTechs(!techs);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
        setDevOps(false);
    };
    return (
        <ExperienciasMain>
            <ExperienciasTitle>{t('title')}</ExperienciasTitle>
            <ExperienciasContent>
                <ExperienciasContentItem>
                    <ExperienciasContentItemLink
                        active={javaLink}
                        onClick={handleJavaClick}
                    >
                        {t('backend.title')}
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={nextLink}
                        onClick={handleNextClick}
                    >
                        {t('frontend.title')}
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={kotlinLink}
                        onClick={handleKotlinClick}
                    >
                        {t('mobile.title')}
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={databaseLink}
                        onClick={handleDatabaseClick}
                    >
                        {t('database.title')}
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={devOps}
                        onClick={handleDevOpsClick}
                    >
                        {t('devops.title')}
                    </ExperienciasContentItemLink>

                    <ExperienciasContentItemLink
                        active={techs}
                        onClick={handleTechsClick}
                    >
                        {t('libs-framework.title')}
                    </ExperienciasContentItemLink>
                </ExperienciasContentItem>

                {javaLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Java/Kotlin + Spring
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            {t('backend.description')}
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <JavaIcon />
                            <SpringIcon />
                            <Postgres />
                            <DockerLink />
                            <Git />
                            <GitHubLink link="https://github.com/viniciusleonel/vollmed-api" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {nextLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Reactjs/Nextjs/TypeScript
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            {t('frontend.description')}
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <HtmlIcon />
                            <CssIcon />
                            <TypeScriptIcon />
                            <TailwindIcon />
                            <NextJsIcon />
                            <ReactIcon />
                            <Git />
                            <GitHubLink link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {kotlinLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Kotlin + Jetpack Compose
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            {t('mobile.description')}
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Kotlin />
                            <AndroidIcon />
                            <JackPackCompose />
                            <Git />
                            <GitHubLink link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {databaseLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Banco de Dados
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            {t('database.description')}
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Oracle />
                            <MySql />
                            <Postgres />
                            <Prisma />
                            <MongoDBIcon />
                            <Git />
                            <GitHubLink link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {devOps && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>DevOps</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            {t('devops.description')}
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <DockerLink />
                            <AzureIcon />
                            <Git />
                            <GitHubLink link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {techs && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            {t('libs-framework.title')}
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            <ul>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        JWT
                                    </span>
                                    : {t('libs-framework.jwt')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Zod
                                    </span>
                                    : {t('libs-framework.zod')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Stripe
                                    </span>
                                    : {t('libs-framework.stripe')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Radix UI
                                    </span>
                                    : {t('libs-framework.radixui')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Shadcn/UI
                                    </span>
                                    : {t('libs-framework.shadcnui')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Google OAuth
                                    </span>
                                    : {t('libs-framework.googleoauth')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        GitHub OAuth
                                    </span>
                                    : {t('libs-framework.githuboauth')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Next-Auth/AuthJs
                                    </span>
                                    : {t('libs-framework.nextauth')}
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Next-intl
                                    </span>
                                    : {t('libs-framework.nextintl')}
                                </li>
                            </ul>
                        </ExperienciasTechDescription>
                    </ExperienciasTechContent>
                )}
            </ExperienciasContent>
        </ExperienciasMain>
    );
}
