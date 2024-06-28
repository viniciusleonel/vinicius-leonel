import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils/utils";
import {
    AndroidIcon,
    CssIcon,
    Docker,
    Git,
    GitHub,
    HtmlIcon,
    JackPackCompose,
    JavaIcon,
    Kotlin,
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
import Image from "next/image";

export default function ExpecienciasPage() {
    const [javaLink, setJavaLink] = useState(true);
    const [nextLink, setNextLink] = useState(false);
    const [kotlinLink, setKotlinLink] = useState(false);
    const [databaseLink, setDatabaseLink] = useState(false);

    const handleJavaClick = () => {
        setJavaLink(!javaLink);
        setNextLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
    };

    const handleNextClick = () => {
        setNextLink(!nextLink);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
    };

    const handleKotlinClick = () => {
        setKotlinLink(!kotlinLink);
        setNextLink(false);
        setJavaLink(false);
        setDatabaseLink(false);
    };

    const handleDatabaseClick = () => {
        setDatabaseLink(!databaseLink);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
    };

    return (
        <ExperienciasMain>
            <ExperienciasTitle>Experiências</ExperienciasTitle>
            <ExperienciasContent>
                <ExperienciasContentItem>
                    <ExperienciasContentItemLink
                        active={javaLink}
                        onClick={handleJavaClick}
                    >
                        Java
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={nextLink}
                        onClick={handleNextClick}
                    >
                        Next.js
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={kotlinLink}
                        onClick={handleKotlinClick}
                    >
                        Kotlin
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={databaseLink}
                        onClick={handleDatabaseClick}
                    >
                        Banco de Dados
                    </ExperienciasContentItemLink>
                </ExperienciasContentItem>

                {javaLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Java + Spring
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento de API&apos;s robustas e escaláveis
                            utilizando Spring Boot, Docker, JWT, Swagger,
                            Hibernate e PostgreSQL. O projeto envolveu a criação
                            de endpoints RESTful, configuração de segurança com
                            JWT, documentação interativa com Swagger e
                            containerização com Docker para garantir
                            consistência entre os ambientes. Foi utilizado
                            Hibernate e JPA para mapeamento objeto-relacional e
                            Flyway para gerenciamento de versões do esquema de
                            banco de dados.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <JavaIcon />
                            <SpringIcon />
                            <Postgres />
                            <Docker link="https://hub.docker.com/r/viniciusleonel/vollmed-api" />
                            <GitHub link="https://github.com/viniciusleonel/vollmed-api" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {nextLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>Next</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Este projeto é uma aplicação web desenvolvida para
                            exibir um portfólio de experiências e projetos. Ele
                            utiliza tecnologias modernas como Next.js, React,
                            TypeScript e Tailwind CSS para criar uma interface
                            de usuário interativa e responsiva.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <HtmlIcon />
                            <CssIcon />
                            <TypeScriptIcon />
                            <TailwindIcon />
                            <NextJsIcon />
                            <ReactIcon />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {kotlinLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>Kotlin</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento em Kotlin e Java para aplicativos
                            Android, com foco em Jetpack Compose para criar
                            interfaces de usuário modernas e dinâmicas.
                            Experiência na implementação de arquiteturas como
                            MVVM e integração de APIs RESTful para obtenção de
                            dados do backend.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <AndroidIcon />
                            <Kotlin />
                            <JackPackCompose />
                            <JavaIcon />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {databaseLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Banco de Dados
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento e gerenciamento de sistemas de banco
                            de dados utilizando Oracle, PostgreSQL, MySQL,
                            Hibernate e Prisma. Experiência em design e
                            modelagem de esquemas de banco de dados, criação e
                            otimização de consultas SQL, e implementação de
                            mapeamento objeto-relacional (ORM) com Hibernate,
                            JPA e Prisma. Utilização de ferramentas de migração
                            como Flyway para garantir versões consistentes dos
                            esquemas de banco de dados.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Oracle />
                            <MySql />
                            <Postgres />
                            <Prisma />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}
            </ExperienciasContent>
        </ExperienciasMain>
    );
}
