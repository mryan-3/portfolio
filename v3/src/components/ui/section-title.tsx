import { ReactNode } from "react";

interface SectionTitleProps {
    title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
    return (
        <div className="relative inline-block border border-neutral-600 bg-neutral-900/50 hover:bg-neutral-800 transition-colors px-3 py-1.5 mb-6 group cursor-default">
            {/* 4 corner handles */}
            <div className="absolute -top-[3px] -left-[3px] w-1.5 h-1.5 bg-neutral-500 border border-neutral-900 transition-colors group-hover:bg-neutral-400"></div>
            <div className="absolute -top-[3px] -right-[3px] w-1.5 h-1.5 bg-neutral-500 border border-neutral-900 transition-colors group-hover:bg-neutral-400"></div>
            <div className="absolute -bottom-[3px] -left-[3px] w-1.5 h-1.5 bg-neutral-500 border border-neutral-900 transition-colors group-hover:bg-neutral-400"></div>
            <div className="absolute -bottom-[3px] -right-[3px] w-1.5 h-1.5 bg-neutral-500 border border-neutral-900 transition-colors group-hover:bg-neutral-400"></div>

            <h2 className="text-lg font-serif text-neutral-200 group-hover:text-white transition-colors m-0 leading-none">
                {title}
            </h2>
        </div>
    );
}
