import Link from "next/link";

export function Header() {
    return (
        <header className="flex items-center justify-between pb-4 mb-8 border-b border-dashed border-neutral-700">

            <nav className="flex gap-4 sm:gap-6 text-sm sm:text-base font-serif">
                <Link href="/" prefetch={true} className="hover:text-white text-neutral-400 transition-colors">Home</Link>
                <Link href="/experience" prefetch={true} className="hover:text-white text-neutral-400 transition-colors">Experience</Link>
                <Link href="/projects" prefetch={true} className="hover:text-white text-neutral-400 transition-colors">Projects</Link>
                <Link href="/blog" prefetch={true} className="hover:text-white text-neutral-400 transition-colors">Blog</Link>
            </nav>
        </header>
    );
}
