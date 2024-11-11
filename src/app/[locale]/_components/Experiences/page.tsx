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
import JackPackCompose, {
    AndroidIcon,
    AzureIcon,
    CssIcon,
    Docker,
    Git,
    GitHub,
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
import Image from "next/image";

export default function ExpecienciasPage() {
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
            <ExperienciasTitle>Conhecimentos</ExperienciasTitle>
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
                        Banco de Dados
                    </ExperienciasContentItemLink>
                    <ExperienciasContentItemLink
                        active={devOps}
                        onClick={handleDevOpsClick}
                    >
                        DevOps
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
                            Java/Kotlin + Spring
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento de APIs robustas e escaláveis com
                            Spring Boot, JWT e Docker. Criação de endpoints
                            RESTful, configuração de segurança com JWT e
                            documentação interativa via Swagger. Uso de Docker
                            para garantir consistência entre ambientes.
                            Experiência com Hibernate e JPA para mapeamento de
                            dados, além de gerenciamento de versões de esquema
                            de banco de dados com Flyway.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <JavaIcon />
                            <SpringIcon />
                            <Postgres />
                            <Docker />
                            <Git />
                            <GitHub link="https://github.com/viniciusleonel/vollmed-api" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {nextLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Reactjs/Nextjs/TypeScript
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento Frontend com Reactjs, Nextjs e
                            TypeScript. Criação de aplicações web modernas,
                            responsivas e de alta performance utilizando
                            Next.js, que proporciona pré-renderização de
                            páginas, roteamento simplificado e suporte a SSR
                            (Server-Side Rendering). Com React, desenvolvo
                            interfaces de usuário interativas e reutilizáveis,
                            otimizando tanto a experiência do usuário quanto a
                            eficiência do desenvolvimento. O uso de TypeScript
                            permite uma tipagem estática robusta, ajudando a
                            identificar e corrigir erros durante o
                            desenvolvimento, além de melhorar a manutenibilidade
                            e a escalabilidade do código.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <HtmlIcon />
                            <CssIcon />
                            <TypeScriptIcon />
                            <TailwindIcon />
                            <NextJsIcon />
                            <ReactIcon />
                            <Git />
                            <GitHub link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {kotlinLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Kotlin + Jetpack Compose
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Desenvolvimento em Kotlin para aplicações Android,
                            com foco no Jetpack Compose para criar interfaces de
                            usuário modernas e dinâmicas. Implementação da
                            arquitetura MVVM e integração de APIs RESTful usando
                            Retrofit para comunicação eficiente com o backend.
                            Aproveitamento das Coroutines do Kotlin para
                            operações assíncronas, garantindo desempenho suave e
                            responsividade. Gerenciamento eficaz de estado com
                            ViewModels e LiveData para manter os componentes da
                            UI sincronizados com os dados subjacentes.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Kotlin />
                            <AndroidIcon />
                            <JackPackCompose />
                            <Git />
                            <GitHub link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {databaseLink && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>
                            Banco de Dados
                        </ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Experiência com bancos de dados relacionais e não
                            relacionais, incluindo Oracle, PostgreSQL, MySQL e
                            MongoDB. Habilidade em modelar esquemas eficientes,
                            otimizar consultas SQL e implementar ORM com
                            Hibernate, JPA e Prisma. Com MongoDB, foco na gestão
                            de dados não estruturados para construir aplicações
                            escaláveis. Utilização de ferramentas de migração e
                            versionamento, como Flyway e Prisma Migrate, para
                            garantir consistência nas mudanças do banco de
                            dados.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Oracle />
                            <MySql />
                            <Postgres />
                            <Prisma />
                            <MongoDBIcon />
                            <Git />
                            <GitHub link="https://github.com/viniciusleonel/vinicius-leonel" />
                        </ExperienciasTechIcons>
                    </ExperienciasTechContent>
                )}

                {devOps && (
                    <ExperienciasTechContent>
                        <ExperienciasTechTitle>DevOps</ExperienciasTechTitle>
                        <ExperienciasTechDescription>
                            Experiência em Azure e GitHub Actions, incluindo a
                            criação de pipelines CI/CD abrangendo tanto
                            integração contínua (CI) quanto entrega contínua
                            (CD). Realizei integração contínua configurando o
                            ambiente Java com GitHub Actions e automatizando
                            testes unitários, bem como entrega contínua, gerando
                            imagens Docker, publicando no Docker Hub e
                            implantando em aplicativos Web do Azure. Habilidade
                            em automatizar o ciclo de entrega contínua para
                            garantir atualizações eficientes e confiáveis de
                            aplicações em nuvem.
                        </ExperienciasTechDescription>
                        <ExperienciasTechIcons>
                            <Docker />
                            <AzureIcon />
                            <Git />
                            <GitHub link="https://github.com/viniciusleonel/vinicius-leonel" />
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
                                    : JSON Web Token (JWT) é um padrão aberto
                                    (RFC 7519) que define uma maneira compacta e
                                    autocontida de transmitir informações com
                                    segurança entre as partes como um objeto
                                    JSON.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Zod
                                    </span>
                                    : Uma biblioteca de validação de esquemas
                                    para garantir a integridade e a correção dos
                                    dados.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Stripe
                                    </span>
                                    : Uma plataforma de pagamento usada para
                                    processar transações e gerenciar
                                    assinaturas.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Radix UI
                                    </span>
                                    : Componentes de interface de usuário
                                    acessíveis e personalizáveis para construir
                                    aplicações web modernas.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Shadcn/UI
                                    </span>
                                    : Uma biblioteca de componentes de interface
                                    de usuário acessíveis e personalizáveis.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Google OAuth
                                    </span>
                                    : Um serviço de autenticação que permite aos
                                    usuários fazer login usando suas contas do
                                    Google.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        GitHub OAuth
                                    </span>
                                    : Um serviço de autenticação que permite aos
                                    usuários fazer login usando suas contas do
                                    GitHub.
                                </li>
                                <li>
                                    <span className="text-cyan-700 dark:text-cyan-500">
                                        Next-Auth/AuthJs
                                    </span>
                                    : Uma biblioteca para gerenciar autenticação
                                    em aplicações Next.js, proporcionando uma
                                    experiência de login perfeita e segura.
                                </li>
                            </ul>
                        </ExperienciasTechDescription>
                    </ExperienciasTechContent>
                )}
            </ExperienciasContent>
        </ExperienciasMain>
    );
}
