import React from 'react';
import ProjectCard from "./project-card";
import { JavaIcon, SpringIcon } from "../Skills/tech-icons";

const projectsList = [
    {
        imgCardSrc: "/images/cleanSky.jpg",
        imgAlt: "teste",
        title: "Title1",
        description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
        techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
        linkSite: "https://github.com/viniciusleonel",
        linkGitHub: "https://github.com/viniciusleonel"
    },
    {
        imgCardSrc: "",
        imgAlt: "teste",
        title: "Title2",
        description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
        techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
        linkSite: "https://github.com/viniciusleonel",
        linkGitHub: "https://github.com/viniciusleonel"
    },
    {
        imgCardSrc: "/images/coming-soon.png",
        imgAlt: "teste",
        title: "Title3",
        description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
        techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
        linkSite: "https://github.com/viniciusleonel",
        linkGitHub: "https://github.com/viniciusleonel"
    },
    {
        imgCardSrc: "/images/coming-soon.png",
        imgAlt: "teste",
        title: "Title4",
        description: "Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem.",
        techIcons: [<JavaIcon key="java"/>, <SpringIcon key="spring"/>],
        linkSite: "https://github.com/viniciusleonel",
        linkGitHub: "https://github.com/viniciusleonel"
    }
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
