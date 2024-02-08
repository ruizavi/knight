import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { cn } from "../utils/cn";
import { As } from "../utils/interfaces";

//===============================================================================
//
//===============================================================================

const calloutHeaderVariants = cva("flex pb-4");

interface CalloutHeaderProps extends React.HTMLAttributes<HTMLHeadElement> {}

const CalloutHeader = React.forwardRef<HTMLHeadElement, CalloutHeaderProps>(
  ({ className, ...props }, ref) => {
    const Component = "header";

    return (
      <Component
        ref={ref}
        className={cn(calloutHeaderVariants({ className }))}
        {...props}
      />
    );
  }
);

CalloutHeader.displayName = "Callout.Header";

//===============================================================================
//
//===============================================================================

const calloutIconVariants = cva("[&>svg]:w-[24px] [&>svg]:h-[24px] pr-4");

interface CalloutIconProps extends React.HTMLAttributes<HTMLElement> {}

const CalloutIcon = React.forwardRef<HTMLElement, CalloutIconProps>(
  ({ className, ...props }, ref) => {
    const Component = "picture";

    return (
      <Component
        ref={ref}
        className={cn(calloutIconVariants({ className }))}
        {...props}
      />
    );
  }
);

CalloutIcon.displayName = "Callout.Icon";

//===============================================================================
//
//===============================================================================
const calloutTitleVariants = cva("font-bold text-md");

interface CalloutTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

const CalloutTitle = React.forwardRef<HTMLHeadingElement, CalloutTitleProps>(
  ({ className, ...props }, ref) => {
    const Component = "h1";

    return (
      <Component
        ref={ref}
        className={cn(calloutTitleVariants({ className }))}
        {...props}
      />
    );
  }
);

CalloutTitle.displayName = "Callout.Title";

//===============================================================================
//
//===============================================================================

const calloutMessageVariants = cva("font-light");

interface CalloutMessageProps
  extends React.HTMLAttributes<HTMLParagraphElement> {}

const CalloutMessage = React.forwardRef<
  HTMLParagraphElement,
  CalloutMessageProps
>(({ className, ...props }, ref) => {
  const Component = "p";

  return (
    <Component
      ref={ref}
      className={cn(calloutMessageVariants({ className }))}
      {...props}
    />
  );
});

CalloutMessage.displayName = "Callout.Message";

//===============================================================================
//
//===============================================================================

const calloutVariants = cva("p-4 m-4 rounded bg-opacity-60", {
  variants: {
    variant: {
      info: "bg-polar-400",
      success: "bg-sandrift-500",
      warning: "bg-cosmic-700",
      error: "bg-night-shadz-700",
      themeless: "bg-amethyst-smoke-500",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export interface CalloutProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof calloutVariants>,
    As<"section"> {}

const Callout = React.forwardRef<HTMLElement, CalloutProps>(
  ({ as, className, variant, ...props }, ref) => {
    const Component = as ?? "section";

    return (
      <Component
        {...props}
        className={cn(calloutVariants({ className, variant }))}
        ref={ref}
      />
    );
  }
);

Callout.displayName = "Callout";

export {
  Callout,
  CalloutHeader,
  CalloutIcon,
  CalloutTitle,
  CalloutMessage,
  calloutVariants,
};
