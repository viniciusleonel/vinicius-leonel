import React from "react";
import ProjectCard from "./project-card";
import {
    AndroidIcon,
    JackPackCompose,
    JavaIcon,
    Kotlin,
    NextJsIcon,
    ReactIcon,
    SpringIcon,
    TailwindIcon,
    TypeScriptIcon,
} from "../Skills/tech-icons";

const projectsList = [
    {
        title: "VollMedAPI",
        description:
            "A VollMed API é uma aplicação desenvolvida em Java com Spring Framework, destinada à gestão de uma clínica médica. Com recursos de autenticação JWT, a API permite o cadastro de médicos, pacientes e consultas, fornecendo endpoints públicos para login e cadastro de usuários.",
        techIcons: [<JavaIcon key="java" />, <SpringIcon key="spring" />],
        linkSite:
            "https://vollmed-api-postgres-neontech.onrender.com/swagger-ui/index.html",
        linkGitHub: "https://github.com/viniciusleonel/vollmed-api",
    },
    {
        title: "Covid19 Brazil API",
        description:
            "Front-end consumindo Covid19 Brazil API, realizando requisições para buscar casos no Brasil ou no mundo, com adição de filtros e busca por data, utilizando Next.JS, React.JS e TailWindCSS",
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
            "Desenvolvimento de um aplicativo que consome uma API de clima da HGBrasil e utiliza Retrofit para consultar a previsão do tempo em uma cidade específica, exibindo dados como temperatura mínima e máxima, chance de chuva, velocidade do vento, entre outros.",
        techIcons: [
        <Kotlin key="kotlin" />, 
        <JackPackCompose key="compose" />,
        <AndroidIcon key="android" />,
    ],
        linkSite: "https://github.com/viniciusleonel/weather-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/weather-app-kotlin",
    },
    {
        title: "Title4",
        description:
            "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
        techIcons: [<JavaIcon key="java" />, <SpringIcon key="spring" />],
        linkSite: "https://github.com/viniciusleonel",
        linkGitHub: "https://github.com/viniciusleonel",
    },
    // {
    //     imgCardSrc: "/images/icons/html.svg",
    //     imgAlt: "teste",
    //     title: "Title",
    //     description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
    //     techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
    //     linkSite: "https://github.com/viniciusleonel",
    //     linkGitHub: "https://github.com/viniciusleonel"
    // }
];

export default projectsList;
