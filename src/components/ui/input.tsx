import * as React from "react";
import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-xl border border-warm-border bg-warm-bgSecondary/60 px-3 py-2 text-xs font-mono text-warm-textPrimary placeholder:text-warm-textSecondary/60 focus:outline-none focus:border-warm-accent focus:ring-1 focus:ring-warm-accent transition-colors disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
