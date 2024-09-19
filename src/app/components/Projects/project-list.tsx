import React from "react";
import JetPackCompose, {
    AndroidIcon,
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
        description:"The Locaweb Email App is a comprehensive email client leveraging the Locaweb API for seamless user communication. It allows users to send, receive, and delete emails effortlessly, with secure login and registration processes. Users can personalize their experience with customizable themes and color schemes, and receive real-time notifications for new emails and important events. The app features robust error handling and an intuitive, user-friendly interface for efficient email management. It integrates Retrofit for API communication, uses Jetpack Compose for a modern UI, leverages Kotlin Coroutines for smooth performance, and employs ViewModels and LiveData for effective state management.",
        techIcons: [
        <Kotlin key="kotlin" />, 
        <AndroidIcon key="android" />,
        <JetPackCompose key="JetPackCompose" />
    ],
        linkSite: "https://github.com/viniciusleonel/locaweb-fiap",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-fiap",
    },
    {
        title: "Locaweb API",
        description:"The Locaweb API, developed in Kotlin and Spring, manages users, user preferences, and emails within the Locaweb application. It provides CRUD endpoints for users and their preferences, and functionalities for sending and managing emails.Tailored for Locaweb, the API allows user registration, preference saving (e.g., custom settings and themes), and facilitates data migrations. It also enables secure email communication between users, ensuring operations are performed only by active, logged-in users.",
        techIcons: [
        <Kotlin key="kotlin" />, 
        <SpringIcon key="spring" />,
        <MySql key="mysql" />,
        <Docker key="docker" />
    ],
        linkSite: "https://github.com/viniciusleonel/locaweb-fiap",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-fiap",
    },
    {
        title: "Traffic Incident Management API",
        description:"The Traffic Incident Management API is a Spring Boot application designed to manage traffic incidents efficiently. It uses Spring Data MongoDB for data persistence and Spring Security for authentication and authorization, with role-based access control and password encryption. The system includes models for users, vehicles, injured individuals, addresses, and accidents, supporting CRUD operations and using DTOs for data transfer. Comprehensive API documentation is provided using OpenAPI and Swagger, with JWT authentication. ",
        techIcons: [
        <JavaIcon key="java" />, 
        <SpringIcon key="spring" />,
        <MongoDBIcon key="mongodb" />,
        <Docker key="docker" />
    ],
        linkSite: "https://github.com/viniciusleonel/traffic-incident-management-api",
        linkGitHub: "https://github.com/viniciusleonel/traffic-incident-management-api",
    },
    {
        title: "VollMedAPI",
        description:
            "The VollMed API is an application developed in Java with Spring Framework, aimed at managing a medical clinic. With JWT authentication resources, the API allows the registration of doctors, patients, and appointments, providing public endpoints for user login and registration.",
        techIcons: [
        <JavaIcon key="java" />, 
        <SpringIcon key="spring" />,
        <Postgres key="postgres" />
    ],
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
        linkSite: "https://github.com/viniciusleonel/locaweb-app-kotlin",
        linkGitHub: "https://github.com/viniciusleonel/locaweb-app-kotlin",
    },
    {
        title: "Fintech",
        description:
            "The Fintech application is a platform that allows users to manage their personal finances, including registering and controlling income, expenses, and investments. The system offers a user-friendly interface and features to facilitate financial tracking. The application was developed in Java with JSP.",
        techIcons: [
        <JavaIcon key="java"/>,
        <JspIcon key="jsp" />,
        <BootstrapIcon key="bootstrap" />,
        <Oracle key="oracle" />
    ],
        linkSite: "https://github.com/viniciusleonel/crud-fintech",
        linkGitHub: "https://github.com/viniciusleonel/crud-fintech",
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
            <JetPackCompose key="compose" />,
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
