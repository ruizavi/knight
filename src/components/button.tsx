import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-sandrift-700 hover:bg-sandrift-600 text-lola-50 [&>svg]:fill-lola-50 stroke-2",
        secundary:
          "bg-amethyst-smoke-800 hover:bg-amethyst-smoke-600 text-lola-50 [&>svg]:fill-lola-50 stroke-2",
        danger:
          "bg-night-shadz-800 hover:bg-night-shadz-700 text-lola-50 [&>svg]:fill-lola-50 stroke-2",
        ghost: "text-night hover:bg-lola-200",
        link: "text-jaguar-900 hover:text-bold hover:underline [&>svg]:fill-jaguar-900 stroke-2",
      },
      size: {
        sm: "px-3 py-1 [&>svg]:h-[20px] [&>svg]:w-[20px] [&>svg]:pr-1 text-sm",
        md: "px-4 py-2 [&>svg]:h-[24px] [&>svg]:w-[24px] [&>svg]:pr-2 text-md",
        lg: "px-4 py-3 [&>svg]:h-[24px] [&>svg]:w-[24px] [&>svg]:pr-2 text-lg",
        icon: "[&>svg]:h-[28px] [&>svg]:w-[28px] p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ isChild = false, variant, size, className, ...props }, ref) => {
    const Component = isChild ? Slot : "button";

    return (
      <Component
        className={cn(buttonVariants({ className, variant, size }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
