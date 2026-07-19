import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "border-border/80 bg-background/50 placeholder:text-muted-foreground flex h-11 w-full rounded-lg border px-3 py-2 text-sm backdrop-blur-sm transition-all duration-200 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
