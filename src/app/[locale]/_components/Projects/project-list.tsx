import React from "react";
import JetPackCompose, {
    AndroidIcon,
    AzureIcon,
    BootstrapIcon,
    CssIcon,
    DockerLink,
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
    RubyIcon
} from "../Skills/tech-icons";

const projectsList = [
    {
        title: "Micro-Saas-ToDo",
        description: "",
        techIcons: [
            <NextJsIcon key="nextjs" />,
            <ReactIcon key="react" />,
            <TailwindIcon key="tailwind" />,
            <TypeScriptIcon key="typescript" />,
        ],
        linkSite: "https://micro-saas-sample.vercel.app",
        linkGitHub: "https://github.com/viniciusleonel/micro-saas-sample",
    },
    {
        title: "Traffic Incident Management API",
        description: "",
        techIcons: [
            <JavaIcon key="java" />,
            <SpringIcon key="spring" />,
            <MongoDBIcon key="mongodb" />,
            <DockerLink key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite:
            "https://traffic-incident-api-dev-dtbtfvg2e7e7a8eq.eastus2-01.azurewebsites.net/swagger-ui/index.html",
        linkGitHub:
            "https://github.com/viniciusleonel/traffic-incident-management-api",
    },
    {
        title: "RubyAPI",
        description: "",
        techIcons: [
            <RubyIcon key="ruby" />,
            <DockerLink key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite:
            "https://luizalabs-ruby-a7dghshjbkcahyg3.eastus-01.azurewebsites.net/",
        linkGitHub:
            "https://github.com/viniciusleonel/first-ruby-api",
    },
    {
        title: "VollMedAPI",
        description: "",
        techIcons: [
            <JavaIcon key="java" />,
            <SpringIcon key="spring" />,
            <Postgres key="postgres" />,
            <DockerLink key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite: "https://vollmed-api-hza2gbbsedfchrer.eastus2-01.azurewebsites.net/swagger-ui/index.html",
        linkGitHub: "https://github.com/viniciusleonel/vollmed-api",
    },
    {
        title: "Locaweb APP",
        description: "",
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
        description: "",
        techIcons: [
            <Kotlin key="kotlin" />,
            <SpringIcon key="spring" />,
            <Postgres key="postgres" />,
            <DockerLink key="docker" />,
            <AzureIcon key="azure" />
        ],
        linkSite: "https://locaweb-api-a9amgke0dmgth0ej.eastus2-01.azurewebsites.net/swagger-ui/index.html",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-fiap",
    },
    {
        title: "Fintech",
        description: "",
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
        description: "",
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
        title: "WeatherApp",
        description: "",
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
        description: "",
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
