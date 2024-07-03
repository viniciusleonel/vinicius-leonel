"use client";

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
import { cn } from "@/lib/utils";
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
    const [techs, setTechs] = useState(false);

    const handleJavaClick = () => {
        setJavaLink(!javaLink);
        setNextLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
        setTechs(false);
    };

    const handleNextClick = () => {
        setNextLink(!nextLink);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
        setTechs(false);
    };

    const handleKotlinClick = () => {
        setKotlinLink(!kotlinLink);
        setNextLink(false);
        setJavaLink(false);
        setDatabaseLink(false);
        setTechs(false);
    };

    const handleDatabaseClick = () => {
        setDatabaseLink(!databaseLink);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
        setTechs(false);
    };

    const handleTechsClick = () => {
        setTechs(!techs);
        setNextLink(false);
        setJavaLink(false);
        setKotlinLink(false);
        setDatabaseLink(false);
    };

    return (
        <ExperienciasMain>
            <ExperienciasTitle>Knowledge</ExperienciasTitle>
            <ExperienciasContent>
                <ExperienciasContentItem>
                    <ExperienciasContentItemLink
                        active={javaLink}
                        onClick={handleJavaClick}
                    >
                        Backend
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={nextLink}
                        onClick={handleNextClick}
                    >
                        Frontend
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={kotlinLink}
                        onClick={handleKotlinClick}
                    >
                        Mobile
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={databaseLink}
                        onClick={handleDatabaseClick}
                    >
                        Database
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={techs}
                        onClick={handleTechsClick}
                    >
                        Bibliotecas e Frameworks
                    </ExperienciasContentItemLink>
                </ExperienciasContentItem>

                {javaLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Java + Spring
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Development of robust and scalable APIs using Spring
                            Boot, Docker, JWT, Swagger, Hibernate, and
                            PostgreSQL. Creation of RESTful endpoints, security
                            configuration with JWT, interactive documentation
                            with Swagger, and containerization with Docker to
                            ensure consistency across environments. Hibernate
                            and JPA were used for object-relational mapping and
                            Flyway for database schema version management.
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
                        <ExperienciasTechTitle>Next.js</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Frontend - Next.js / TypeScript / React Development
                            of modern and responsive web applications using
                            Next.js and React. Next.js offers optimized
                            performance, pre-rendering of pages, simplified
                            routing, and SSR (Server-Side Rendering) support.
                            React provides an efficient way to build interactive
                            and reusable user interfaces, facilitating code
                            development and maintenance. TypeScript was used for
                            static typing, aiding in error detection during
                            development and improving code maintainability.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <HtmlIcon />
                            <CssIcon />
                            <TypeScriptIcon />
                            <TailwindIcon />
                            <NextJsIcon />
                            <ReactIcon />
                            <GitHub link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {kotlinLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>Kotlin</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Development in Kotlin and Java for Android
                            applications, with a focus on Jetpack Compose to
                            create modern and dynamic user interfaces.
                            Implementation of architectures such as MVVM and
                            integration of RESTful APIs to retrieve backend
                            data.
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
                        <ExperienciasTechTitle>Database</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Development and management of database systems using
                            Oracle, PostgreSQL, MySQL, Hibernate, and Prisma.
                            Designing and modeling database schemas, creating
                            and optimizing SQL queries, and implementing
                            object-relational mapping (ORM) with Hibernate, JPA,
                            and Prisma. Migration tools such as Flyway were used
                            to ensure consistent database schema versions.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Oracle />
                            <MySql />
                            <Postgres />
                            <Prisma />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {techs && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Bibliotecas e Frameworks
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            <ul>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        JWT
                                    </span>
                                    : JSON Web Token (JWT) is an open standard
                                    (RFC 7519) that defines a compact and
                                    self-contained way for securely transmitting
                                    information between parties as a JSON
                                    object.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Zod
                                    </span>
                                    : A schema validation library to ensure data
                                    integrity and correctness.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Stripe
                                    </span>
                                    : A payment platform used for processing transactions and managing
                                    subscriptions.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Radix UI
                                    </span>
                                    : Accessible and customizable user interface
                                    components for building modern web
                                    applications.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Shadcn/UI
                                    </span>
                                    : A library of accessible and customizable
                                    user interface components.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Google OAuth
                                    </span>
                                    : An authentication service that allows
                                    users to log in using their Google accounts.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        GitHub OAuth
                                    </span>
                                    : An authentication service that enables
                                    users to log in using their GitHub accounts.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Next-Auth/AuthJs
                                    </span>
                                    : A library for managing authentication in
                                    Next.js applications, providing a seamless
                                    and secure login experience.
                                </li>
                            </ul>
                        </ExperienciasTechDescription>
                    </ExperienciasTechContent>
                )}
            </ExperienciasContent>
        </ExperienciasMain>
    );
}
