import ProjectCard from "../../components/Projects/projectCard"
import { JavaIcon, NodeIcon, SpringIcon } from "../../components/Skills/techIcons"

export function ProjectList () {
    return (
        <div className="mt-8 h-svh  flex flex-col justify-center items-center">
                <h2 className="pb-8 text-3xl">Projects</h2>
                <div className="flex overflow-hidden w-2/3 gap-6 justify-center">
                    <ProjectCard
                        imgCardSrc="/images/cleanSky.jpg" 
                        imgAlt="teste"
                        title="Title"
                        description="Description Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem."
                        techIcons={[<JavaIcon key="java"/>, <SpringIcon key="spring"/>] }
                        linkSite="https://github.com/viniciusleonel"
                        linkGitHub="https://github.com/viniciusleonel"
                    />
                    {/* <ProjectCard
                        imgCardSrc=""
                        imgAlt="teste" 
                        title="Title"
                        description="Description 
                        Ladipisicinghfkjxgjg
                        
                        ,cg,chckh.k fxhfhgrs rnsrnhdm elit. Numquam minus quia nesciunt nemo explicabo magnam, iure accusamus iste delectus adipisci repellendus repellat fuga rem non impedit incidunt veniam. Nulla, autem."
                        techIcons={[<NodeIcon key="node"/>, <SpringIcon key="spring"/>] }
                        linkSite="https://github.com/viniciusleonel"
                        linkGitHub="https://github.com/viniciusleonel"
                    /> */}
                    
                </div>
            </div>
    )
}