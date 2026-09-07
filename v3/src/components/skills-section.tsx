import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./ui/section-title";

export function SkillsSection() {
    return (
        <section id="skills" className="mb-16">
            <SectionTitle title="Skills" />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {portfolioData.skills.map((group, idx) => (
                    <div
                        key={idx}
                        className="p-4 border border-dashed border-neutral-700 bg-neutral-900/20"
                    >
                        <h3 className="text-sm font-serif text-neutral-200 mb-3">
                            {group.category}
                        </h3>
                        <div className="flex flex-wrap gap-1.5">
                            {group.items.map((item, itemIdx) => (
                                <span
                                    key={itemIdx}
                                    className="text-xs font-mono px-2 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-300"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
