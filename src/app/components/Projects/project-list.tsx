import React from "react";
import JetPackCompose, {
    AndroidIcon,
    AzureIcon,
    BootstrapIcon,
    CssIcon,
    Docker,
    HtmlIcon,
    JavaIcon,
    JavaScriptIcon,
    JspIcon,
    Kotlin,
    MongoDBIcon,
    MySql,
    NextJsIcon,
    Oracle,
    Postgres,
    ReactIcon,
    SpringIcon,
    TailwindIcon,
    TypeScriptIcon,
} from "../Skills/tech-icons";

const projectsList = [
    {
        title: "Locaweb APP",
        description:
            "O Locaweb App é um aplicativo Android desenvolvido com Kotlin e Jetpack Compose, que usa a Locaweb API para gerenciar e enviar e-mails de forma intuitiva e eficiente. Com uma interface moderna e responsiva, o aplicativo permite que os usuários se registrem, façam login, enviem e recebam e-mails, além de gerenciar suas configurações de perfil e regras de controle de spam.",
        techIcons: [
            <Kotlin key="kotlin" />,
            <AndroidIcon key="android" />,
            <JetPackCompose key="JetPackCompose" />,
        ],
        linkSite: "https://github.com/viniciusleonel/locaweb-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-app-kotlin",
    },
    {
        title: "Locaweb API",
        description:
            "A API Locaweb é uma solução desenvolvida em Kotlin e Spring para o aplicativo Locaweb APP, feita para gerenciar usuários, preferências de usuários e emails em um aplicativo Kotlin da Locaweb. A API oferece endpoints para operações CRUD (Create, Read, Update, Delete) em usuários e suas preferências, além de funcionalidades para envio e gerenciamento de emails com controle de spam.",
        techIcons: [
            <Kotlin key="kotlin" />,
            <SpringIcon key="spring" />,
            <MySql key="mysql" />,
            <Docker key="docker" />,
        ],
        linkSite: "https://github.com/viniciusleonel/locaweb-fiap",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-fiap",
    },
    {
        title: "Traffic Incident Management API",
        description:
            "A API de Gerenciamento de Incidentes de Tráfego foi desenvolvida com Java e Spring, oferecendo soluções para o gerenciamento de acidentes de trânsito, usuários e autenticação. Com endpoints públicos e privados, permite o registro detalhado de acidentes, incluindo veículos, localização, data, hora, gravidade e feridos, armazenando os dados validados em um banco MongoDB. Foi implementado um workflow de Integração Contínua (CI) utilizando GitHub Actions para testes e builds em pull requests, e um processo de Entrega Contínua (CD) que realiza o deploy automático da aplicação em produção. A aplicação é containerizada com Docker e implantada na Azure, garantindo atualizações rápidas e escalabilidade.",
        techIcons: [
            <JavaIcon key="java" />,
            <SpringIcon key="spring" />,
            <MongoDBIcon key="mongodb" />,
            <Docker key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite:
            "https://traffic-incident-api-dev-dtbtfvg2e7e7a8eq.eastus2-01.azurewebsites.net/swagger-ui/index.html",
        linkGitHub:
            "https://github.com/viniciusleonel/traffic-incident-management-api",
    },
    {
        title: "VollMedAPI",
        description:
            "A VollMed API é uma aplicação desenvolvida em Java com Spring Framework, destinada à gestão de uma clínica médica. Com recursos de autenticação JWT, a API permite o cadastro de médicos, pacientes e consultas, fornecendo endpoints públicos para login e cadastro de usuários. Foi implementado um workflow de Integração Contínua (CI) utilizando GitHub Actions para testes e builds em pull requests, e um processo de Entrega Contínua (CD) que realiza o deploy automático da aplicação em produção. A aplicação é containerizada com Docker e implantada na Azure, garantindo atualizações rápidas e escalabilidade.",
        techIcons: [
            <JavaIcon key="java" />,
            <SpringIcon key="spring" />,
            <Postgres key="postgres" />,
            <Docker key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite: "https://vollmed-api-hza2gbbsedfchrer.eastus2-01.azurewebsites.net/swagger-ui/index.html",
        linkGitHub: "https://github.com/viniciusleonel/vollmed-api",
    },
    {
        title: "Micro-Saas-ToDo",
        description:
            "Esta é um micro-saas de gerenciamento de tarefas que permite aos usuários criar, atualizar, excluir e visualizar suas tarefas que utiliza o Stripe para processar pagamentos, permitindo que os usuários façam um upgrade no plano para conseguir criar mais tarefas.",
        techIcons: [
            <NextJsIcon key="nextjs" />,
            <ReactIcon key="react" />,
            <TailwindIcon key="tailwind" />,
            <TypeScriptIcon key="typescript" />,
        ],
        linkSite: "https://github.com/viniciusleonel/locaweb-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-app-kotlin",
    },
    {
        title: "Fintech",
        description:
            "A aplicação Fintech é uma plataforma que permite aos usuários gerenciar suas finanças pessoais, incluindo o cadastro e controle de receitas, despesas e investimentos. O sistema oferece uma interface amigável e funcionalidades para facilitar o acompanhamento financeiro.",
        techIcons: [
            <JavaIcon key="java" />,
            <JspIcon key="jsp" />,
            <BootstrapIcon key="bootstrap" />,
            <Oracle key="oracle" />,
        ],
        linkSite: "https://github.com/viniciusleonel/crud-fintech",
        linkGitHub: "https://github.com/viniciusleonel/crud-fintech",
    },
    {
        title: "Covid19 Brazil API",
        description:
            "Este projeto é um front-end que consome a API Covid19 Brasil, permitindo a busca de casos de Covid-19 no Brasil e no mundo. O projeto oferece filtros adicionais e pesquisa por data.",
        techIcons: [
            <NextJsIcon key="nextjs" />,
            <ReactIcon key="react" />,
            <TailwindIcon key="tailwind" />,
            <TypeScriptIcon key="typescript" />,
        ],
        linkSite: "https://viniciusleonel-dev-covid-api.vercel.app/",
        linkGitHub: "https://github.com/viniciusleonel/covid-api",
    },
    {
        title: "WheaterApp",
        description:
            "Desenvolvimento de um aplicativo Android com Jetpack Compose que consome uma API de clima da HGBrasil e usa Retrofit para consultar a previsão do tempo em uma cidade específica, exibindo dados como temperatura mínima e máxima, chance de chuva, velocidade do vento, entre outros.",
        techIcons: [
            <Kotlin key="kotlin" />,
            <JetPackCompose key="compose" />,
            <AndroidIcon key="android" />,
        ],
        linkSite: "https://github.com/viniciusleonel/weather-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/weather-app-kotlin",
    },
    {
        title: "Pokedex",
        description:
            "Desenvolvimento de uma aplicação web que consome a PokeAPI para exibir informações sobre Pokémon, usando HTML, CSS e JavaScript",
        techIcons: [
            <HtmlIcon key="html" />,
            <CssIcon key="css" />,
            <JavaScriptIcon key="javascript" />,
        ],
        linkSite: "https://pokedex-viniciusleonel.vercel.app/",
        linkGitHub: "https://github.com/viniciusleonel/pokedex/tree/main",
    },
];

export default projectsList;
