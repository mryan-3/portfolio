"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [hoveredRect, setHoveredRect] = useState<DOMRect | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Only show custom cursor on devices with fine pointer (desktop)
        if (window.matchMedia("(pointer: coarse)").matches) {
            return;
        }

        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleHoverStart = (e: Event) => {
            const target = e.currentTarget as HTMLElement;
            setHoveredRect(target.getBoundingClientRect());
        };

        const handleHoverEnd = () => {
            setHoveredRect(null);
        };

        window.addEventListener("mousemove", updateMousePosition);

        // Attach hover listeners to all interactive elements
        // Exclude the outer layout containers so it only snaps to actual individual cards/links
        const interactiveSelectors = 'a, button, input, select, textarea, [role="button"], .group, .interactive';

        const attachListeners = () => {
            document.querySelectorAll(interactiveSelectors).forEach((el) => {
                // Ensure we don't attach multiple times
                el.removeEventListener("mouseenter", handleHoverStart as EventListener);
                el.removeEventListener("mouseleave", handleHoverEnd as EventListener);

                el.addEventListener("mouseenter", handleHoverStart as EventListener);
                el.addEventListener("mouseleave", handleHoverEnd as EventListener);
            });
        };

        attachListeners();

        // Update rect if scrolling while hovered
        const handleScroll = () => {
            if (hoveredRect) {
                // To keep it simple, just drop hover state on scroll so it re-triggers properly 
                // or tracks mouse again.
                setHoveredRect(null);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });

        const observer = new MutationObserver((mutations) => {
            let shouldReattach = false;
            mutations.forEach((mutation) => {
                if (mutation.addedNodes.length > 0) shouldReattach = true;
            });
            if (shouldReattach) attachListeners();
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
            window.removeEventListener("scroll", handleScroll);
            document.querySelectorAll(interactiveSelectors).forEach((el) => {
                el.removeEventListener("mouseenter", handleHoverStart as EventListener);
                el.removeEventListener("mouseleave", handleHoverEnd as EventListener);
            });
            observer.disconnect();
        };
    }, [isVisible, hoveredRect]);

    if (!isVisible) return null;

    const isHovering = hoveredRect !== null;

    const variants = {
        default: {
            x: mousePosition.x - 4,
            y: mousePosition.y - 4,
            width: 8,
            height: 8,
            backgroundColor: "white",
            border: "0px solid transparent",
            mixBlendMode: "difference" as any,
        },
        hover: {
            x: hoveredRect ? hoveredRect.left - 4 : mousePosition.x, // pad slightly outwards
            y: hoveredRect ? hoveredRect.top - 4 : mousePosition.y,
            width: hoveredRect ? hoveredRect.width + 8 : 40,
            height: hoveredRect ? hoveredRect.height + 8 : 40,
            backgroundColor: "transparent",
            border: "1px dashed rgba(255, 255, 255, 0.4)",
            mixBlendMode: "normal" as any,
        }
    };

    return (
        <motion.div
            className="fixed top-0 left-0 pointer-events-none z-50 flex items-center justify-center cursor-none"
            variants={variants}
            animate={isHovering ? "hover" : "default"}
            transition={{
                type: "spring",
                stiffness: isHovering ? 400 : 700, // slower snap, faster follow
                damping: isHovering ? 30 : 40,
                mass: 0.5
            }}
        >
            {isHovering && (
                <>
                    <div className="absolute -top-[2px] -left-[2px] w-1.5 h-1.5 bg-neutral-300"></div>
                    <div className="absolute -top-[2px] -right-[2px] w-1.5 h-1.5 bg-neutral-300"></div>
                    <div className="absolute -bottom-[2px] -left-[2px] w-1.5 h-1.5 bg-neutral-300"></div>
                    <div className="absolute -bottom-[2px] -right-[2px] w-1.5 h-1.5 bg-neutral-300"></div>
                </>
            )}
        </motion.div>
    );
}
