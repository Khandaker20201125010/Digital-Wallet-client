import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative z-10 inline-flex items-center justify-center overflow-hidden font-bold transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-ring/50 focus-visible:ring-[3px]",
  {
    variants: {
      variant: {
        default:
          "rounded-md bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "rounded-md bg-destructive text-white shadow-xs hover:bg-destructive/90",
        outline:
          "rounded-md border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground",
        secondary:
          "rounded-md bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        gradient: // 🌈 your custom button style
          "cursor-pointer rounded-full border-2 border-purple-500 bg-gradient-to-r from-blue-950 via-purple-950 to-blue-950 px-6 py-3 text-white",
      },
      size: {
        default: "text-base px-4 py-2",
        sm: "text-sm px-3 py-1.5",
        lg: "text-lg px-6 py-3",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {/* background sliding span (only for gradient button) */}
      {variant === "gradient" && (
        <span className="absolute inset-0 z-[-1] -translate-x-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0" />
      )}

      <span className="relative">{children}</span>
    </Comp>
  );
}

export { Button, buttonVariants };
