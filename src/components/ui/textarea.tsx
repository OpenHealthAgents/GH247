import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "border-border/80 bg-background/50 placeholder:text-muted-foreground flex min-h-[100px] w-full resize-y rounded-lg border px-3 py-2 text-sm backdrop-blur-sm transition-all duration-200 focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/20 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
