import { Header } from "@/components/header";
import { ProjectsSection } from "@/components/projects-section";

export default function ProjectsPage() {
    return (
        <main className="min-h-screen">
            <Header />

            <div className="mt-8">
                <ProjectsSection />
            </div>

            <footer className="mt-16 pt-8 border-t border-dashed border-neutral-700 text-center text-sm text-neutral-500 font-mono">
                <p>&copy; {new Date().getFullYear()} Ryan Malawa.</p>
            </footer>
        </main>
    );
}
