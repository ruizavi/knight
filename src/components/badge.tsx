import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import { As } from "../utils/interfaces";
import { cn } from "../utils/cn";

const badgeVariants = cva("inline-flex p-1 rounded-md font-semibold text-sm", {
  variants: {
    variant: {
      primary: "bg-sandrift-400 hover:bg-sandrift-300 text-night",
      secundary:
        "bg-amethyst-smoke-800  hover:bg-amethyst-smoke-900 text-polar-50",
      error: "bg-night-shadz-700  hover:bg-night-shadz-600 text-polar-50",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants>,
    As<"span"> {}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ as, variant, className, ...props }, ref) => {
    const C = as ?? "span";

    return (
      <C
        {...props}
        className={cn(badgeVariants({ className, variant }))}
        ref={ref}
      />
    );
  }
);

Badge.displayName = "Badge";

const badgeNumberVariants = cva(
  "bg-night bg-opacity-40 text-polar-50 rounded px-1 mr-1"
);

interface BadgeNumberProps
  extends HTMLAttributes<HTMLParagraphElement>,
    As<"p"> {}

const BadgeNumber = React.forwardRef<HTMLParagraphElement, BadgeNumberProps>(
  ({ as, className, ...props }, ref) => {
    const C = as ?? "p";

    return (
      <C
        {...props}
        className={cn(badgeNumberVariants({ className }))}
        ref={ref}
      />
    );
  }
);

BadgeNumber.displayName = "Badge.Counter";

export { Badge, BadgeNumber, badgeVariants };
