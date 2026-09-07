import { Header } from "@/components/header";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { SkillsSection } from "@/components/skills-section";

export default function ExperiencePage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="mt-8 space-y-8">
                <ExperienceSection />
                <EducationSection />
                <SkillsSection />
            </div>

            <footer className="mt-16 pt-8 border-t border-dashed border-neutral-700 text-center text-sm text-neutral-500 font-mono">
                <p>&copy; {new Date().getFullYear()} Ryan Malawa.</p>
            </footer>
        </main>
    );
}
