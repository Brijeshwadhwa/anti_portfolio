"use client";

import React from "react";
import { cn } from "@/lib/utils";

type TColorProp = string | string[];

export interface ShineBorderProps {
  borderRadius?: number;
  borderWidth?: number;
  duration?: number;
  shineColor?: TColorProp;
  className?: string;
  children?: React.ReactNode;
}

/**
 * @name Shine Border
 * @description An animated background border effect with gradient shine.
 */
export function ShineBorder({
  borderRadius = 16,
  borderWidth = 1,
  duration = 14,
  shineColor = ["#A07CFE", "#FE8FB5", "#FFBE7B"],
  className,
  children,
}: ShineBorderProps) {
  const colors = Array.isArray(shineColor) ? shineColor.join(",") : shineColor;

  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
          "--border-width": `${borderWidth}px`,
          "--duration": `${duration}s`,
          "--mask-linear-gradient": `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          "--background-radial-gradient": `radial-gradient(transparent,transparent, ${colors},transparent,transparent)`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 size-full rounded-[--border-radius] p-[--border-width]",
        "before:absolute before:inset-0 before:size-full before:rounded-[--border-radius] before:p-[--border-width]",
        "before:will-change-[background-position] before:content-['']",
        "before:![-webkit-mask-composite:xor] before:![mask-composite:exclude]",
        "before:[background-image:var(--background-radial-gradient)]",
        "before:[background-size:300%_300%]",
        "before:[mask:var(--mask-linear-gradient)]",
        "motion-safe:before:animate-shine",
        className
      )}
    >
      {children}
    </div>
  );
}

export default ShineBorder;
