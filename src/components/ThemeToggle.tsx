"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Sparkles } from "lucide-react";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ 
  className = "",
  showLabel = false 
}) => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setMounted(true);
    const isCurrentlyDark = document.documentElement.classList.contains("dark");
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const nextTheme = !isDark;

    // Determine circular expansion epicenter from button center
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : e.clientX;
    const y = rect ? rect.top + rect.height / 2 : e.clientY;

    // Calculate maximum distance to screen corners
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const applyTheme = () => {
      setIsDark(nextTheme);
      if (nextTheme) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    };

    // 1. Native View Transitions API with circular clip-path reveal
    if (typeof document !== "undefined" && "startViewTransition" in document) {
      try {
        const transition = (document as unknown as { startViewTransition: (cb: () => void) => { ready: Promise<void> } }).startViewTransition(applyTheme);
        await transition.ready;
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`
            ]
          },
          {
            duration: 650,
            easing: "cubic-bezier(0.4, 0, 0.2, 1)",
            pseudoElement: "::view-transition-new(root)"
          }
        );
        return;
      } catch (err) {
        // Fall back gracefully if animation interrupted
        applyTheme();
        return;
      }
    }

    // 2. High-performance fallback for non-supporting browsers
    if (typeof document !== "undefined") {
      const ripple = document.createElement("div");
      ripple.style.position = "fixed";
      ripple.style.inset = "0";
      ripple.style.pointerEvents = "none";
      ripple.style.zIndex = "9999999";
      ripple.style.backgroundColor = nextTheme ? "#0B0F17" : "#FAF8F5";
      ripple.style.clipPath = `circle(0px at ${x}px ${y}px)`;
      ripple.style.transition = "clip-path 600ms cubic-bezier(0.4, 0, 0.2, 1)";
      document.body.appendChild(ripple);

      requestAnimationFrame(() => {
        ripple.style.clipPath = `circle(${endRadius}px at ${x}px ${y}px)`;
      });

      setTimeout(() => {
        applyTheme();
        ripple.style.opacity = "0";
        ripple.style.transition = "opacity 200ms ease";
        setTimeout(() => {
          if (ripple.parentNode) ripple.parentNode.removeChild(ripple);
        }, 200);
      }, 550);
    }
  };

  if (!mounted) {
    return (
      <div 
        className={`w-9 h-9 rounded-full border border-warm-border bg-warm-bgSecondary/80 animate-pulse ${className}`} 
      />
    );
  }

  return (
    <button
      ref={buttonRef}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className={`relative group flex items-center gap-2 p-2 rounded-full border border-warm-border hover:border-warm-borderHover bg-white/80 dark:bg-[#151D2C]/90 backdrop-blur-md transition-all shadow-xs hover:shadow-warm-sm focus:outline-none focus:ring-2 focus:ring-warm-accent/40 ${className}`}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.div
              key="moon"
              initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="text-[#38BDF8] flex items-center justify-center"
            >
              <Moon className="w-4 h-4 fill-[#38BDF8]/20 stroke-[2.2]" />
            </motion.div>
          ) : (
            <motion.div
              key="sun"
              initial={{ rotate: 90, scale: 0.4, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              exit={{ rotate: -90, scale: 0.4, opacity: 0 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="text-warm-accent flex items-center justify-center"
            >
              <Sun className="w-4 h-4 fill-warm-accent/20 stroke-[2.2]" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {showLabel && (
        <span className="text-xs font-mono font-medium text-warm-textSecondary group-hover:text-warm-textPrimary transition-colors pr-1">
          {isDark ? "Dark" : "Light"}
        </span>
      )}
    </button>
  );
};
