import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const baseStyles =
      "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-xs font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-warm-accent disabled:pointer-events-none disabled:opacity-50";

    const variantStyles = {
      default:
        "bg-warm-accent text-white hover:bg-warm-accentHover shadow-xs",
      outline:
        "border border-warm-border bg-white dark:bg-[#151D2C] hover:bg-warm-bgSecondary text-warm-textPrimary",
      secondary:
        "bg-warm-bgSecondary text-warm-textPrimary hover:bg-warm-border",
      ghost:
        "hover:bg-warm-bgSecondary hover:text-warm-textPrimary",
    }[variant];

    const sizeStyles = {
      default: "h-10 px-4 py-2",
      sm: "h-8 rounded-lg px-3 text-[11px]",
      lg: "h-12 rounded-xl px-8 text-sm",
      icon: "h-9 w-9",
    }[size];

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variantStyles, sizeStyles, className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
