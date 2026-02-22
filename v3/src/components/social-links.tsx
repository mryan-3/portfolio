"use client";

import { GithubLogo, LinkedinLogo, EnvelopeSimple } from "@phosphor-icons/react";
import { portfolioData } from "@/data/portfolio";
import Link from "next/link";

export function SocialLinks() {
    return (
        <div className="flex items-center gap-3">
            <Link
                href={portfolioData.contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-dashed border-neutral-600 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-colors"
            >
                <GithubLogo weight="bold" />
                GitHub
            </Link>

            <Link
                href={portfolioData.contact.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-dashed border-neutral-600 bg-neutral-800 hover:bg-neutral-700 hover:text-white transition-colors"
            >
                <LinkedinLogo weight="bold" />
                LinkedIn
            </Link>

            <Link
                href={`mailto:${portfolioData.contact.email}`}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-dashed border-neutral-600 bg-white text-black hover:bg-neutral-200 transition-colors"
            >
                <EnvelopeSimple weight="bold" />
                Email
            </Link>
        </div>
    );
}
