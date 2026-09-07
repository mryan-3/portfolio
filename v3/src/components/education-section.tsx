import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./ui/section-title";

export function EducationSection() {
    return (
        <section id="education" className="mb-16">
            <SectionTitle title="Education" />

            <div className="space-y-6 mt-4">
                {portfolioData.education.map((edu, idx) => (
                    <div key={idx} className="group relative">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 border-b border-dashed border-neutral-800 pb-2">
                            <h3 className="text-lg font-serif text-neutral-200 flex flex-wrap items-center gap-2">
                                {edu.institution}
                                <span className="text-[11px] font-mono font-normal px-1.5 py-0.5 border border-neutral-700 bg-neutral-900 text-neutral-400">
                                    {edu.degree}
                                </span>
                            </h3>
                            <span className="text-xs font-mono text-neutral-500 mt-1 sm:mt-0 flex items-center gap-1.5 shrink-0">
                                <span className="w-3 h-3 border border-neutral-600 inline-block bg-neutral-800"></span>
                                {edu.period}
                            </span>
                        </div>
                        <p className="text-sm text-neutral-400 font-mono">
                            {edu.status}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
