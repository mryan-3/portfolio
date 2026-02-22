import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./ui/section-title";
import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";

interface ExperienceSectionProps {
    limit?: number;
}

export function ExperienceSection({ limit }: ExperienceSectionProps) {
    const displayedExperience = limit ? portfolioData.experience.slice(0, limit) : portfolioData.experience;

    return (
        <section id="experience" className="mb-16">
            <SectionTitle title="Experience" />

            <div className="space-y-10 mt-4">
                {displayedExperience.map((exp, idx) => (
                    <div key={idx} className="group relative">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 border-b border-dashed border-neutral-800 pb-2">
                            <h3 className="text-lg font-serif text-neutral-200 flex items-center gap-3">
                                {exp.company}
                                <span className="text-[11px] font-mono font-normal px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-400">
                                    {exp.role}
                                </span>
                            </h3>
                            <span className="text-xs font-mono text-neutral-500 mt-2 sm:mt-0 flex items-center gap-1.5">
                                <span className="w-3 h-3 border border-neutral-600 inline-block bg-neutral-800"></span>
                                {exp.period}
                            </span>
                        </div>

                        <ul className="space-y-2 text-sm text-neutral-400 font-sans">
                            {exp.description.map((desc, i) => (
                                <li key={i} className="flex gap-3 items-start">
                                    <span className="text-neutral-600 mt-1.5 text-xs">●</span>
                                    <span className="leading-relaxed">{desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            {limit && (
                <div className="mt-8 flex justify-end">
                    <a href="/experience" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-mono text-neutral-400 border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-colors">
                        View all experience <ArrowUpRightIcon size={14} weight="bold" />
                    </a>
                </div>
            )}
        </section>
    );
}
