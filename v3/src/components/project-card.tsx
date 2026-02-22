"use client";

import { ArrowUpRight } from "@phosphor-icons/react";

interface ProjectCardProps {
    project: {
        title: string;
        description: string;
        link: string;
    };
}

export function ProjectCard({ project }: ProjectCardProps) {
    return (
        <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block p-5 border border-dashed border-neutral-700 bg-neutral-900/20 hover:bg-neutral-900/60 transition-colors"
        >
            <div className="flex justify-between items-start mb-3">
                <h3 className="text-lg font-serif text-white group-hover:text-neutral-300 transition-colors">
                    {project.title}
                </h3>
                <span className="text-neutral-500 group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                </span>
            </div>
            <p className="text-sm text-neutral-400 line-clamp-3 leading-relaxed">
                {project.description}
            </p>
        </a>
    );
}
