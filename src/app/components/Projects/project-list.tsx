import React from "react";
import {
    AndroidIcon,
    CssIcon,
    HtmlIcon,
    JackPackCompose,
    JavaIcon,
    JavaScriptIcon,
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
            "The VollMed API is an application developed in Java with Spring Framework, aimed at managing a medical clinic. With JWT authentication resources, the API allows the registration of doctors, patients, and appointments, providing public endpoints for user login and registration.",
        techIcons: [
        <JavaIcon key="java" />, 
        <SpringIcon key="spring" />],
        linkSite: "https://github.com/viniciusleonel/vollmed-api",
        linkGitHub: "https://github.com/viniciusleonel/vollmed-api",
    },
    {
        title: "Micro-Saas-ToDo",
        description:
            "This is a micro-saas task management application that allows users to create, update, delete, and view their tasks. The micro-saas also allows users to filter and sort their tasks, as well as mark tasks as completed or pending. Login can be done with a Google account, GitHub, or via email through a magic link in conjunction with mailtrap, requiring environment variables to be configured in the .env file. The micro-saas also uses Stripe to process payments, allowing users to upgrade their plan to create more tasks. Stripe CLI is needed to listen to webhooks, so the micro-saas receives the payment and plan update.",
        techIcons: [
        <NextJsIcon key="nextjs" />,
        <ReactIcon key="react" />,
        <TailwindIcon key="tailwind" />,
        <TypeScriptIcon key="typescript" />,
    ],
        linkSite: "https://github.com/viniciusleonel/micro-saas-sample",
        linkGitHub: "https://github.com/viniciusleonel/micro-saas-sample",
    },
    {
        title: "Covid19 Brazil API",
        description:
            "Front-end consuming Covid19 Brazil API, making requests to search for cases in Brazil or worldwide, with added filters and search by date, using Next.JS, React.JS, and TailWindCSS",
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
            "Development of an application that consumes a weather API from HGBrasil and uses Retrofit to query the weather forecast in a specific city, displaying data such as minimum and maximum temperature, chance of rain, wind speed, among others.",
        techIcons: [
            <Kotlin key="kotlin" />,
            <JackPackCompose key="compose" />,
            <AndroidIcon key="android" />,
        ],
        linkSite: "https://github.com/viniciusleonel/weather-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/weather-app-kotlin",
    },
    {
        title: "Pokedex",
        description:
            "Development of a web application that consumes the PokeAPI to display information about Pokémon, using HTML, CSS, and JavaScript",
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
