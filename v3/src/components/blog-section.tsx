import { portfolioData } from "@/data/portfolio";
import { SectionTitle } from "./ui/section-title";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

interface BlogSectionProps {
    limit?: number;
}

export function BlogSection({ limit }: BlogSectionProps) {
    const displayedBlogs = limit ? portfolioData.blogs.slice(0, limit) : portfolioData.blogs;

    return (
        <section id="blog" className="mb-16 mt-16 border-t border-dashed border-neutral-800 pt-16">
            <SectionTitle title="Sharing What I Learn" />

            <div className="space-y-4 mt-4">
                {displayedBlogs.map((blog: { link: string, date: string, title: string }, idx: number) => (
                    <a
                        key={idx}
                        href={blog.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col sm:flex-row gap-2 sm:gap-6 p-4 border border-dashed border-neutral-800 bg-neutral-900/20 hover:bg-neutral-900/60 transition-colors"
                    >
                        <div className="shrink-0 w-32">
                            <span className="text-sm font-mono text-neutral-500">{blog.date}</span>
                        </div>
                        <div className="grow flex justify-between items-start gap-4">
                            <h3 className="text-base font-serif text-neutral-200 group-hover:text-white transition-colors">
                                {blog.title}
                            </h3>
                            <span className="text-neutral-600 group-hover:text-white transition-colors mt-1 shrink-0">
                                <ArrowUpRight size={16} />
                            </span>
                        </div>
                    </a>
                ))}
            </div>

            {limit && (
                <div className="mt-6 flex justify-end">
                    <a href="/blog" className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-mono text-neutral-400 border border-neutral-700 bg-neutral-900/50 hover:bg-neutral-800 hover:text-white transition-colors">
                        View all posts <ArrowUpRight size={14} />
                    </a>
                </div>
            )}
        </section>
    );
}
