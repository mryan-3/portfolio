import { portfolioData } from "@/data/portfolio";
import { ProjectCard } from "./project-card";
import { SectionTitle } from "./ui/section-title";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface ProjectsSectionProps {
    limit?: number;
}

export function ProjectsSection({ limit }: ProjectsSectionProps) {
    const displayedProjects = limit ? portfolioData.projects.slice(0, limit) : portfolioData.projects;

    return (
        <section id="projects" className="mb-16">
            <SectionTitle title="Things I've Built" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                {displayedProjects.map((project, idx) => (
                    <ProjectCard key={idx} project={project} />
                ))}
            </div>

            {limit && (
                <div className="mt-6 flex justify-end">
                    <a href="/projects" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-mono text-neutral-400 border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-colors">
                        View all projects <ArrowUpRight size={14} weight="bold" />
                    </a>
                </div>
            )}
        </section>
    );
}
