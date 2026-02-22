import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { BlogSection } from "@/components/blog-section";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ExperienceSection limit={2} />
      <ProjectsSection limit={4} />
      <BlogSection limit={3} />

      <footer className="mt-16 pt-8 border-t border-dashed border-neutral-700 text-center text-sm text-neutral-500 font-mono">
        <p>&copy; {new Date().getFullYear()} Ryan Malawa.</p>
      </footer>
    </main>
  );
}
