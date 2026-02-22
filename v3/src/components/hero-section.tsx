import { portfolioData } from "@/data/portfolio";
import { SocialLinks } from "./social-links";

export function HeroSection() {
    return (
        <section id="about" className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-serif text-white mb-2">
                Hi, I'm <span className="font-bold">Ryan</span>
            </h1>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 mb-6 font-mono">
                {portfolioData.roles.map((role, index) => (
                    <span key={role} className="flex items-center gap-2">
                        {role}
                        {index < portfolioData.roles.length - 1 && <span>•</span>}
                    </span>
                ))}
            </div>

            <div className="space-y-4 text-neutral-300 text-sm leading-relaxed mb-8">
                {portfolioData.bio.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                ))}
            </div>

            <div className="border border-dashed border-neutral-700 p-4 bg-neutral-900/30">
                <p className="text-sm text-neutral-400 mb-3">
                    Available for freelance or full-time roles. Slide into my DMs or Email me.
                </p>
                <SocialLinks />
            </div>
        </section>
    );
}
